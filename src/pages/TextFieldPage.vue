<template>
  <div style="padding: 24px;">
    <div style="display: flex; justify-content: center; flex-direction: column; align-items: center;">
      <TChip color-theme="basic" tag>Never Split the difference</TChip>
      <TChip color-theme="primary">Never Split the difference</TChip>
      <TChip color-theme="secondary">Never Split the difference</TChip>
      <TChip color-theme="info">Never Split the difference</TChip>
      <TChip color-theme="success">Never Split the difference</TChip>
      <TChip color-theme="warning">Never Split the difference</TChip>
      <TChip color-theme="danger">Never Split the difference</TChip>
      <TChip color-theme="gray" contrast>Never Split the difference</TChip>
      <TChip color-theme="basic" contrast>Never Split the difference</TChip>
      <TChip color-theme="primary" contrast>Never Split the difference</TChip>
      <TChip color-theme="secondary" contrast>Never Split the difference</TChip>
      <TChip color-theme="info" contrast>Never Split the difference</TChip>
      <TChip color-theme="success" contrast>Never Split the difference</TChip>
      <TChip color-theme="warning" contrast>Never Split the difference</TChip>
      <TChip color-theme="danger" contrast>Never Split the difference</TChip>
      <TChip color-theme="gray" outlined>Never Split the difference</TChip>
      <TChip color-theme="basic" outlined>Never Split the difference</TChip>
      <TChip color-theme="primary" outlined>Never Split the difference</TChip>
      <TChip color-theme="secondary" outlined>Never Split the difference</TChip>
      <TChip color-theme="info" outlined>Never Split the difference</TChip>
      <TChip color-theme="success" outlined>Never Split the difference</TChip>
      <TChip color-theme="warning" outlined>Never Split the difference</TChip>
      <TChip color-theme="danger" outlined>Never Split the difference</TChip>
      <TChip color-theme="gray" stroked>Never Split the difference</TChip>
      <TChip color-theme="basic" stroked>Never Split the difference</TChip>
      <TChip color-theme="primary" stroked>Never Split the difference</TChip>
      <TChip color-theme="secondary" stroked>Never Split the difference</TChip>
      <TChip color-theme="info" stroked>Never Split the difference</TChip>
      <TChip color-theme="success" stroked>Never Split the difference</TChip>
      <TChip color-theme="warning" stroked>Never Split the difference</TChip>
      <TChip color-theme="danger" stroked>Never Split the difference</TChip>
      <TChip>
        Never Split the difference
        <TGIcon right>icon-control</TGIcon>
      </TChip>
      <TChip color-theme="secondary" outlined small>
        <TGIcon left>icon-control</TGIcon>
        Never Split the difference</TChip>

    </div>
    <div style="display: flex; justify-content: center;">
      <TSelect v-model="selectItemModel"
               :items="selectItemsNew"
               title="选择基准数据版本"
               placeholder="选择版本">
        <template v-slot:inputText>33213212</template>
        <template v-slot:end>
          <div>dsad</div>
        </template>
        <template v-slot:header>
          <TTabBar v-model="tabModel2" block outlined>
            <TTab :value="'branches'">
              <div>Branches</div>
            </TTab>
            <TTab :value="'tags'">
              <TGIcon left>icon-control</TGIcon>
              <div>Tags</div>
              <TGIcon right @click.stop="">icon-close</TGIcon>
            </TTab>
          </TTabBar>
        </template>
        <template v-slot:optionText="{ item, index }">
          <div>{{ index === 1 ? 'Custom TEXT' : item.text }}</div>
        </template>
        <template v-slot:right="{ item, index }">
          <TChip small stroked v-if="index === 0">default</TChip>
        </template>
      </TSelect>
    </div>
    <div style="display: flex;">
      <TTabBar v-model="tabModel" block>
        <TTab :value="'abcdef'">
          <div>Primary</div>
        </TTab>
        <TTab :value="'ghijklmno'">
          <TGIcon left>icon-control</TGIcon>
          <div>Accent</div>
          <TGIcon right @click.stop="">icon-close</TGIcon>
        </TTab>
        <TTab :value="'xxsad'" disabled>
          <TGIcon left>icon-control</TGIcon>
          <div>Disabled</div>
        </TTab>
        <TTab :value="'xxsad'" disabled>
          <TGIcon left>icon-control</TGIcon>
          <div>Disabled</div>
        </TTab>
        <TTab :value="'xxsad'" disabled>
          <TGIcon left>icon-control</TGIcon>
          <div>Disabled</div>
        </TTab>
        <TTab :value="'xxsad'" disabled>
          <TGIcon left>icon-control</TGIcon>
          <div>Disabled</div>
        </TTab>
      </TTabBar>
    </div>
    <div style="display: flex;">
      <TTextField suffix=".com">
        <template v-slot:prefix>
          <TGIcon>icon-control</TGIcon>
        </template>
        <template v-slot:suffix>
          <TGIcon>icon-control</TGIcon>
        </template>
      </TTextField>
    </div>
    <div style="display: flex;">
      <TCheckBox v-model="cb" :label="cb.toString()" :value="true"></TCheckBox>
    </div>
    <div style="display: flex;">
      <TCheckBox v-model="cb2" :label="cb2.toString()" indeterminate></TCheckBox>
    </div>
    <div style="display: flex;">
      <TCheckBox :label="'disable checked'" :value="true" disabled></TCheckBox>
    </div>
    <div style="display: flex;">
      <TCheckBox :label="'disabled unchecked'" :value="false" disabled></TCheckBox>
    </div>

    <TRadioGroup v-model="rg" horizontal>
      <TRadioButton label="Spain" :value="true"></TRadioButton>
      <TRadioButton label="England" :value="false"></TRadioButton>
<!--      <TRadioButton label="US" value="us"></TRadioButton>-->
    </TRadioGroup>
    <div>{{ rg }}</div>

    <TRadioGroup v-model="rg2">
      <TRadioButton label="Spain" value="spain">
        <template v-slot:label>
          <div>
            <TGIcon>icon-control</TGIcon>
            <TGIcon>icon-control</TGIcon>
          </div>
          <div>
            <TGIcon>icon-control</TGIcon>
            <TGIcon>icon-control</TGIcon>
          </div>
        </template>

      </TRadioButton>
      <TRadioButton label="England" value="england"></TRadioButton>
      <TRadioButton label="US" value="us"></TRadioButton>
    </TRadioGroup>
    <div>{{ rg2 }}</div>

    <div style="font-size: 36px; font-weight: 600;">INPUT FORM</div>

    <TDivider></TDivider>

    <TTextField title="Email address"
                placeholder="Enter your email address"
                hint="description text">
    </TTextField>

    <div style="font-size: 20px; font-weight: 600; margin: 32px 0;">常规输入框</div>

    <div style="display: flex; justify-content: space-between;">

      <div>
        <TTextField title="Default"
                    placeholder="Placeholder text"
                    style="margin-bottom: 32px;">
        </TTextField>
        <TTextField title="Focused"
                    placeholder="Placeholder text"
                    style="margin-bottom: 32px;">
        </TTextField>
        <TTextField title="Success"
                    placeholder="Placeholder text"
                    style="margin-bottom: 32px;">
        </TTextField>
        <TTextField title="Disabled"
                    placeholder="Placeholder text"
                    style="margin-bottom: 32px;"
                    disabled>
        </TTextField>
      </div>

      <div>
        <TTextField title="Hover"
                    placeholder="Placeholder text"
                    style="margin-bottom: 32px;">
        </TTextField>
        <TTextField title="Filled"
                    placeholder="Placeholder text"
                    style="margin-bottom: 32px;">
        </TTextField>
        <TTextField title="Error"
                    placeholder="Placeholder text"
                    style="margin-bottom: 32px;"
                    error="Error message">
        </TTextField>
      </div>

      <div>
        <TTextArea title="Text area"
                   placeholder="Placeholder text"
                   :rows="10"
                   :height="200"
                   no-resize
                   style="margin-bottom: 32px;"></TTextArea>

        <div style="display: flex; justify-content: center;">
          <TMenu :width="300"
                 v-model="selectedMenuItem"
                 :items="menuItems"
                 return-object
                 item-text="textt"
                 item-value="un">
            <template v-slot:trigger="{ on }">
              <TButton style="color: white;" large block v-on="on">{{ selectedMenuItem }}</TButton>
            </template>
            <template v-slot:header>
              <div>32112</div>
            </template>
            <template v-slot:footer>
              <div>32112</div>
            </template>
          </TMenu>
        </div>

      </div>


    </div>

    <div style="display: flex; justify-content: space-between;">

      <div>
        <div style="font-size: 20px; font-weight: 600; margin: 32px 0;">Search Bar</div>
      </div>

<!--      <div>
        <div style="font-size: 20px; font-weight: 600; margin: 32px 0;">Dropdown</div>
        <TSelect disabled v-model="selectedOption" :items="selectItems" title="Normal"></TSelect>
        <TSelect v-model="selectedOption" :items="selectItems" title="Hint" hint="I am hint"></TSelect>
        <TSelect v-model="selectedOptionsObject"
                 return-object
                 :items="selectItemsd"
                 item-text="textt"
                 item-value="valuee"
                 title="Error"
                 error="I am error">

          <template v-slot:right="{ item, index }">
            <TButton v-if="index === 0">ddsa</TButton>
          </template>
        </TSelect>
        {{ selectedOptionsObject }}
      </div>-->

      <div>
        <div style="font-size: 20px; font-weight: 600; margin: 32px 0;">Multi Select</div>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TTextField from '../components/text-field/TTextField.vue';
import TDivider from '@/components/divider/TDivider.vue';
import TTextArea from '@/components/text-area/TTextArea.vue';
import TSelect from '@/components/select/TSelect.vue';
import {ITSelectItem} from '@/components/select/TSelect';
import TMenu from '@/components/menu/TMenu.vue';
import TButton from '@/components/button/TButton.vue';
import {ITMenuItem} from '@/components/menu/TMenu';
import TCheckBox from '@/components/checkbox/TCheckBox.vue';
import TRadioButton from '@/components/radio-group/radio-button/TRadioButton.vue';
import TRadioGroup from '@/components/radio-group/TRadioGroup.vue';
import TTabBar from '@/components/tab-bar/TTabBar.vue';
import TTab from '@/components/tab-bar/tab/TTab.vue';
import TGIcon from '@/components/g-icon/TGIcon.vue';
import TChip from '@/components/chip/TChip.vue';
import {SelectItem} from '@/pages/select-item';

@Component({
  name: "TextFieldPage",
  components: {
    TChip,
    TGIcon,
    TTab,
    TTabBar, TRadioGroup, TRadioButton, TCheckBox, TButton, TMenu, TSelect, TTextArea, TDivider, TTextField}
})
export default class TextFieldPage extends Vue {
  selectItems: ITSelectItem[] = [
    { text: "foo1", value: "1" },
    { text: "foo2", value: "2" },
    { text: "foo3", value: "3", icon: 'icon-add' },
    { text: "foo4", value: "4", icon: 'icon-control', disabled: true },
  ];
  selectedOption: any = { text: "foo1", value: "1" };


  selectItemsd: ITSelectItem[] = [
    { textt: "foo1", valuee: "1" },
    { textt: "foo2d", valuee: "2" },
    { textt: "foo2s", valuee: "3", icon: 'icon-add' },
    { textt: "foo2a", valuee: "3", icon: 'icon-control', disabled: true },
  ];
  selectedOptionsObject: ITSelectItem = this.selectItemsd[0];

  menuItems: ITMenuItem[] = [
    { textt: "foomenu1", valuee: "1", disabled: true, un: 12 },
    { textt: "foomenu2", valuee: "2", icon: "icon-fork", un: 32 },
    { textt: "foomenu3", valuee: "3", un: undefined },
    { textt: "foomenu4", valuee: "4", un: undefined },
  ];
  selectedMenuItem: any = '';

  cb: boolean = true;
  cb2: boolean = true;
  rg: boolean = true;
  rg2: string = "spain";

  tabModel: string = 'ghijklmno';
  tabModel2: string = 'tags';

  selectItemsNew: SelectItem[] = [];
  selectItemModel: number = 0;

  constructor() {
    super();
    const item1: SelectItem = new SelectItem();
    item1.text = 'zoo1';
    item1.value = 1;
    const item2: SelectItem = new SelectItem();
    item2.text = 'zoo2';
    item2.value = 2;
    const item3: SelectItem = new SelectItem();
    item3.text = 'zoo3';
    item3.value = 3;
    this.selectItemsNew.push(item1);
    this.selectItemsNew.push(item2);
    this.selectItemsNew.push(item3);
  }

  mounted() {
/*    setTimeout(() => {
      this.selectedOption.value = "3"
    }, 3000);*/

    setTimeout(() => {
      this.selectItemModel = 1;
      // this.selectItemModel.value = 2
      // console.log(this.selectItemModel)

      this.rg = false;
      this.rg2 = 'england';
    }, 2000);

    setTimeout(() => {
      this.selectItemModel = 1;
      // this.selectItemModel.value = 2
      // console.log(this.selectItemModel)

      this.rg = true;
      this.rg2 = 'spain';
    }, 4000);
  }
}
</script>

<style scoped>

</style>
