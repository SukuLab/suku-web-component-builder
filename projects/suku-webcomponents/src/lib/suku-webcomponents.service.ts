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
    '--suku-search-border-radius': '10px 18px 18px 16px',
    '--suku-default-border-radius': '0px',
    '--suku-star-empty-bg': '#e1e1e1',
    '--suku-star-full-bg': 'rgb(137, 137, 137)',
    '--suku-star-size': '20px',
    '--suku-filter-bg': '#ffffff',
    '--suku-filter-label': '#b6b6b6',
    '--suku-filter-label-selected': 'black',
    '--suku-font-size-1': '11px', // 11px	0.75rem
    '--suku-font-size-2': '12px', // 12px	0.875rem
    '--suku-font-size-3': '14px', // 14px	1.0625rem
    '--suku-font-size-4': '17px', // 20px	1.25rem
    '--suku-font-size-5': '20px', // 24px	1.5rem
    '--suku-font-size-6': '24px', // 26px	1.625rem
    '--suku-font-size-7': '26px', // 30px	1.875rem
    '--suku-font-size-8': '30px'  // 32px	1.875rem
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
    '--suku-search-border-radius': '10px 18px 18px 16px',
    '--suku-star-empty-bg': '#e1e1e1',
    '--suku-star-full-bg': 'rgb(137, 137, 137)',
    '--suku-star-size': '20px',
    '--suku-filter-bg': 'black',
    '--suku-filter-label': '#b6b6b6',
    '--suku-filter-label-selected': '#ffffff',
    '--suku-font-size-1': '0.75rem', // 12px	- 0.75rem
    '--suku-font-size-2': '0.875rem', // 14px	0.875rem
    '--suku-font-size-3': '1.06rem', // 17px	1.0625rem
    '--suku-font-size-4': '1.25rem', // 20px	1.25rem
    '--suku-font-size-5': '1.5rem', //  24px	1.5rem
    '--suku-font-size-6': '1.625rem', // 26px	1.625rem
    '--suku-font-size-7': '1.8rem', //  30px	1.875rem
    '--suku-font-size-8': '2rem' //  32px	1.875rem
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
    '--suku-search-border-radius': '10px 18px 18px 16px',
    '--suku-filter-bg': 'black',
    '--suku-filter-label': '#b6b6b6',
    '--suku-filter-label-selected': '#ffffff',
    '--suku-font-size-1': '0.75rem', // 12px	- 0.75rem
    '--suku-font-size-2': '0.875rem', // 14px	0.875rem
    '--suku-font-size-3': '1.06rem', // 17px	1.0625rem
    '--suku-font-size-4': '1.25rem', // 20px	1.25rem
    '--suku-font-size-5': '1.5rem', //  24px	1.5rem
    '--suku-font-size-6': '1.625rem', // 26px	1.625rem
    '--suku-font-size-7': '1.8rem', //  30px	1.875rem
    '--suku-font-size-8': '2rem' //  32px	1.875rem
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
