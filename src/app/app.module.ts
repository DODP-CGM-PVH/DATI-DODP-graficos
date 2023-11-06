import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { Year2021Component } from './pages/year2021/year2021.component';
import { Year2022Component } from './pages/year2022/year2022.component';
import { Year2023Component } from './pages/year2023/year2023.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompareComponent } from './pages/compare/compare.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    Year2021Component,
    Year2022Component,
    Year2023Component,
    FooterComponent,
    CompareComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
