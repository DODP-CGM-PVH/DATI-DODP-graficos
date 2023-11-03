import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
interface Question {
  text: string;
  dataValues: number[]
}

@Component({
  selector: 'app-year2021',
  templateUrl: './year2021.component.html',
  styleUrls: ['./year2021.component.css']
})
export class Year2021Component implements OnInit, AfterViewInit {

  questions: Question[] = [
    {
      text: '1 - A nomeação para a gerência da Divisão de Controle...',
      dataValues: [16, 1, 1]
    },
    { text: '2 - O quantitativo de servidores...',
      dataValues: [16, 1, 1]
    },
    // ... Adicione todas as 53 perguntas aqui
  ];

  readonly DEFAULT_LABELS: string[] = [
    "Atende em sua totalidade",
    "Não atende",
    "Atende parcialmente"
  ];
  readonly DEFAULT_VALUES: number[] = [50, 50];
  readonly DEFAULT_COLORS: string[] = ["blue", "red", "yellow"];

  constructor(private el: ElementRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.loadCharts();
  }

  loadCharts(): void {
    this.questions.forEach((question: Question, index: number):void => {
      this.createPieChart('pizzaChart2021-' + (index + 1), this.DEFAULT_LABELS, question.dataValues, this.DEFAULT_COLORS);  // Modifique esta linha
    });
  }

  createPieChart(elementId: string, dataLabels: string[], dataValues: number[], backgroundColors: string[], borderWidth:number = 0): void {
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
