<template>
  <div style="padding: 16px;">
    <div style="display: flex; justify-content: center;">
      <TAvatar x-small text="G"></TAvatar>
      <TAvatar small text="G"></TAvatar>
      <TAvatar medium text="G"></TAvatar>
      <TAvatar large text="G"></TAvatar>
      <TAvatar x-large text="G"></TAvatar>
      <TAvatar xx-large text="G"></TAvatar>
      <TAvatar size="42" text="G"></TAvatar>
    </div>
    <div style="display: flex; justify-content: center;">
      <TAvatar text="123"></TAvatar>
      <TAvatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9ORnUDX7F9rlXOP3e0mINZkdxzJGXyeT0XYvj3fg=s32-c-mo"></TAvatar>
      <TAvatar large src="https://lh3.googleusercontent.com/ogw/ADGmqu9ORnUDX7F9rlXOP3e0mINZkdxzJGXyeT0XYvj3fg=s32-c-mo"></TAvatar>
      <TAvatar size="42" src="https://lh3.googleusercontent.com/ogw/ADGmqu9ORnUDX7F9rlXOP3e0mINZkdxzJGXyeT0XYvj3fg=s32-c-mo"></TAvatar>
    </div>

    <TSwitch></TSwitch>
    <TSwitch disabled label="dsads"></TSwitch>

    <div style="display: flex; justify-content: center;">
      <TPagination outlined v-model="page" :length="12"></TPagination>
    </div>

    <div style="display: flex; justify-content: center;">
      <TPagination v-model="page" :length="12"></TPagination>
    </div>

    <div style="margin: 64px 0;">


      <TTable :headers="tableHeaders" :items="tableItems">

        <template v-slot:header1="{ item }">
          <div style="color: red; display: flex; align-items: center;">{{ item.header1 }}
            <TChip stroked small>Default</TChip>
          </div>
        </template>
        <template v-slot:header7="{ item }">
          <TButton>查看数据集</TButton>
        </template>

      </TTable>
    </div>

    <TBreadcrumbs :items="breadcrumbs"></TBreadcrumbs>
    <TDivider></TDivider>
    <TBreadcrumbs :items="breadcrumbs2"></TBreadcrumbs>
    <TDivider></TDivider>

    <div style="display: flex; justify-content: center;">
      <TMenu :items="menuItems" options-width="310px">
        <template v-slot:trigger="{ on }">
          <TButton v-on="on">
            Click me!dsadasdasdasa</TButton>
        </template>
      </TMenu>
      <TMenu :items="menuItems">
        <template v-slot:trigger="{ on }">
          <TButton v-on="on">
            Click me!</TButton>
        </template>
      </TMenu>
    </div>

    <div style="text-align: center;">

      <TTooltip>
        <template v-slot:trigger="{ on }">
          <TGIcon v-on="on">icon-control</TGIcon>
        </template>
        <div>
          <TChip>1111222233333322211</TChip>
        </div>
      </TTooltip>

      <TTooltip click-to-show top>
        <template v-slot:trigger="{ on }">
          <TButton v-on="on">icon-control</TButton>
        </template>
        <div>
          12353231dsadsdasdasdasdasdasa2
          <div>
            dxsads
          </div>
          <div>
            dxsads
          </div>
          <div>
            dxsads
          </div>
          <div>
            <TButton>xsdas</TButton>
          </div>
        </div>
      </TTooltip>

      <TLink href="https://www.google.com" text="google" small>
        <template v-slot:left>
          <TGIcon>icon-control</TGIcon>
        </template>
      </TLink>

      <div style="display: flex; justify-content: center;">
        <TSlides style="margin: 200px 0; background-color: #0d639f;" pager :pager-options="pagerOptions" auto-play>
          <template v-slot:static>
            <div style="padding: 16px;">static slot</div>
          </template>
          <TSlide style="padding: 24px 0;">
            <h1>1</h1>
          </TSlide>
          <TSlide style="padding: 24px 0;">
            <h1>2</h1>
          </TSlide>
          <TSlide style="padding: 24px 0;">
            <h1>3</h1>
          </TSlide>
        </TSlides>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TBreadcrumbs from '../components/breadcrumbs/TBreadcrumbs.vue';
import {ITBreadcrumb} from '@/components/breadcrumbs/TBreadcrumbs';
import TDivider from '@/components/divider/TDivider.vue';
import TMenu from '@/components/menu/TMenu.vue';
import TButton from '@/components/button/TButton.vue';
import TTooltip from '@/components/tooltip/TTooltip.vue';
import TGIcon from '@/components/g-icon/TGIcon.vue';
import TLink from '@/components/link/TLink.vue';
import TSlides from '@/components/slides/TSlides.vue';
import TSlide from '@/components/slides/slide/TSlide.vue';
import {TSlidePagerOptions} from '@/components/slides/TSlide';
import TTable from '@/components/table/TTable.vue';
import TChip from '@/components/chip/TChip.vue';
import {ITTableHeader} from '@/components/table/TTable';
import TPagination from '@/components/pagination/TPagination.vue';
import TSwitch from '@/components/switch/TSwitch.vue';
import TAvatar from '@/components/avatar/TAvatar.vue';

@Component({
  name: "BreadcrumbsPage",
  components: {
    TAvatar,
    TSwitch,
    TPagination,
    TChip, TTable, TSlide, TSlides, TLink, TGIcon, TTooltip, TButton, TMenu, TDivider, TBreadcrumbs}
})
export default class BreadcrumbsPage extends Vue {
  page: number = 10;
  breadcrumbs: ITBreadcrumb[] = [
    { text: 'Dashboard', href: '*' },
    { text: 'Breadcrumb', href: '*' },
    { text: 'Breadcrumb123', href: '*' }
  ];
  breadcrumbs2: ITBreadcrumb[] = [
    { text: 'Top-Level-Page', href: '*' },
    { text: 'Second-Level-Page', href: '*' },
    { text: 'Third-Level-Page', href: '*' }
  ];
  menuItems = [
    { text: '312', value: 'dsad' },
    { text: '312dsaiojdaisjdsadisaiodjiaosjdiasjdiojasiodjisaojdiojaois', value: 'dsadxx', colorTheme: 'danger' },
  ];

  pagerOptions: TSlidePagerOptions = {
    activatedDotColor: 'red',
    dotColor: "yellow"
  };

  tableHeaders: ITTableHeader[] = [
    { text: '配置名称', value: 'header1' },
    { text: '存储方式', value: 'header2' },
    { text: '存储服务商', value: 'header3' },
    { text: '区域', value: 'header4' },
    { text: '存储容器', value: 'header5' },
    { text: '状态', value: 'header6' },
    { text: '操作', value: 'header7', width: '400px' },
  ];
  tableItems: any[] = [
    {
      header1: '1',
      header2: '2',
      header3: '3',
      header4: '4',
      header5: '5',
      header6: '6',
      header7: '7',
    },
    {
      header1: '1',
      header2: '2',
      header3: '3',
      header4: '4',
      header5: '5',
      header6: '6',
      header7: '7',
    },
  ];
}
</script>

<style scoped lang="scss">

</style>
