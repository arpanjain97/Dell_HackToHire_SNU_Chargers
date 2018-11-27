import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';

import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const chartConfigs = {
  type: 'column2d',// The chart type
  width: '100%', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: { 
      // Chart Configuration 
      "chart": {
          "caption": "Countries With Most Oil Reserves [2017-18]",
          "subCaption": "In MMbbl = One Million barrels",
          "xAxisName": "Country",
          "yAxisName": "Reserves (MMbbl)",
          "numberSuffix": "K",
          "theme": "fusion",
      },
      // Chart Data
      "data": [{
          "label": "Venezuela",
          "value": "290"
      }, {
          "label": "Saudi",
          "value": "260"
      }, {
          "label": "Canada",
          "value": "180"
      }, {
          "label": "Iran",
          "value": "140"
      }, {
          "label": "Russia",
          "value": "115"
      }, {
          "label": "UAE",
          "value": "100"
      }, {
          "label": "US",
          "value": "30"
      }, {
          "label": "China",
          "value": "30"
      }]
  }
};

const src='/Logo.png';

class CustomerComponent extends Component {
  render() {
    return (
      <Grid columns={3} stackable>
        <Grid.Row>
          <Grid.Column>
            <Card color='red' fluid>
              <Card.Content>
                <ReactFC {...chartConfigs}/>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card color='orange' image={src} fluid />
            <Card color='yellow' image={src} fluid />
          </Grid.Column>
          <Grid.Column>
            <Card color='olive' image={src} />
            <Card color='olive' image={src} />
            <Card color='olive' image={src} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default CustomerComponent;
