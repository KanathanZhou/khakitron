<template>
  <div>
    <table class="__T_Table">
      <thead>
        <tr :class="getTableHeaderClass()">
          <th v-for="(header, index) of headers"
              :key="index"
              scope="col"
              :style="getCellStyle(header)"
              class="__T_Table_header_col">
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody v-if="items && items.length">
        <tr v-for="(item, index) of items"
            :key="index"
            class="__T_Table_body_row">

          <td v-for="(header, headerIndex) of headers"
              :key="headerIndex"
              :style="getCellStyle(header)"
              class="__T_Table_body_col">

            <slot :name="header.value"
                  :item="item"
                  :index="index">

              <div>{{ item[header.value] }}</div>

            </slot>

          </td>

        </tr>
      </tbody>
    </table>

    <div v-if="!items || !items.length" class="__T_Table_No_Data">
      {{ noDataText }}
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {ITTableHeader} from '@/components/table/TTable';
import {GeneralStyle} from '@/components/general-style';

enum T_TABLE_HEADER_COLOR_THEME {
  default = 'default',
  white = 'white'
}

@Component({
  name: "TTable",
})
export default class TTable extends Vue {
  @Prop({ type: Array, required: true, validator: (value: any) => value.every((item: any) => item.text && item.value ) }) headers!: ITTableHeader[]; // must have text and value
  @Prop({ type: Array }) items!: any[]; // show through header.value
  @Prop({ type: String, default: 'No Data' }) noDataText!: string;
  @Prop({ type: String, default: T_TABLE_HEADER_COLOR_THEME.default }) headerColorTheme!: T_TABLE_HEADER_COLOR_THEME;

  getCellStyle(header: ITTableHeader): GeneralStyle {
    const style: GeneralStyle = {};
    if (header.width) {
      style.width = header.width;
    }
    return style;
  }

  getTableHeaderClass(): string {
    const classes: string[] = [`__T_Table_header_row`];
    if (this.headerColorTheme === T_TABLE_HEADER_COLOR_THEME.default) {
      classes.push(`__T_Table_header_default`);
    } else if (this.headerColorTheme === T_TABLE_HEADER_COLOR_THEME.white) {
      classes.push(`__T_Table_header_white`);
    }
    return classes.join(' ');
  }
}
</script>

<style scoped lang="scss">
@import "TTable";
</style>
