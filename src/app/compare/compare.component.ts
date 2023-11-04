import {Component, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {ChartDataService, Question} from "../chart-data.service";
import {Comparison} from "../interfaces/compareInterface";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements AfterViewInit, OnInit {

  year2021: Question[] = []
  year2022: Question[] = []
  year2023: Question[] = []

  readonly DEFAULT_LABELS: string[] = [
    "Atende em sua totalidade",
    "Não atende",
    "Atende parcialmente"
  ];
  readonly DEFAULT_COLORS: string[] = ["blue", "red", "yellow"];

  constructor(private chartDataService: ChartDataService, private el: ElementRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.loadComparisonCharts();
  }

  comparisons: Comparison[] = [
    {
      title: 'Comparison 1',
      dataSets: this.chartDataService.getQuestions("2021")},
    {
      title: 'Comparison 2',
      dataSets: this.chartDataService.getQuestions("2022")
    },
    {
      title: 'Comparison 3',
      dataSets: this.chartDataService.getQuestions("2023")
    },
    // ... Mais objetos de comparação
  ];

  loadComparisonCharts(): void {
    console.log(this.year2022)
    this.comparisons.forEach((comparison, i) => {
      comparison.dataSets.forEach((dataset, j) => {
        this.createPieChart(`compareChart-${i}-${j}`, this.DEFAULT_LABELS, dataset.dataValues, this.DEFAULT_COLORS);
      });
    });
  }

  createPieChart(elementId: string, dataLabels: string[], dataValues: number[], backgroundColors: string[], borderWidth = 0): void {
    const ctx = this.el.nativeElement.querySelector(`#${elementId}`).getContext('2d');
    const data = this.getPieChartData(dataLabels, dataValues, backgroundColors, borderWidth);
    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: this.getDefaultChartOptions()
    });
  }

getPieChartData(labels: string[], values: number[], colors: string[], borderWidth: number): any {
    return {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: colors,
        borderWidth: borderWidth,
      }],
    };
  }

  getDefaultChartOptions(): any {
    return {
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: {
              size: 24
            }
          }
        }
      }
    };
  }
}
