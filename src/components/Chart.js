import React, { Component } from 'react';
import ScatterPlot from './ScatterPlot'
import BubbleChart from './BubbleChart'

class Chart extends Component {
  state = {
    width: -1,
    show: false
  }

  componentWillMount() {
    if (Array.isArray(this.props.data) && this.props.data.length > 1) {
      this.setState({ show: true })
    } else {
      this.setState({ show: false })
    }
  }

  componentDidMount() {
    this.setState({width: this.chart.offsetWidth})
  }

  render() {
    const width = Math.max(this.state.width, 300)
    const styles = {
      width: width,
      height: width * 0.6,
      padding: 40,
    }

    return (
      <div ref={input => { this.chart = input }}>
        { (this.state.show) && (this.props.chartId === 1.2) &&
            <ScatterPlot {...this.props} {...styles} />
        }
        { (this.state.show) && (this.props.chartId === 1.3) &&
            <BubbleChart {...this.props} {...styles} />
        }
      </div>
    )
  }
}

export default Chart
