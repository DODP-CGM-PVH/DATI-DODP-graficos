import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Question } from "../../interfaces/questionInterface";
import { ChartDataService } from "../../services/chart-data.service";

@Component({
  selector: 'app-year2022',
  templateUrl: './year2022.component.html',
  styleUrls: ['./year2022.component.css']
})
export class Year2022Component implements OnInit, AfterViewInit {

  questions: Question[] = [];

  constructor(private chartDataService: ChartDataService, private el: ElementRef) { }

  ngOnInit(): void {
    this.questions = this.chartDataService.getQuestions('2022');
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
      this.createPieChart('pizzaChart2022-' + (index + 1), question.labels, question.dataValues, question.colors);
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
        },
      }],
    };
  }

  getDefaultChartOptions(): any {
    return {
      // As configurações de interação vão aqui, fora dos plugins
      interaction: {
        // Habilita a interação no modo 'index'
        mode: 'index',
        intersect: false, // Defina como false se você quer que a interação seja ativada mesmo quando o mouse não está diretamente sobre um item do gráfico
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
        tooltip: { // tooltip agora está no singular e dentro dos plugins
          enabled: true,
          mode: 'index',
          intersect: false,
          callbacks: {
            label: (tooltipItem: any) => {
              const dataset = tooltipItem.dataset;
              const index = tooltipItem.dataIndex;
              const currentValue = dataset.data[index];
              const secretaries = this.questions[tooltipItem.datasetIndex].secretaries[index];
              //const secretariesList = secretaries.join(", ");
              // Retorna uma matriz de strings, cada uma será uma nova linha no tooltip
              const lines = secretaries.map(secretary => `${secretary}`);
              // Adiciona o valor percentual como o primeiro item da matriz
              lines.unshift(`${currentValue}%`);
              return lines;
            },
          },
        },
      },
      // Configurações do evento de hover
      onHover: (event: { native: { target: { style: { cursor: string; }; }; }; }, chartElement: any[]) => {
        // Você pode usar esta função para mudar o cursor, por exemplo
        event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
      },
    };
  }


}
