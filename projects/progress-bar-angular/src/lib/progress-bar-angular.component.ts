import {Component, Input, OnInit} from '@angular/core';

export type ProgressBarMode = 'determinate' | 'query' | 'indeterminate';

@Component({
  selector: 'progress-bar-angular',
  templateUrl: './progress-bar-angular.component.html',
  styleUrls: ['./progress-bar-angular.component.scss']
})
export class ProgressBarAngularComponent implements OnInit {

  @Input() mode: ProgressBarMode = 'determinate';
  @Input() progress?: number;
  @Input() backgroundColor?: string;
  @Input() barColor?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
