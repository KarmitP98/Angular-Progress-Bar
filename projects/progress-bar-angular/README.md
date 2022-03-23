# Progress Bar Angular #

<p align="center">
  <h2 align="center">Progress Bar Angular</h2>
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/angular-progress-bar"><img src="https://badge.fury.io/js/progress-bar-angular.svg?style=flat-square" alt="NPM version"></a>
</p> 

An Angular Progress Bar Library to quickly set up a clean progress bar.

## Table of Content
- [Table of Content](#table-of-content)
- [Installation](#installation)
- [Demo](#demo-code)
- [List of Inputs](#list-of-inputs)
- [How to Use](#how-to-use)
- [NOTE](#note)

## Installation ##

Type the following command to install the package:

```shell
npm install progress-bar-angular
```

Then you need to import it into your app modules

```typescript
import {ProgressBarAngularModule} from "progress-bar-angular"

@NgModule({
    imports: [
        ProgressBarAngularModule
    ]
})
```

## Demo Code ##
Stackblitz: https://angular-ivy-gnw58u.stackblitz.io


## List of Inputs ##

|    **Input**    |            **Type**            | **Controls** |     **Default**      |                                **Accepted Values**                                | **Description**                                |
|:---------------:|:------------------------------:|:------------:|:--------------------:|:---------------------------------------------------------------------------------:|------------------------------------------------|
|      mode       |     ProgressBarAngularMode     |   required   |  `"indeterminate"`   |          `"indeterminate"` or `"determinate"` or `"query"` or `"buffer"`          | Mode the progress bar                          |
|    progress     |             number             |   optional   |         `0`          |                              0 <= `progress` <= 100                               | Progress of the bar                            |
|    barColor     |     ProgressBarAngularMode     |   optional   |       `"#000"`       | `"<HEX_COLOR>"` or `"<RGBA_COLOR>"` or `"[HEX_COLOR, HEX_COLOR, RGBA_COLOR,...]"` | Color of the progress bar                      |
| backgroundColor |             string             |   optional   | `"rgba(0,0,0,0.15)"` |                        `"<HEX_COLOR>"` or `"<RGBA_COLOR>"`                        | Background color of the progress bar container |
|      width      |             string             |   optional   |       `"100%"`       |                     `"100px"` or `"100px"` or `"100rem"`, ...                     | Width of the progress bar                      |
|     height      |             string             |   optional   |       `"20px"`       |                     `"100px"` or `"100px"` or `"100rem"`, ...                     | Height of the progress bar                     |
|  borderRadius   | ProgressBarAngularBorderRadius |   optional   |        `"md"`        |               `"square"` or `"sm"` or `"md"` or `"lg"` or `"full"`                | Border Radius of the Progress Bar              |
| animatedBuffer  |            boolean             |   optional   |        `true`        |                                 `true` or `false`                                 | Sets the buffer progress bar to be animated    |

## How to Use ##

#### Determinate Solid Color
```shell
<progress-bar-angular barColor='#5B3521' [progress]='50' backgroundColor='rgba(226, 183, 152, 0.2) mode='determinate'></progress-bar-angular>
```

#### Determinate Gradient Color ####
Providing an array of colors in **barColor** will create a smooth gradient color for the progress bar.
```shell
<progress-bar-angular [barColor]='["#E2B697","#5B3521"]' [progress]='50' backgroundColor='rgba(226, 183, 152, 0.2) mode='determinate'></progress-bar-angular>
```

### Indeterminate ####
```shell
<progress-bar-angular barColor='#5B3521' [progress]='50' backgroundColor='rgba(226, 183, 152, 0.2) mode='indeterminate'></progress-bar-angular>
```

#### Query ####
```shell
<progress-bar-angular barColor='#5B3521' [progress]='50' backgroundColor='rgba(226, 183, 152, 0.2) mode='query'></progress-bar-angular>
```

#### Buffer ####
Providing an array of colors in **barColor** will create a zebra shaded gradient color for the progress bar.
**animated** input with animate the buffer progress bar.
```shell
<progress-bar-angular [barColor]='["#E2B697","#5B3521"]' [progress]='50' backgroundColor='rgba(226, 183, 152, 0.2) animated='true' mode='buffer'></progress-bar-angular>
```

#### NOTE ####
This is still a work in progress build. There is a possibility of bugs especially with colors.
