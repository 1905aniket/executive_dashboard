export const BAR_CHART_OPTIONS = {
  tooltips: {
      mode: 'index',
      intersect: false
  },
  responsive: true,
  scales: {
      xAxes: [{
          stacked: true,
      }],
      yAxes: [{
          stacked: true
      }]
  }
};

export const BUBBLE_CHART_OPTIONS = {
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
}
