import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {Year2021Component} from "./year2021/year2021.component";
import {Year2022Component} from "./year2022/year2022.component";
import {Year2023Component} from "./year2023/year2023.component";
import {MainComponent} from "./main/main.component";
import {CompareComponent} from "./compare/compare.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: '2021', component: Year2021Component },
  { path: '2022', component: Year2022Component },
  { path: '2023', component: Year2023Component },
  { path: 'compare', component: CompareComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
