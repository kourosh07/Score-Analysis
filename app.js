function analyzeScores() {
  const scores = [
    parseFloat(document.getElementById("score1").value),
    parseFloat(document.getElementById("score2").value),
    parseFloat(document.getElementById("score3").value),
    parseFloat(document.getElementById("score4").value),
    parseFloat(document.getElementById("score5").value),
  ];

  const labels = ["Score 1", "Score 2", "Score 3", "Score 4", "Score 5"];

  const lineChart = new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Scores",
          data: scores,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    },
  });

  const barChart = new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Scores",
          data: scores,
          backgroundColor: "rgba(153, 102, 255, 0.6)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
  });

  const radarChart = new Chart(document.getElementById("radarChart"), {
    type: "radar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Scores",
          data: scores,
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
        },
      ],
    },
  });

  const pieChart = new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Scores",
          data: scores,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
        },
      ],
    },
  });

  const hr = [
    document.getElementById("hr1").style.display="block",
    document.getElementById("hr2").style.display="block",
    document.getElementById("hr3").style.display="block"
  ];
  
}



