import { Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { ChartDataService } from "../../services/chart-data.service";
import { ChartService } from "../../services/chart.service";
import { Question } from "../../interfaces/questionInterface";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit, AfterViewInit {
  questions2021: Question[] = [];
  questions2022: Question[] = [];
  questions2023: Question[] = [];

  constructor(
    private chartDataService: ChartDataService,
    private chartService: ChartService, // Injete o serviço
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.questions2021 = this.chartDataService.getQuestions('2021');
    this.questions2022 = this.chartDataService.getQuestions('2022');
    this.questions2023 = this.chartDataService.getQuestions('2023');
  }

  ngAfterViewInit(): void {
    this.loadCharts();
  }

  loadCharts(): void {
    this.loadYearCharts(this.questions2021, '2021');
    this.loadYearCharts(this.questions2022, '2022');
    this.loadYearCharts(this.questions2023, '2023');
  }

  loadYearCharts(questions: Question[], year: string): void {
    questions.forEach((question: Question, index: number): void => {
      const canvas = this.el.nativeElement.querySelector(`#pizzaChart${year}-${index + 1}`) as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        this.chartService.createPieChart(ctx, question); // Utilize o serviço para criar o gráfico
      }
    });
  }

  // Remova as funções createPieChart, getPieChartData e getDefaultChartOptions do componente
}
