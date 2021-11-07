import React, { Component } from 'react';
import Dash from "./Dash";

export class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      saleOptions : {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              display: false,
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }],
          xAxes: [{
            display: false,
            position: 'bottom',
            gridLines: {
              drawBorder: false,
              display: false,
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }],
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .4
          }
        },
        tooltips: {
          backgroundColor: 'rgba(2, 171, 254, 1)',
        },

      },
      salespredictionData: {},
      salesprediction2Data : {},
      salesprediction3Data : {},
      salesprediction4Data : {},

    }
  }

  componentDidMount(){



    const newSalespredictionData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [5, 10, 6, 12, 7, 14, 16],
        // backgroundColor: gradientBg1,
        borderColor: [
          "#a461d8"
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    const newSalesprediction2Data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [16, 14, 7, 12, 6, 10, 5],
        // backgroundColor: gradientBg2,
        borderColor: [
          '#a461d8'
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    const newSalesprediction3Data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [3, 4, 2, 3, 1, 2, 3],
        // backgroundColor: gradientBg3,
        borderColor: [
          '#0062ff'
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    const newSalesprediction4Data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Margin',
        data: [3, 2, 1, 3, 2, 4, 3],
        // backgroundColor: gradientBg4,
        borderColor: [
          '#0062ff'
        ],
        borderWidth: 3,
        fill: true,
      }],
    };
    this.setState({salespredictionData: newSalespredictionData, salesprediction2Data: newSalesprediction2Data, salesprediction3Data: newSalesprediction3Data, salesprediction4Data: newSalesprediction4Data} )
  }
  totalProfitData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: 'Margin',
      data: [5, 4, 6, 4.5, 5.5, 4, 5, 4.2, 5.5],
      backgroundColor: [
        '#cfe1ff',
      ],
      borderColor: [
        '#0062ff'
      ],
      borderWidth: 3,
      fill: true,
    }],
  };

  totalProfitOptions = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
      xAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
  };
  totalExpencesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: 'Margin',
      data: [4, 5, 6, 5, 4, 5, 4, 6, 5],
      backgroundColor: [
        '#e1fff3',
      ],
      borderColor: [
        '#3dd597'
      ],
      borderWidth: 3,
      fill: true,
    }],
  };

  totalExpencesOptions = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
      xAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          stepSize: 10
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
  };

  deviceSaleData = {
    labels: ["Iphone", "Google", "Sumsung", "Huawei", "Xiaomi", "Oppo", "Vivo", "Lg"],
    datasets: [{
      label: 'Demand',
      data: [450, 500, 300, 350, 200, 320, 310, 700],
      backgroundColor: [
        '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
      ],
      borderColor: [
        '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8', '#a461d8',
      ],
      borderWidth: 1,
      fill: false
    },
      {
        label: 'Supply',
        data: [250, 100, 310, 75, 290, 100, 500, 260],
        backgroundColor: [
          '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
        ],
        borderColor: [
          '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a', '#fc5a5a',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };

  deviceSaleOptions = {
    scales: {
      xAxes: [{
        stacked: false,
        barPercentage: .5,
        categoryPercentage: 0.4,
        position: 'bottom',
        display: true,
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: true, //this will remove only the label
          stepSize: 500,
          fontColor: "#a7afb7",
          fontSize: 14,
          padding: 10,
        }
      }],
      yAxes: [{
        stacked: false,
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          color: "#eef0fa",
          drawTicks: false,
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: true,
          beginAtZero: true,
          stepSize: 200,
          fontColor: "#a7afb7",
          fontSize: 14,
          callback: function(value, index, values) {
            return value + 'k';
          },
        },
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    plugins: {
      datalabels: {
        display: false,
        align: 'center',
        anchor: 'center'
      }
    }
  };
  accountRetensionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
      label: 'Demand',
      data: [33, 48, 39, 36, 36],
      backgroundColor: [
        '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
      ],
      borderColor: [
        '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
      ],
      borderWidth: 1,
      fill: false
    },
      {
        label: 'Demand',
        data: [94, 28, 49, 25, 20],
        backgroundColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderWidth: 1,
        fill: false
      },
      {
        label: 'Demand',
        data: [66, 33, 25, 36, 69],
        backgroundColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderColor: [
          '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8', '#d8d8d8',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };
  accountRetensionOptions = {
    scales: {
      xAxes: [{
        stacked: false,
        position: 'bottom',
        display: true,
        barPercentage: .7,
        categoryPercentage: 1,
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: true, //this will remove only the label
          stepSize: 500,
          fontColor: "#a7afb7",
          fontSize: 14,
          padding: 10,
        }
      }],
      yAxes: [{
        stacked: false,
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          color: "#c31a56",
          drawTicks: false,
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          stepSize: 40,
          fontColor: "#a7afb7",
          fontSize: 14,
          callback: function(value, index, values) {
            return value + 'k';
          },

        },
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    plugins: {
      datalabels: {
        display: false,
        align: 'center',
        anchor: 'center'
      }
    }
  };
  pageViewAnalyticData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
    datasets: [{
      label: 'This week',
      data: [46, 49, 51, 58, 63.61, 65, 64, 69, 70, 78, 80, 80, 90, 85, 87, 92, 97, 102, 107, 109, 111, 111, 120, 130, 132, 136, 140, 145],
      backgroundColor: [
        'rgba(216,247,234, 0.19)',
      ],
      borderColor: [
        '#3dd597'
      ],
      borderWidth: 2,
      fill: true,
      pointBorderColor: "#fff",
      pointBackgroundColor: "#3dd597",
      pointBorderWidth: 2,
      pointRadius: 4,
    },
      {
        label: 'Current week',
        data: [16, 19, 21, 28, 33.31, 35, 34, 39, 40, 48, 50, 50, 51, 55, 57, 62, 67, 69, 68, 70, 72, 75, 74, 80, 79, 80, 84, 90],
        backgroundColor: [
          'rgba(216,247,234, 0.19)',
        ],
        borderColor: [
          '#3dd597'
        ],
        borderWidth: 2,
        fill: false,
        pointBorderColor: "#fff",
        pointBackgroundColor: "#0162ff",
        pointBorderWidth: 2,
        pointRadius: 4,
      }
    ],
  };
  pageViewAnalyticOptions = {
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 50,
          display: true,
          padding: 10,
        }
      }],
      xAxes: [{
        display: true,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 1
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };
  myBalanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [{
      label: 'Demand',
      data: [90, 85, 100, 105],
      backgroundColor: [
        '#0062ff', '#0062ff', '#0062ff', '#0062ff',
      ],
      borderColor: [
        '#0062ff', '#0062ff', '#0062ff', '#0062ff',
      ],
      borderWidth: 1,
      fill: false
    },
      {
        label: 'Supply',
        data: [200, 200, 200, 200],
        backgroundColor: [
          '#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
        ],
        borderColor: [
          '#eef0fa', '#eef0fa', '#eef0fa', '#eef0fa',
        ],
        borderWidth: 1,
        fill: false
      }
    ]
  };
  myBalanceOptions = {
    scales: {
      xAxes: [{
        stacked: true,
        barPercentage: .7,
        position: 'bottom',
        display: true,
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: true, //this will remove only the label
          stepSize: 500,
          fontColor: "#111",
          fontSize: 12,
          padding: 10,
        }
      }],
      yAxes: [{
        stacked: false,
        display: false,
        gridLines: {
          drawBorder: true,
          display: false,
          color: "#eef0fa",
          drawTicks: false,
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: true,
          beginAtZero: true,
          stepSize: 200,
          fontColor: "#a7afb7",
          fontSize: 14,
          callback: function(value, index, values) {
            return value + 'k';
          },

        },
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    plugins: {
      datalabels: {
        display: false,
        align: 'center',
        anchor: 'center'
      }
    }
  };
  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  render () {
    return (
        <Dash />
    );
  }
}
export default Dashboard;