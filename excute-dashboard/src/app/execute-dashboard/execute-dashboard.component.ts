import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-execute-dashboard',
  templateUrl: './execute-dashboard.component.html',
  styleUrls: ['./execute-dashboard.component.scss'],
})
export class ExecuteDashboardComponent {

  executeInformation = [
    {
      title: 'New Wins',
      amount: 230,
      profit: 25,
      isChart: false,
    },
    {
      title: 'Trail : New Rate',
      amount: 9.86,
      profit: 25,
      isChart: false,
    },
    {
      title: 'New MRR',
      amount: 25690,
      profit: 8.7,
      isChart: false,
    },
    {
      title:'Page Views',
      isChart:true
    }
  ];

  data = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  basicData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#42A5F5',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: '#FFA726',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
  options = {
    title: {
      display: true,
      text: 'My Title',
      fontSize: 16,
    },
    legend: {
      position: 'bottom',
    },
  };

  bubbleData = {
    datasets: [
      {
        label: 'United States',
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
          { x: 25, y: 50, r: 20 },
          { x: 35, y: 40, r: 25 },
          { x: 50, y: 20, r: 5 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Australia',
        data: [
          { x: 30, y: 20, r: 10 },
          { x: 45, y: 30, r: 15 },
          { x: 60, y: 35, r: 20 },
          { x: 70, y: 45, r: 25 },
          { x: 80, y: 50, r: 30 },
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Canada',
        data: [
          { x: 30, y: 20, r: 10 },
          { x: 45, y: 30, r: 15 },
          { x: 60, y: 35, r: 20 },
          { x: 70, y: 45, r: 25 },
          { x: 80, y: 50, r: 30 },
        ],
        backgroundColor: 'rgba(74, 262, 335, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'United Kingdom',
        data: [
          { x: 30, y: 20, r: 10 },
          { x: 45, y: 30, r: 15 },
          { x: 60, y: 35, r: 20 },
          { x: 70, y: 45, r: 25 },
          { x: 80, y: 50, r: 30 },
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  bubbleOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };


}
