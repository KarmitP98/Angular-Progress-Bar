import { NgModule } from '@angular/core';
import { ProgressBarAngularComponent } from './progress-bar-angular.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    ProgressBarAngularComponent
  ],
	imports: [
		CommonModule
	],
  exports: [
    ProgressBarAngularComponent
  ]
})
export class ProgressBarAngularModule { }
