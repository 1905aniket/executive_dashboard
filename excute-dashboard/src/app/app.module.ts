import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExecuteDashboardComponent } from './execute-dashboard/execute-dashboard.component';
import { ChartComponent } from './shared/components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ExecuteDashboardComponent
  ],
  imports: [
    BrowserModule,
    ChartComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
