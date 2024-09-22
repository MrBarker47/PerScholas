const ctx = document.getElementById('myChart');
const game = document.getElementById('chart-container')

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Apex', 'Nba2k25', 'College Football25', 'MK8', 'Madden25', 'COD6'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//   Second Chart
const dataSource = {
  chart: {
    caption: "Market Share of Web Servers",
    plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "candy"
  },
  data: [
    {
      label: "Apache",
      value: "32647479"
    },
    {
      label: "Microsoft",
      value: "22100932"
    },
    {
      label: "Zeus",
      value: "14376"
    },
    {
      label: "Other",
      value: "18674221"
    }
  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "pie2d",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
});
