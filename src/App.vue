<template>
  <div id="app">
    <BreadcrumbsPage></BreadcrumbsPage>
<!--    <TextFieldPage></TextFieldPage>-->
<!--    <Button></Button>-->

<!--
    <TDivider margin-top="24" margin-bottom="24"></TDivider>

    <div style="display: flex; justify-content: center; align-items: center;">
      <TPopover animation="scale" v-model="showPopover">
        <template v-slot:trigger="{ on }">
          <TButton :width="268" v-on="on">Show Popover</TButton>
        </template>
        <div style="min-width: 280px; background: grey; color: white;">
          <div style="display: flex; align-items: center; justify-content: center; padding: 8px 0;">
            &lt;!&ndash;            <TButton icon-button>
                          <TIcon>close</TIcon>
                        </TButton>&ndash;&gt;
          </div>
          <div style="display: flex; padding: 0 8px;">
            <TAvatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9ORnUDX7F9rlXOP3e0mINZkdxzJGXyeT0XYvj3fg=s32-c-mo"></TAvatar>
            <div style="display: block; font-size: 14px; margin-left: 8px;">
              <div style="font-weight: bold; margin-bottom: 2px;">Your Username (Logged In!)</div>
              <div style="font-size: 13px;">Your email address</div>
            </div>
          </div>

          <TDivider :color="'#F9F9F9'" :margin-top="12" :margin-bottom="4"></TDivider>
          <div style="display: flex; align-items: center; padding: 8px;">
            <div style="width: 40px; text-align: center;">
              <TIcon>person_add</TIcon>
            </div>
            <div style="font-weight: bold; font-size: 14px; margin-left: 8px;">Add another account</div>
          </div>
          <TDivider color="transparent" :margin-top="2" :margin-bottom="2"></TDivider>
          <div style="display: flex; align-items: center; padding: 8px;">
            <div style="width: 40px; text-align: center;">
              <TIcon>admin_panel_settings</TIcon>
            </div>
            <div style="font-weight: bold; font-size: 14px; margin-left: 8px;">Manage Accounts</div>
          </div>
          <TDivider color="transparent" :margin-top="2" :margin-bottom="2"></TDivider>
          <div style="display: flex; align-items: center; padding: 8px; cursor: pointer;" @click="">
            <div style="width: 40px; text-align: center;">
              <TIcon>exit_to_app</TIcon>
            </div>
            <div style="font-weight: bold; font-size: 14px; margin-left: 8px;">Sign out</div>
          </div>
          <TDivider :color="'#F9F9F9'" :margin-top="4" :margin-bottom="12"></TDivider>
          <div style="display: flex; align-items: center; justify-content: center; padding: 0 8px 8px 8px; font-size: 13px;">
            <div>Privacy Policy</div>
            <TIcon :size="6" style="margin: 0 8px;">lens</TIcon>
            <div>Terms of Service</div>
          </div>
        </div>
      </TPopover>

      <TPopover>
        <template v-slot:trigger="{ on }">
          <TAvatar tile hover :size="50" src="https://lh3.googleusercontent.com/ogw/ADGmqu9ORnUDX7F9rlXOP3e0mINZkdxzJGXyeT0XYvj3fg=s32-c-mo" v-on.native="on"></TAvatar>
        </template>
      </TPopover>
    </div>

    <TDivider></TDivider>

    <div style="width: 240px; margin: 0 auto;">
      <TListItem activated>
        dsad
      </TListItem>
    </div>

    <TDivider></TDivider>

    <TResponsiveList :container-width="availableWidth">
      <TResponsiveListItem
        v-for="i in 9"
        :key="i"
        :container-width-synced.sync="availableWidth"
        :min-item-width="264"
        :max-item-width="424"
        :margin="12"
        :max-item-per-row="3">
        <TCard outlined hover>xxsadsa</TCard>
      </TResponsiveListItem>
    </TResponsiveList>

    <div style="display: flex; align-items: center; margin-top: 20px;">
      <span style="margin: 0 16px 0 16px;">ICONS</span>
      <div style="display: flex; align-items: center;">
        <TIcon color="red" size="50">search</TIcon>
        <TIcon style="font-size: 50px;">menu</TIcon>
        <TIcon style="color: blue">favorite</TIcon>
      </div>
    </div>

    <TButton :color="`#5a3cff`" outlined disabled>321</TButton>

    <TButton icon-button>
&lt;!&ndash;      <TIcon>home</TIcon>&ndash;&gt;
      <svg style="fill: #5f6368;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
        <circle cx="12" cy="12" r="3.5"></circle>
      </svg>
    </TButton>

    <TButton icon-button>
      <svg style="fill: #5f6368;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
      </svg>
    </TButton>

    <TAvatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9ORnUDX7F9rlXOP3e0mINZkdxzJGXyeT0XYvj3fg=s32-c-mo"></TAvatar>

    <div style="display: flex; flex-wrap: wrap; justify-content: center;">
      <div style="flex: 1; min-width: 320px; max-width: 424px; padding: 8px;">
        <TCard elevated tile>12312</TCard>
      </div>
      <div style="flex: 1; min-width: 320px; max-width: 424px; padding: 8px;">
        <TCard outlined hover tile>12312</TCard>
      </div>
      <div style="flex: 1; min-width: 320px; max-width: 424px; padding: 8px;">
        <TCard outlined hover tile>12312</TCard>
      </div>
    </div>

    <TModal style="margin: 16px;" persistent>
      <template v-slot:trigger="{ on }">
        <TButton night-mode v-on="on">Open Modal</TButton>
      </template>
      <TCard style="padding: 8px 24px; width: 600px;">
        <div style="height: 200px;"></div>
        <div style="display: flex; justify-content: flex-end;">
          <TButton text style="margin-right: 8px;">Cancel</TButton>
          <TButton :width="80">Send</TButton>
        </div>
      </TCard>
    </TModal>

    <TButton text @click="onText()">123456</TButton>
    <TButton icon-button :size="12" :height="20" :width="20">
      <TIcon>home</TIcon>
    </TButton>

    <TDivider></TDivider>

    <div style="width: 300px; margin: 0 auto;">
      <TTextField block v-model="tos" @onLabelUpOrDown="showLens = !$event">
        <div slot="label">
          <div style="display: flex; align-items: center;">
            <div style="margin-right: 12px; font-weight: bold; color: rgba(0,0,0,0.4); letter-spacing: 0.2px;">USERNAME</div>
            <TIcon :size="8" :color="`#1a73e8`" v-if="showLens">lens</TIcon>
          </div>
        </div>
        <div slot="validator">
          <TIcon :size="22" :color="`#1a73e8`" style="font-weight: bold;">check</TIcon>
        </div>
      </TTextField>
    </div>

    <div style="width: 300px; margin: 0 auto;">
      <TTextArea v-model="tos" :rows="10" block>
        <div slot="label">Title</div>
      </TTextArea>
    </div>

    <TDivider></TDivider>

    <TTabBar v-model="tos">
      <TTab tile-indicator stretch dense :value="'abcdef'">
        <div>Primary</div>
      </TTab>
      <TTab :value="'ghijklmno'">
        <div>Accent</div>
      </TTab>
    </TTabBar>

    <TButton night-mode @click="showModal = !showModal">Open Modal</TButton>

    <TModal style="margin: 16px;" v-model="showModal">
      <TCard style="padding: 8px 24px; width: 600px;">
        <div style="height: 200px;"></div>
        <div style="display: flex; justify-content: flex-end;">
          <TButton text style="margin-right: 8px;">Cancel</TButton>
          <TButton :width="80">Send</TButton>
        </div>
      </TCard>
    </TModal>

    <TButton @click="isShowSnackbar = !isShowSnackbar">Show tips</TButton>

    <TSnackbar v-model="isShowSnackbar" centered vertical>
      <TIcon>priority_high</TIcon> Tips!!!!
    </TSnackbar>

    <div style="margin-top: 16px; text-align: center;">
      <div>双向控制</div>
      <span style="width: 450px; display: inline-block">
        <TProcessBar v-model="processPerent"></TProcessBar>
      </span>
    </div>

    <div style="margin-top: 16px; text-align: center;">
      <div>双向控制 全参数版</div>
      <span style="width: 450px; display: inline-block">
        <TProcessBar  v-model="processPerent"
                      containerHeight="45"
                      containerWidth="550"
                      containerColor="linear-gradient(to bottom, #fff, #000)"
                      containerBorderColor="blue"
                      processColor="linear-gradient(to right, red, #00ffff)"
                      sliderColor="green"
                      >
        </TProcessBar>
      </span>
    </div>

    <div style="margin-top: 16px; text-align: center;">
      <div>循环动画版</div>
      <span style="width: 450px; display: inline-block">
        <TProcessBar circle></TProcessBar>
      </span>
    </div>

    <div style="margin-top: 16px; text-align: center;">
      <div>往返动画版</div>
      <span style="width: 450px; display: inline-block">
        <TProcessBar swing></TProcessBar>
      </span>
    </div>

    <div style="display: flex; align-items: flex-end; padding: 24px;">
      <span style="margin-right: 32px;">下拉选择框</span>
      <div>
        <TSelect label="Label" :items="testItems"></TSelect>
      </div>
    </div>

    <div style="display: flex; align-items: flex-end; padding: 24px;">
      <span style="margin-right: 32px;">自动筛选框</span>
      <div>
        <TAutoComplete label="auto-complete label" clear :items="testItems"></TAutoComplete>
      </div>
    </div>

    <div style="display: flex; align-items: flex-end; padding: 24px;">
      <span style="margin-right: 32px;">Switch</span>
      <div>
        <TSwitch label="switch check"></TSwitch>
      </div>
    </div>

    <div style="display: flex; align-items: flex-end; padding: 24px;">
      <span style="margin-right: 32px;">输入框框</span>
      <div>
        <TInput label="Input sth..." v-model="tos" clear></TInput>
      </div>
    </div>-->

  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator';
import TPopover from '@/components/popover/TPopover.vue';
import TButton from '@/components/button/TButton.vue';
import TCard from '@/components/card/TCard.vue';
import TResponsiveListItem from '@/components/responsive-list-item/TResponsiveListItem.vue';
import TResponsiveList from '@/components/responsive-list/TResponsiveList.vue';
import TTab from '@/components/tab-bar/tab/TTab.vue';
import TTabBar from '@/components/tab-bar/TTabBar.vue';
import TDivider from '@/components/divider/TDivider.vue';
import TListItem from '@/components/list-item/TListItem.vue';
import TIcon from '@/components/icon/TIcon.vue';
import TAvatar from '@/components/avatar/TAvatar.vue';
import TModal from '@/components/modal/TModal.vue';
import TTextField from '@/components/text-field/TTextField.vue';
import TTextArea from '@/components/text-area/TTextArea.vue';
import TSnackbar from '@/components/snackbar/TSnackbar.vue';
import TProcessBar from '@/components/process-bar/TProcessBar.vue';
import TSelect from '@/components/select/TSelect.vue';
import TAutoComplete from '@/components/auto-complete/TAutoComplete.vue';
import TSwitch from '@/components/switch/TSwitch.vue';
import TInput from '@/components/input/TInput.vue';
import Button from '@/pages/Button.vue';
import TextFieldPage from '@/pages/TextFieldPage.vue';
import BreadcrumbsPage from '@/pages/BreadcrumbsPage.vue';

@Component({
  components: {
    BreadcrumbsPage,
    TextFieldPage,
    Button,
    TTextArea,
    TTextField,
    TModal,
    TAvatar,
    TListItem,
    TDivider,
    TTabBar,
    TTab,
    TResponsiveList,
    TResponsiveListItem,
    TCard,
    TButton,
    TPopover,
    TIcon,
    TSnackbar,
    TProcessBar,
    TSelect,
    TAutoComplete,
    TSwitch,
    TInput
  },
})
export default class App extends Vue {
  availableWidth: number = 0;
  tos: string = 'ghijklmnoddd';
  showModal: boolean = false;
  isShowSnackbar: boolean = false;
  processPerent: number = 20;
  showLens: boolean = false;
  showPopover: boolean = false;
  testItems: any[] = [ { text: '1123', value: 1 }, { text: '哈哈', value: 2 }, { text: '哈哈哈123', value: 3 } ];

  created() {
    window.onresize = this.onResize;
    this.onResize();
  }

  onResize() {
    this.availableWidth = window.innerWidth;
  }

  onText() {
    // console.log(this.tos);
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
  width: inherit;
  height: inherit;
}

html {
  overflow-y: auto;
  width: 100%;
  height: 100%;
}
</style>
