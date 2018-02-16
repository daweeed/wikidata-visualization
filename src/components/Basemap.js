import React, { Component } from 'react'
import { TileLayer, LayersControl, ImageOverlay } from 'react-leaflet'
import { baseMapSettings, solarSystemSettings } from '../utils/basemap'
import { GoogleLayer } from 'react-leaflet-google'

const { Overlay } = LayersControl

class Basemap extends Component {
  state = {
    basemap: 'OpenStreetMap',
    solarSystem: 'Earth'
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.basemap != null)
      this.setState({ basemap: nextProps.basemap })
    if (this.props.solarSystem != null)
      this.setState({ solarSystem: nextProps.solarSystem })
  }

  render() {
    return (
      <div>
        {this.state.solarSystem !== 'Earth' && (
          <ImageOverlay
            bounds={solarSystemSettings[this.state.solarSystem].bounds}
            url={
              process.env.NODE_ENV === 'development'
                ? solarSystemSettings[this.state.solarSystem].url
                : `/wikidata-visualization${
                    solarSystemSettings[this.state.solarSystem].url
                  }`
            }
          />
        )}

        {this.state.solarSystem === 'Earth' && (
          <div>
            {this.state.basemap.startsWith('Google') && (
              <GoogleLayer
                googlekey="AIzaSyCTsXByA2UWSCIcX9BuPUdB8oMF6hXqJqU"
                maptype={baseMapSettings[this.state.basemap].maptype}
              />
            )}

            {!this.state.basemap.startsWith('Google') &&
              baseMapSettings[this.state.basemap].overlay == null && (
                <TileLayer
                  attribution={baseMapSettings[this.state.basemap].attribution}
                  url={baseMapSettings[this.state.basemap].url}
                />
              )}

            {!this.state.basemap.startsWith('Google') &&
              baseMapSettings[this.state.basemap].overlay != null && (
                <LayersControl position="topright">
                  <TileLayer
                    attribution={
                      baseMapSettings[this.state.basemap].attribution
                    }
                    url={baseMapSettings[this.state.basemap].url}
                  />
                  <Overlay
                    checked
                    name={baseMapSettings[this.state.basemap].overlay.name}
                  >
                    <TileLayer
                      attribution={
                        baseMapSettings[this.state.basemap].attribution
                      }
                      url={baseMapSettings[this.state.basemap].overlay.url}
                    />
                  </Overlay>
                </LayersControl>
              )}
          </div>
        )}
      </div>
    )
  }
}

export default Basemap
