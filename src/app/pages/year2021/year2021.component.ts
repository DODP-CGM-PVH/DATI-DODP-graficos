import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Question } from "../../interfaces/questionInterface";
import { ChartDataService } from "../../services/chart-data.service";

@Component({
  selector: 'app-year2021',
  templateUrl: './year2021.component.html',
  styleUrls: ['./year2021.component.css']
})
export class Year2021Component implements OnInit, AfterViewInit {

  questions: Question[] = [];

  constructor(private chartDataService: ChartDataService, private el: ElementRef) { }

  ngOnInit(): void {
    this.questions = this.chartDataService.getQuestions('2021');
  }

  ngAfterViewInit(): void {
    this.loadCharts();
  }

  readonly DEFAULT_LABELS: string[] = [
    "Atende em sua totalidade",
    "Não atende",
    "Atende parcialmente"
  ];

  loadCharts(): void {
    this.questions.forEach((question: Question, index: number): void => {
      this.createPieChart('pizzaChart2021-' + (index + 1), question.labels, question.dataValues, question.colors);
    });
  }

  createPieChart(elementId: string, dataLabels: string[], dataValues: number[], backgroundColors: string[], borderWidth: number = 0): void {
    const ctx = this.el.nativeElement.querySelector(`#${elementId}`).getContext('2d');
    const total = dataValues.reduce((acc, value) => acc + value, 0);
    const percentages = dataValues.map(value => ((value / total) * 100).toFixed(2));

    const data = this.getPieChartData(dataLabels, percentages, backgroundColors, borderWidth);

    Chart.register(ChartDataLabels);

    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: this.getDefaultChartOptions()
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
          formatter: (value: any) => {
            return value + '%';
          },
        },
      }],
    };
  }

  getDefaultChartOptions(): any {
    return {
      plugins: {
        legend: {
          display: false, // Oculta a legenda
        },
      },
    };
  }
}
