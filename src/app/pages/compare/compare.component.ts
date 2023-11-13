import {Component, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {ChartDataService} from "../../services/chart-data.service";
import {Comparison} from "../../interfaces/compareInterface";
import {Question} from "../../interfaces/questionInterface";


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit, AfterViewInit {

    questions2021: Question[] = [];
    questions2022: Question[] = [];
    questions2023: Question[] = [];

    constructor(private chartDataService: ChartDataService, private el: ElementRef) { }

    ngOnInit(): void {
        this.questions2021 = this.chartDataService.getQuestions('2021');
        this.questions2022 = this.chartDataService.getQuestions('2022');
        this.questions2023 = this.chartDataService.getQuestions('2023');
    }

    ngAfterViewInit(): void {
        this.loadCharts();
    }

    readonly DEFAULT_LABELS: string[] = [
        "Atende em sua totalidade",
        "Não atende",
        "Atende parcialmente"
    ];
    readonly DEFAULT_VALUES: number[] = [50, 50];
    readonly DEFAULT_COLORS: string[] = ["blue", "red", "yellow"];


    loadCharts(): void {
        this.questions2021.forEach((question: Question, index: number):void => {
            this.createPieChart('pizzaChart2021-' + (index + 1), question.labels, question.dataValues, question.colors);
        });

        this.questions2022.forEach((question: Question, index: number):void => {
            this.createPieChart('pizzaChart2022-' + (index + 1), question.labels, question.dataValues, question.colors);
        });

        this.questions2023.forEach((question: Question, index: number):void => {
            this.createPieChart('pizzaChart2023-' + (index + 1), question.labels, question.dataValues, question.colors);
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
