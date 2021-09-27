# Welcome to Khakitron - An awesome VUE UI Framework

## Introduction

Khakitron is a vue ui framework which make use of the vue technologies and can be used in Vue 2.x versions.


## Installation

`npm install khakitron`


## Project setup

1. Create a folder named ```khakitron``` under ```/src``` directory
2. Create ```/src/khakitron/index.ts```
3. Put the following code inside ```/src/khakitron/index.ts```:

```
import Vue from 'vue';

import Khakitron from 'khakitron';
 
Vue.use(Khakitron);
 
export default new Khakitron();
```

4. in ```main.ts/js``` file, put following code inside:

```
import khakitron from '@/khakitron';

new Vue({
  khakitron, <---
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


