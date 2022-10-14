import { createApp } from 'vue'
import App from '@/App.vue'
import { SectionsPages, Components, RegComponent } from '@/sections';

const app = createApp(App);

app.config.warnHandler = () => {};

SectionsPages.forEach((comp: RegComponent) => {
  app.component(comp.name, comp.component);
});

Components.forEach((comp: RegComponent) => {
  app.component(comp.name, comp.component);
});

app.mount('#app')
