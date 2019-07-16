import { Injectable } from '@angular/core';

export interface Theme {
  name: string;
  properties: any;
}

export const suku: Theme = {
  name: 'suku',
  properties: {
    '--suku-primary-font': `'Poppins', sans-serif`,
    '--suku-secondary-font': `'Encode Sans', sans-serif`,
    '--suku-ternary-font': `''abelregular', sans-serif`,
    '--suku-primary-color': '#a7bf2e',
    '--suku-secondary-color': '#d8fc40',
    '--suku-bg-primary': '#2f2e2e',
    '--suku-bg-secondary': '#272727',
    '--suku-bg-ternary': '#35393e',
    '--suku-homepage-bg': '#ffffff',
    '--suku-button-default-bg': '#303030',
    '--suku-button-disabled-bg': '#d9d9d9',
    '--suku-icon-disabled-color': '#7f7f7f',
    '--suku-text-heading': '#1d1d1d',
    '--suku-text-sub-heading': '#cccccc',
    '--suku-text-label-one': '#b6b6b6',
    '--suku-text-label-two': '#ffffff',
    '--suku-text-label-three': '#f2f2f2',
    '--suku-text-link': '#3e3e3e',
    '--suku-text-info': '#757575',
    '--suku-primary-border-color': '#a7bf2e',
    '--suku-secondary-border-color': '#757575',
    '--suku-primary-border-radius': '0 40px 0 0',
    '--suku-secondary-border-radius': '0px 0px 41px 41px',
    '--suku-default-border-radius': '0px',
    '--suku-filter-bg': '#ffffff',
    '--suku-filter-label': '#b6b6b6',
    '--suku-filter-label-selected': 'black',
    '--suku-font-size-xs': '0.5rem',
    '--suku-font-size-sm': '1rem',
    '--suku-font-size-md': '1.5rem',
    '--suku-font-size-lg': '2rem',
    '--suku-font-size-xl': '3rem'
  }
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--suku-primary-font': `'Poppins', sans-serif`,
    '--suku-secondary-font': `'Encode Sans', sans-serif`,
    '--suku-ternary-font': `'"abelregular", sans-serif`,
    '--suku-primary-color': '#363b4e',
    '--suku-secondary-color': '#d8fc40',
    '--suku-bg-primary': '#363b4e',
    '--suku-bg-secondary': '#272727',
    '--suku-bg-ternary': '#35393e',
    '--suku-homepage-bg': '#ffffff',
    '--suku-button-default-bg': '#303030',
    '--suku-button-disabled-bg': '#d9d9d9',
    '--suku-icon-disabled-color': '#7f7f7f',
    '--suku-text-heading': '#1d1d1d',
    '--suku-text-sub-heading': '#f2f2f2',
    '--suku-text-label-one': '#b6b6b6',
    '--suku-text-label-two': '#ffffff',
    '--suku-text-label-three': '#f2f2f2',
    '--suku-text-link': '#3e3e3e',
    '--suku-text-info': '#757575',
    '--suku-primary-border-color': '#f2f2f2',
    '--suku-secondary-border-color': '#757575',
    '--suku-primary-border-radius': '0',
    '--suku-secondary-border-radius': '0px 0px 41px 41px',
    '--suku-default-border-radius': '0px 20px 15px',
    '--suku-filter-bg': 'black',
    '--suku-filter-label': '#b6b6b6',
    '--suku-filter-label-selected': '#ffffff',
    '--suku-font-size-xs': '1rem',
    '--suku-font-size-sm': '1.5rem',
    '--suku-font-size-md': '2rem',
    '--suku-font-size-lg': '2.5rem',
    '--suku-font-size-xl': '3rem'
  }
};

export const light: Theme = {
  name: 'light',
  properties: {
    '--suku-primary-font': `'Source Sans Pro', sans-serif`,
    '--suku-secondary-font': `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
    '--suku-ternary-font': `'"abelregular", sans-serif`,
    '--suku-primary-color': '#a7bf2e',
    '--suku-secondary-color': '#b3b3b3',
    '--suku-bg-primary': '#a6c36f',
    '--suku-bg-secondary': '#282828',
    '--suku-bg-ternary': '#35393e',
    '--suku-homepage-bg': '#ffffff',
    '--suku-button-default-bg': '#303030',
    '--suku-button-disabled-bg': '#d9d9d9',
    '--suku-icon-disabled-color': '#7f7f7f',
    '--suku-text-heading': '#1d1d1d',
    '--suku-text-sub-heading': '#1d1d1d',
    '--suku-text-label-one': '#b6b6b6',
    '--suku-text-label-two': 'black',
    '--suku-text-label-three': '#f2f2f2',
    '--suku-text-link': '#3e3e3e',
    '--suku-text-info': '#757575',
    '--suku-primary-border-color': '#151515',
    '--suku-secondary-border-color': '#757575',
    '--suku-primary-border-radius': '0px 15px 10px 0px',
    '--suku-secondary-border-radius': '0px 0px 41px 41px',
    '--suku-default-border-radius': '10px 10px 20px 5px',
    '--suku-filter-bg': 'black',
    '--suku-filter-label': '#b6b6b6',
    '--suku-filter-label-selected': '#ffffff',
    '--suku-font-size-xs': '1rem',
    '--suku-font-size-sm': '1.5rem',
    '--suku-font-size-md': '2rem',
    '--suku-font-size-lg': '2.5rem',
    '--suku-font-size-xl': '3rem'
  }
};

@Injectable({
  providedIn: 'root'
})
export class SukuWebcomponentsService {
  private active: Theme = suku;

  constructor() {
  }

  public setLightTheme(): void {
    this.setActiveTheme(light);
  }

  public setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  public setSukuTheme(): void {
    console.log('suku');
    this.setActiveTheme(suku);
  }

  private setActiveTheme(theme: Theme): void {
    this.active = theme;
    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(property, this.active.properties[property]);
    });
  }
}
