import {Component, OnInit} from '@angular/core';
import {ContentLoaderService} from "../content-loader.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  content: string | null = null;

  constructor(private contentLoader: ContentLoaderService) { }

  ngOnInit() {
    this.loadYearContent('2021');
  }

  loadYearContent(year: string) {
    this.contentLoader.loadContent(year).subscribe(data => {
      this.content = data;
    }, error => {
      console.error('Erro ao carregar o conteúdo:', error);
    });
  }


}
