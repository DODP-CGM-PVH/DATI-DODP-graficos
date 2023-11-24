import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Question } from "../../interfaces/questionInterface";
import { ChartDataService } from "../../services/chart-data.service";
import { ChartService } from "../../services/chart.service"; // Importe o serviço ChartService

@Component({
  selector: 'app-year2023',
  templateUrl: './year2023.component.html',
  styleUrls: ['./year2023.component.css']
})
export class Year2023Component implements OnInit, AfterViewInit {
  questions: Question[] = [];

  constructor(
    private chartDataService: ChartDataService,
    private chartService: ChartService, // Injete o serviço
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.questions = this.chartDataService.getQuestions('2023');
  }

  ngAfterViewInit(): void {
    this.loadCharts();
  }


  //funções createPieChart, getPieChartData e getDefaultChartOptions do componente agora no chart service
  loadCharts(): void {
    this.questions.forEach((question: Question, index: number) => {
      const canvas = this.el.nativeElement.querySelector(`#pizzaChart2023-${index + 1}`) as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        this.chartService.createPieChart(ctx, question); // Passa o objeto question
      }
    });
  }


}
