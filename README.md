# Welcome to Blue Feather - An awesome VUE UI Framework

## Introduction

Blue Feather is a vue ui framework which make use of the vue technologies and can be used in Vue 2.x versions.


## Installation

`npm install bluefeather`


## Project setup

1. create a file: bluefeather.ts into your plugins folder and put the following code inside there

```
import Vue from 'vue';

import Jungletron from 'jungletron';
 
Vue.use(Jungletron);
 
export default new Jungletron();
```

2. in main.ts/js file, put following code inside:

```
import jungletron from '@/jungletron';

new Vue({
  jungletron, <---
  render: (h) => h(App),
}).$mount('#app');

```

## Use

```
<TButton></TButton>
```
```
<TTextField></TTextField>
```

## RoadMap

| Component      | Progress |
| ----------- | ----------- |
| Button      | View Doc       |
| Breadcrumb      | View Doc       |
| TextField      | View Doc       |
| TextArea      | View Doc       |
| Select      | View Doc       |
| Menu      | View Doc       |
| G-Icon      | View Doc       |
| Link      | View Doc       |
| Slides      | View Doc       |
| Checkbox      | View Doc       |
| Radio Button      | View Doc       |
| Tabs      | View Doc       |
| Chip      | View Doc       |
| Table      | View Doc       |
| Pagination      | View Doc       |
| Switch      | View Doc       |
| Avatar   | View Doc        |
| Tooltip   | In Progress        |
| Modal   | In Progress        |
| Card   | In Progress        |
| Divider   | In Progress        |
| Icon   | In Progress        |
| Search Bar      | Planned       |
| Multi-select      | Planned       |
| Complex-TextField      | Planned       |


