<template>
  <div>
    <slot name="trigger" v-bind:on="on"></slot>
    <div :class="getOverlayClass()"
         @click="onOverlay()"
         v-if="showOverlay">
      <div class="tModal"
           :class="getModalClass()"
           @click.stop="" v-if="showModal">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';

const TOGGLE_MODAL_DELAY: number = 270;

@Component({
  name: "t-modal"
})
export default class TModal extends Vue {
  @Prop({ type: Boolean }) value!: boolean; // v-model bind
  @Prop({ type: Boolean }) tile!: boolean;
  @Prop({ type: Boolean }) persistent!: boolean;

  showOverlay: boolean = false;
  showModal: boolean = false;
  modalClass: string[] = [];

  on: any = {
    click: (event: MouseEvent) => {
      this.toggleModal(true);
    }
  };

  mounted() {
    this.initializeClass();
  }

  @Emit('input')
  onModelChange(value: boolean) {
    return value;
  }

  @Watch('value')
  onValueChange() {
    this.toggleModal(this.value);
  }

  @Watch('showModal')
  onShowModalChange() {
    this.onModelChange(this.showModal);
  }

  initializeClass() {
    if (this.tile) {
      this.addModalClass('tModalTile');
    }
  }

  toggleModal(show: boolean) {
    if (show) {
      this.removeModalClass('scaleAnimationEnd');
      this.addModalClass('scaleAnimationStart');
      setTimeout(() => {
        this.showOverlay = true;
        this.showModal = true;
      }, TOGGLE_MODAL_DELAY);
    } else {
      this.removeModalClass('scaleAnimationStart');
      this.addModalClass('scaleAnimationEnd');
      setTimeout(() => {
        this.showOverlay = false;
        this.showModal = false;
      }, TOGGLE_MODAL_DELAY);
    }
  }

  getOverlayClass(): string {
    const classes: string[] = ['tModalOverlay'];
    return classes.join(' ');
  }

  onOverlay(): void {
    if (!this.persistent) {
      this.toggleModal(false);
    }
  }

  addModalClass(className: string): void {
    const index: number = this.modalClass.indexOf(className);
    if (index === -1) {
      this.modalClass.push(className);
    }
  }

  removeModalClass(className: string): void {
    const index: number = this.modalClass.indexOf(className);
    if (index !== -1) {
      this.modalClass.splice(index, 1);
    }
  }

  getModalClass(): string {
    return this.modalClass.join(' ');
  }

}
</script>

<style scoped lang="scss">
  @import "TModal";
</style>
