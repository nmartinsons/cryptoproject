function loadMap() {  
  let data = [{
    type:'candlestick',
    open:[],
    high:[],
    low: [],
    close: [],
    volume:[],
    date:[],
    increasing: {line: {color: 'green'}},
    decreasing: {line: {color: 'red'}},
  }]

  let layout = {
    dragmode: 'zoom',
    showlegend: false,
    xaxis: {
      title: 'Date',
      range: []
    },
    yaxis: {
      autorange: true,
    }
  };



  
