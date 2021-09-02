<template>
  <nav>
    <ul style="display: inline-flex; list-style-type: none;">
      <li style="margin: 0 3px;">
        <TButton x-small
                 :stroked="outlined"
                 :text="!outlined"
                 icon-button
                 :disabled="isFirstPage()"
                 @click="prev()"
                 color="basic">
          <TGIcon :style="{ color: isFirstPage() ? '#DBE0E9' : '#A8B0B7' }">
            icon-back
          </TGIcon>
        </TButton>
      </li>
      <li style="display: flex; align-items: center;" v-for="(page, index) in pages" :key="page">
        <TGIcon v-if="index > 0 && (page - 1 !== pages[index - 1])"
                style="color: #A8B0B7; margin: auto 3px;">
          icon-more
        </TGIcon>
        <TButton x-small
                 :text="!outlined"
                 :stroked="outlined && page !== value"
                 :outlined="outlined && page === value"
                 :min-width="24"
                 style="padding: 0 8px; margin: 0 3px;"
                 :style="{ color: page === value ? '#272834' : '#A8B0B7' }"
                 @click="onEmitInput(page)"
                 color="basic">
          {{ page }}
        </TButton>
      </li>
      <li style="margin: 0 3px;">
        <TButton x-small
                 :stroked="outlined"
                 :text="!outlined"
                 icon-button
                 :disabled="isLastPage()"
                 @click="next()"
                 color="basic">
          <TGIcon :style="{ color: isLastPage() ? '#DBE0E9' : '#A8B0B7' }">
            icon-advance
          </TGIcon>
        </TButton>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';
import TButton from '@/components/button/TButton.vue';
import TGIcon from '@/components/g-icon/TGIcon.vue';


@Component({
  name: "TPagination",
  components: {TGIcon, TButton}
})
export default class TPagination extends Vue {
  @Prop({ type: Number }) value!: number;
  @Prop({ type: Boolean }) outlined!: boolean;
  @Prop({ type: Number, required: true }) length!: number;
  @Prop({ type: Number, default: 5 }) totalVisible!: number;

  pageSet: Set<number> = new Set<number>();
  pages: number[] = [];

  @Watch('value', { immediate: true })
  onValueChange() {
    this.constructPages();
  }

  @Emit('input')
  onEmitInput(value: number) {
  }

  constructPages(): void {
    this.pageSet.clear();
    this.addPage(this.value);
    this.addPage(this.value - 1);
    this.addPage(this.value + 1);
    this.addPage(1);
    this.addPage(this.length);

    let increment: number = 2;
    let minus: boolean = false;
    while (this.pageSet.size < this.totalVisible && this.length >= this.totalVisible) {
      if (minus) {
        this.addPage(this.value - increment);
        increment += 1;
        minus = false;
      } else {
        this.addPage(this.value + increment);
        minus = true;
      }
    }

    this.pages = [...this.pageSet];
    this.pages.sort((n1, n2) => n1 - n2);
  }

  addPage(page: number): void {
    if (page > 0 && page <= this.length && !this.pageSet.has(page)) {
      this.pageSet.add(page);
    }
  }

  isFirstPage(): boolean {
    return this.value === 1;
  }

  isLastPage(): boolean {
    return this.value === this.length;
  }

  prev(): void {
    const prevPage: number = this.value - 1;
    this.onEmitInput(prevPage);
  }

  next(): void {
    const nextPage: number = this.value + 1;
    this.onEmitInput(nextPage);
  }
}
</script>

<style scoped lang="scss">
@import "TPagination";
</style>
