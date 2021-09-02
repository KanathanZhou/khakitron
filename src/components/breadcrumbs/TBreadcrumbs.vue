<template>
  <div class="__T_Breadcrumbs_Wrapper">

    <div class="__T_Breadcrumbs_Item"
         v-for="(breadcrumb, index) in items"
         :key="index">

      <div class="__T_Breadcrumbs_Divider">/</div>

      <a v-if="breadcrumb.href"
         :href="breadcrumb.href"
         class="__T_Breadcrumbs_Item_Destination">
        {{ breadcrumb.text }}
      </a>

      <div v-else-if="breadcrumb.customNavigation"
           @click="breadcrumb.customNavigation()"
           class="__T_Breadcrumbs_Item_Destination">
        {{ breadcrumb.text }}
      </div>

      <div v-else
           style="cursor: default;"
           class="__T_Breadcrumbs_Item_Destination">
        {{ breadcrumb.text }}
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {ITBreadcrumb} from '@/components/breadcrumbs/TBreadcrumbs';

@Component({
  name: "TBreadcrumbs"
})
export default class TBreadcrumbs extends Vue {
  @Prop({ type: Array }) items!: ITBreadcrumb[];
}
</script>

<style scoped lang="scss">
@import "TBreadcrumbs";
</style>
