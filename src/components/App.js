import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import Query from './Query';
import Settings from './Settings';
import Chart from './Chart';
import * as WikidataAPI from '../utils/api';
import { convertData, getNumberIndices } from '../utils/convertData';
import serializeForm from 'form-serialize';

class App extends Component {
  state = {
    data: [],
    header: [],
    numberIndices: [],
    status: "",
    settings: {}
  }

  getSPARQLResult = (event) => {
    this.setState({ status: "waiting" })
    event.preventDefault()
    const query = serializeForm(event.target)
    WikidataAPI.fetchSPARQLResult(query)
      .then(res => res.results.bindings)
      .then(data => {
        const new_data = convertData(data)
        const numberIndices = getNumberIndices(Object.values(new_data[0]))
        const scatterPlotSettings = {
          'x-axis': numberIndices[0],
          'y-axis': numberIndices[1],
          'label': -1
        }
        this.setState({ data: new_data,
                        header: Object.keys(new_data[0]),
                        numberIndices: numberIndices,
                        status: "done",
                        settings: scatterPlotSettings
                      })
      })
  }

  setSettings = (settings) => {
    this.setState({ settings })
  }

  render() {
    return (
      <Grid>
        <PageHeader>Wikidata Visualization</PageHeader>
        <Col md={4}>
          <Row>
            <Query
              onSubmit={this.getSPARQLResult}
              status={this.state.status}
            />
          </Row>
          <Row>
            <Settings
              header={this.state.header}
              numberIndices={this.state.numberIndices}
              settings={this.state.settings}
              onChange={this.setSettings}
            />
          </Row>
        </Col>
        <Col md={8}>
            <Chart
              data={this.state.data}
              header={this.state.header}
              settings={this.state.settings}
            />
        </Col>
      </Grid>
    );
  }
}

export default App;