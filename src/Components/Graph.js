import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {Card} from '@mui/material'
const ApexChart = () => {
  const series = [
    {
      name: 'Total ',
      data: [19,7,9,15,5,10],
    },
    {
      name: 'Closed',
      data: [14,6,8,15,5,9],
    }
    
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 100,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '25%',
        
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: 250,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#1311cb','#20c51e'],
    },
    xaxis: {
      categories: ['STR', 'MAN', 'QLT', 'HR', 'STO', 'HR'],
    },
    yaxis: {
      title: {
        text: '',
      },
    },
    fill: {
      opacity: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        },
      },
    },
  };

  return (
    <div id="chart" style={{width:"700px", margin:'100px',borderRadius:"10px"}} >
    <Card >
      <ReactApexChart options={options} series={series} type="bar" height={300} />

    </Card>
     </div>
  );
};

export default ApexChart;
