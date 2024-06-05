export interface Executive {
  title: string;
  amount: number;
  profit: number;
  isChart: boolean;
  label: string[];
  date: string;
  data: number[];
}

export enum ChartTypeEnum {
  bar = 'bar',
  doughnut = 'doughnut',
  bubble = 'bubble'
}
