import { Injectable } from '@angular/core';
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Question } from "../interfaces/questionInterface";

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  createPieChart(ctx: CanvasRenderingContext2D, question: Question, borderWidth: number = 0): void {
    const total = question.dataValues.reduce((acc, value) => acc + value, 0);
    const percentages = question.dataValues.map(value => ((value / total) * 100).toFixed(2));

    const data = this.getPieChartData(question.labels, percentages, question.colors, borderWidth);

    Chart.register(ChartDataLabels);

    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: this.getDefaultChartOptions(question)
    });
  }

  getPieChartData(labels: string[], percentages: string[], colors: string[], borderWidth: number): any {
    return {
      labels: labels,
      datasets: [{
        data: percentages,
        backgroundColor: colors,
        borderWidth: borderWidth,
        hoverOffset: 4,
        datalabels: {
          labels: percentages.map(percentage => percentage + '%'),
          anchor: 'end',
          align: 'start',
          font: {
            size: 14,
          },
        },
      }],
    };
  }

  getDefaultChartOptions(question: Question): any {
    return {
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          align: 'start',
          labels: {
            boxWidth: 20,
            padding: 10,
            font: {
              size: 14,
            },
            textAlign: 'left'
          },
        },
        datalabels: {
          color: 'transparent',
        },
        tooltip: {
          enabled: true,
          mode: 'index',
          intersect: false,
          callbacks: {
            label: (tooltipItem: any) => {
              const dataset = tooltipItem.dataset;
              const index = tooltipItem.dataIndex;
              const currentValue = dataset.data[index];
              const secretaries = question.secretaries[index];
              const lines = secretaries.map(secretary => `${secretary}`);
              lines.unshift(`${currentValue}%`);
              return lines;
            },
          },
        },
      },
      onHover: (event: { native: { target: { style: { cursor: string; }; }; }; }, chartElement: any[]) => {
        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
      },
    };
  }


}
