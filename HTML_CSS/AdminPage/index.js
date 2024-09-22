const ctx = document.getElementById('myChart');
const game = document.getElementById('gameChart')

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
