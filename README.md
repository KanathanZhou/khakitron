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
| Button      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/button) |
| Breadcrumb      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/breadcrumb) |
| TextField      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/textfield) |
| TextArea      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/textarea) |
| Select      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/select) |
| Menu      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/menu) |
| G-Icon      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/icon) |
| Link      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/link) |
| Slides      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/slides) |
| Checkbox      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/checkbox) |
| Radio Button      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/radio) |
| Tabs      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/tabs) |
| Chip      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/chip) |
| Table      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/table) |
| Pagination      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/pagination) |
| Switch      | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/switch) |
| Avatar   | [View Doc](https://kanathanzhou.github.io/khakitron-demo/components/avatar) |
| Tooltip   | In Progress        |
| Modal   | In Progress        |
| Card   | In Progress        |
| Divider   | In Progress        |
| Icon   | In Progress        |
| Search Bar      | Planned       |
| Multi-select      | Planned       |
| Complex-TextField      | Planned       |


