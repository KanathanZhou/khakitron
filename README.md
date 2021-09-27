# Welcome to Blue Feather - An awesome VUE UI Framework

## Introduction

BlueFeather is a vue ui framework which make use of the vue technologies and can be used in Vue 2.x versions.


## Installation

`npm install bluefeather`


## Project setup

1. Create a folder named ```bluefeather``` under ```/src``` directory
2. Create ```/src/bluefeather/index.ts```
3. Put the following code inside ```/src/bluefeather/index.ts```:

```
import Vue from 'vue';

import BlueFeather from 'bluefeather';
 
Vue.use(BlueFeather);
 
export default new BlueFeather();
```

4. in ```main.ts/js``` file, put following code inside:

```
import bluefeather from '@/bluefeather';

new Vue({
  bluefeather, <---
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


