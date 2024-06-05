import { Component, OnInit } from '@angular/core';
import {
  BAR_CHART_OPTIONS,
  BUBBLE_CHART_OPTIONS,
} from '../shared/chartOptions';
import { ChartTypeEnum, Executive } from '../shared/modal';
import { Observable, first, of } from 'rxjs';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-execute-dashboard',
  templateUrl: './execute-dashboard.component.html',
  styleUrls: ['./execute-dashboard.component.scss'],
})
export class ExecuteDashboardComponent implements OnInit {
  filteredData: Executive[] = [];
  data: Executive[] = [];
  chartType = ChartTypeEnum;
  barOptions = BAR_CHART_OPTIONS;
  bubbleOptions = BUBBLE_CHART_OPTIONS;
  barChartData:any;
  bubbleChartData:any;
  doughnutChartData:any;

  constructor(private _commonService: CommonService) {
    this._commonService
      .getData()
      .pipe(first())
      .subscribe((response: any) => {
        this.data = response.data;
        this.filteredData = response.data;
        this.onDateChange();
        this.getDataForDoughnut(this.filteredData);
      });
  }

  ngOnInit(): void {
    this.getBarChartData();
    this.getBubbleChartData();
  }

  getBubbleChartData(): any {
    this.bubbleChartData = {
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
          backgroundColor: '#FFDBBB',
          borderColor: '#FFDBBB',
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
          backgroundColor: 'rgb(173,216,230)',
          borderColor: 'rgb(173,216,230)',
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
          backgroundColor: '#FDC959',
          borderColor: '#FDC959',
          borderWidth: 1,
        },
      ],
    };
  }



  getBarChartData() {
    this.barChartData = {
      labels: ['Jan-Feb', 'Mar-April', 'May-June', 'July-Aug', 'Sep-Oct', 'Nov-Dec'],
      datasets: [
        {
          type: 'bar',
          label:'Original',
          backgroundColor: '#42A5F5',
          data: [50, 25, 12, 48, 90, 76],
        },
        {
          type: 'bar',
          label:'Referral',
          backgroundColor: '#66BB6A',
          data: [21, 84, 24, 75, 37, 65],
        },
        {
          type: 'bar',
          label:'Organic Search',
          backgroundColor: '#FFA726',
          data: [41, 52, 24, 74, 23, 21],
        },
      ],
    };
  }

  getDataForDoughnut(filterData:Executive[]): any {
    let DOUGHNUT_CHART_LABEL;
    let DOUGHNUT_CHART_DATA;
    filterData.forEach((executiveData)=>{
        DOUGHNUT_CHART_LABEL = executiveData?.label?.map((chartLabel) => chartLabel);
        DOUGHNUT_CHART_DATA = executiveData?.data?.map((chartData) => chartData);
    })

    this.doughnutChartData = {
      labels: DOUGHNUT_CHART_LABEL,
      datasets: [
        {
          data: DOUGHNUT_CHART_DATA,
          backgroundColor: ['#90EE90', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#90EE90', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  }

  onDateChange(event?: any) {
    const SELECTED_DATE = event
      ? new Date(event?.target?.value)
      : new Date('2024-01');
    const MONTH = SELECTED_DATE.getMonth();
    const NEW_MONTH = MONTH === 0 ? 1 : MONTH;
    const YEAR = SELECTED_DATE.getFullYear();
    if (SELECTED_DATE) {
      this.filteredData = this._commonService.filterData(
        this.data,
        NEW_MONTH,
        YEAR
      );
    }
  }
}
