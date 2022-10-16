import { Component } from 'vue';

import TitleSection from '@/sections/TitleSection.vue'
import AboutVillage from '@/sections/AboutVillage.vue'
import Infraxture from '@/sections/Infraxture.vue'
import GeneralPlan from '@/sections/GeneralPlan.vue'
import Galley from '@/sections/Galley.vue'
import Partners from '@/sections/Partners.vue'

import Menu from '@/components/Menu.vue'
import Arrow from '@/components/Arrow.vue'
import Navigation from '@/components/Navigation.vue'
import InteractiveButtons from '@/components/interactiveButtons.vue'
import Icons from "@/components/Icons.vue";

export interface RegComponent {
  name: string;
  component: Component;
}

export const SectionsPages: Array<RegComponent> = [
  {
    name: 'TitleSection',
    component: TitleSection,
  },
  {
    name: 'AboutVillage',
    component: AboutVillage
  },
  {
    name: 'Infraxture',
    component: Infraxture
  },
  {
    name: 'GeneralPlan',
    component: GeneralPlan
  },
  {
    name: 'Galley',
    component: Galley
  },
  {
    name: 'Partners',
    component: Partners
  },
]

export const Components: Array<RegComponent> = [
  {
    name: 'Icons',
    component: Icons
  },
  {
    name: 'Arrow',
    component: Arrow
  },
  {
    name: 'Menu',
    component: Menu
  },
  {
    name: 'Navigation',
    component: Navigation
  },
  {
    name: 'InteractiveButtons',
    component: InteractiveButtons
  },
]