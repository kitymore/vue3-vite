import type { App } from 'vue';
import EagleContainer from '@/components/eagle-container.vue'
import EagleModel from '@/components/eagle-model.vue'
import EagleTitle from '@/components/eagle-title.vue'
import EagleContent from '@/components/eagle-content.vue'
import EagleTable from '@/components/eagle-table.vue'
import EagleTabs from '@/components/eagle-tabs.vue'
import EagleSearch from '@/components/eagle-search.vue'
import EagleInputBtn from '@/components/eagle-input-btn.vue'
import EaglePdf from '@/components/eagle-pdf.vue';
import EagleForm from '@/components/eagle-form.vue';
import EagleSelect from '@/components/eagle-select.vue';
import EagleCheckbox from '@/components/eagle-checkbox.vue';
import EagleRadio from '@/components/eagle-radio.vue';
import EagleDesc from '@/components/eagle-desc.vue'
export function registerGlobComp(app: App) {
  app.component('eagle-search', EagleSearch);
  app.component('eagle-tabs', EagleTabs);
  app.component('eagle-table', EagleTable);
  app.component('eagle-inputBtn', EagleInputBtn);
  app.component('eagle-container', EagleContainer);
  app.component('eagle-content', EagleContent);
  app.component('eagle-title', EagleTitle);
  app.component('eagle-model', EagleModel);
  app.component('eagle-pdf', EaglePdf);
  app.component('eagle-form', EagleForm);
  app.component('eagle-select', EagleSelect);
  app.component('eagle-checkbox', EagleCheckbox);
  app.component('eagle-radio', EagleRadio);
  app.component('eagle-desc', EagleDesc);
}
