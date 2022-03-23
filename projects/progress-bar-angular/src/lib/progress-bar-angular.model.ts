export class ProgressBarAngularModel {
  mode: ProgressBarAngularMode = 'indeterminate';
  progress: number = 0;
  barColor: ProgressBarAngularBarColor = '#000';
  backgroundColor?: string = '#fff';
  height?: string = '20px';
  width?: string = '100%';
  animatedBuffer?: boolean = true;
  borderRadius?: ProgressBarAngularBorderRadius = 'md';
}

export type ProgressBarAngularMode = 'determinate' | 'query' | 'indeterminate' | 'buffer';

export type ProgressBarAngularBarColor = string | string[];

export type ProgressBarAngularBorderRadius = 'square' | 'sm' | 'md' | 'lg' | 'full'
