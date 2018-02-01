import React, { Component } from 'react'
import {
  Map,
  Marker,
  CircleMarker,
  Tooltip,
  FeatureGroup
} from 'react-leaflet'
import Leaflet, { latLngBounds } from 'leaflet'
import Basemap from './Basemap'
import { getRadius, getColors } from '../utils/scales'
import { getTooltipHTML } from '../utils/convertData'
import 'leaflet/dist/leaflet.css'

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/'

class LeafletMap extends Component {
  state = {
    lat: 0,
    lng: 0,
    zoom: 1
  }

  componentWillMount() {
    this.fitBounds = this.fitBounds.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.moreSettings.solarSystem !== nextProps.moreSettings.solarSystem) {
      this.refs.map.leafletElement.options.crs = (nextProps.moreSettings.solarSystem==='Moon') ? Leaflet.CRS.Simple : Leaflet.CRS.EPSG3857
      this.fitBounds()
    }
  }

  componentDidUpdate() {
    this.refs.map.leafletElement.invalidateSize(false)
  }

  componentDidMount() {
    this.props.updateFitBoundsFcn(this.fitBounds)
    this.fitBounds()
  }

  fitBounds() {
    this.refs.map.leafletElement.fitBounds(this.getBounds(this.props))
  }

  getBounds(props) {
    // get coordinates
    const coordData = props.data.filter((item, i) => props.rowSelections.includes(i))
      .filter(item => item[props.header[props.settings['coordinate']]] != null)
      .map((item, i) => (item[props.header[props.settings['coordinate']]]
        .split(', ').map(parseFloat).reverse()))

    // get bounds
    const bounds = latLngBounds(coordData[0])
    coordData.forEach((coord) => { bounds.extend(coord) })

    // check if bounds is empty
    if (Object.keys(bounds).length === 0) {
      bounds.extend([90,180]).extend([-90,-180])
    }

   return bounds
  }

  render() {

    const bounds = this.getBounds(this.props)

    const radii = getRadius(this.props)
    const colors = getColors(this.props)
    const tooltipHTMLs = getTooltipHTML(this.props)

    return (
      <div>
        <Map
          ref='map'
          crs={(this.props.moreSettings.solarSystem==='Moon') ? Leaflet.CRS.Simple : Leaflet.CRS.EPSG3857}
          style={{height: this.props.height, width: this.props.width}}
          bounds={bounds}>
          <Basemap
            solarSystem={this.props.moreSettings.solarSystem}
            basemap={this.props.moreSettings.baseMap} />
          {
            this.props.data.filter((item, i) => this.props.rowSelections.includes(i))
              .map((item, i) => {
                if (item[this.props.header[this.props.settings['coordinate']]] != null) {
                  const coord = item[this.props.header[this.props.settings['coordinate']]]
                    .split(', ').map(parseFloat).reverse()
                  
                  if (coord.length === 2) {
                    return (
                      <FeatureGroup key={i}>
                        { this.props.moreSettings.showMarkers && (
                          <Marker position={coord}>
                            <Tooltip>
                              <div dangerouslySetInnerHTML={{ __html: tooltipHTMLs[i] }} />
                            </Tooltip>
                          </Marker>
                        )
                        }
                        { this.props.moreSettings.showCircles && (
                          <CircleMarker
                            center={coord}
                            color='white'
                            weight={1}
                            fill={true}
                            fillColor={colors[i]}
                            fillOpacity={0.7}
                            radius={parseFloat(radii[i])}>
                            <Tooltip>
                              <div dangerouslySetInnerHTML={{ __html: tooltipHTMLs[i] }} />
                            </Tooltip>
                          </CircleMarker>
                        )
                        }
                      </FeatureGroup>
                    )
                  }
                }
                return null
              })
          }
        </Map>
      </div>
    )
  }
}

export default LeafletMap