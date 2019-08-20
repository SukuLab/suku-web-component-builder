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
    '--suku-ternary-font': `'abelregular', sans-serif`,
    '--suku-primary-color': '#a7bf2e',
    '--suku-secondary-color': '#d8fc40',
    '--suku-warning-color': '#FF0000',
    '--suku-bg-primary': '#2f2e2e',
    '--suku-bg-secondary': '#272727',
    '--suku-bg-ternary': '#35393e',
    '--suku-homepage-bg': '#ffffff',
    '--suku-button-default-bg': '#303030',
    '--suku-button-disabled-bg': '#d9d9d9',
    '--suku-icon-disabled-color': '#7f7f7f',
    '--suku-default-icon-color': '#b6b6b6',
    '--suku-text-heading': '#1d1d1d',
    '--suku-text-sub-heading': '#cccccc',
    '--suku-text-label-one': '#b6b6b6',
    '--suku-text-label-two': '#ffffff',
    '--suku-text-label-three': '#f2f2f2',
    '--suku-text-link': '#3e3e3e',
    '--suku-text-info': '#757575',
    '--suku-primary-border-color': '#a7bf2e',
    '--suku-default-border-color': '#e2e2e2',
    '--suku-secondary-border-color': '#757575',
    '--suku-primary-border-radius': '0 40px 0 0',
    '--suku-secondary-border-radius': '0px 0px 41px 41px',
    '--suku-search-border-radius': '10px 18px 18px 16px',
    '--suku-default-border-radius': '0px',
    '--suku-default-button-border-radius': '28px 76px 63px',
    '--suku-star-empty-bg': '#e1e1e1',
    '--suku-star-full-bg': 'rgb(137, 137, 137)',
    '--suku-star-size': '16px',
    '--suku-filter-bg': '#ffffff',
    '--suku-default-bg': '#ffffff',
    '--suku-filter-label': '#b6b6b6',
    '--suku-filter-label-selected': 'black',
    '--suku-progressbar-active-bg': '#a7bf2e',
    '--suku-progressbar-upcoming-bg': '#757575',
    '--suku-progressbar-completed-bg': '#1c1c1c',
    '--suku-profile-bg-color': '#b6b6b6',
    '--suku-profile-text-one': '#dcd8d8f0',
    '--suku-profile-text-two': '#504e4e',
    '--suku-font-size-1': '11px', // 0.75rem
    '--suku-font-size-2': '12px', // 0.875rem
    '--suku-font-size-3': '14px', // 1.0625rem
    '--suku-font-size-4': '15px', // 1.0625remm
    '--suku-font-size-5': '17px', // 1.25rem
    '--suku-font-size-6': '20px', // 1.5rem
    '--suku-font-size-7': '22px', // 1.625rem
    '--suku-font-size-8': '24px', // 1.625rem
    '--suku-font-size-9': '26px', // 1.875rem
    '--suku-font-size-10': '30px', // 1.875rem
    '--suku-font-size-11': '50px'  // 1.875rem
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
    '--suku-warning-color': '#FF0000',
    '--suku-bg-primary': '#363b4e',
    '--suku-bg-secondary': '#272727',
    '--suku-bg-ternary': '#35393e',
    '--suku-homepage-bg': '#ffffff',
    '--suku-button-default-bg': '#303030',
    '--suku-button-disabled-bg': '#d9d9d9',
    '--suku-icon-disabled-color': '#7f7f7f',
    '--suku-default-icon-color': '#b6b6b6',
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
    '--suku-default-button-border-radius': '28px 76px 63px',
    '--suku-search-border-radius': '10px 18px 18px 16px',
    '--suku-star-empty-bg': '#e1e1e1',
    '--suku-star-full-bg': 'rgb(137, 137, 137)',
    '--suku-star-size': '20px',
    '--suku-filter-bg': 'black',
    '--suku-filter-label': '#b6b6b6',
    '--suku-filter-label-selected': '#ffffff',
    '--suku-progressbar-inprogress-bg': '#a7bf2e',
    '--suku-progressbar-upcoming-bg': '#757575',
    '--suku-progressbar-completed-bg': '#1c1c1c',
    '--suku-font-size-1': '0.75rem', // 12px	- 0.75rem
    '--suku-font-size-2': '0.875rem', // 14px	0.875rem
    '--suku-font-size-3': '1.06rem', // 17px	1.0625rem
    '--suku-font-size-4': '1.25rem', // 20px	1.25rem
    '--suku-font-size-5': '1.5rem', //  24px	1.5rem
    '--suku-font-size-6': '1.625rem', // 26px	1.625rem
    '--suku-font-size-7': '1.8rem', //  30px	1.875rem
    '--suku-font-size-8': '2rem', //  32px	1.875rem
    '--suku-font-size-10': '3rem', // 30px	1.875rem
    '--suku-font-size-11': '3.5rem'  // 50px	1.875rem
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
    '--suku-warning-color': '#FF0000',
    '--suku-bg-primary': '#a6c36f',
    '--suku-bg-secondary': '#282828',
    '--suku-bg-ternary': '#35393e',
    '--suku-homepage-bg': '#ffffff',
    '--suku-button-default-bg': '#303030',
    '--suku-button-disabled-bg': '#d9d9d9',
    '--suku-icon-disabled-color': '#7f7f7f',
    '--suku-default-icon-color': '#b6b6b6',
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
    '--suku-default-button-border-radius': '28px 76px 63px',
    '--suku-search-border-radius': '10px 18px 18px 16px',
    '--suku-filter-bg': 'black',
    '--suku-filter-label': '#b6b6b6',
    '--suku-filter-label-selected': '#ffffff',
    '--suku-progressbar-active-bg': '#a7bf2e',
    '--suku-progressbar-upcoming-bg': '#757575',
    '--suku-progressbar-completed-bg': '#1c1c1c',
    '--suku-font-size-1': '0.75rem', // 12px	- 0.75rem
    '--suku-font-size-2': '0.875rem', // 14px	0.875rem
    '--suku-font-size-3': '1.06rem', // 17px	1.0625rem
    '--suku-font-size-4': '1.25rem', // 20px	1.25rem
    '--suku-font-size-5': '1.5rem', //  24px	1.5rem
    '--suku-font-size-6': '1.625rem', // 26px	1.625rem
    '--suku-font-size-7': '1.8rem', //  30px	1.875rem
    '--suku-font-size-8': '2rem', //  32px	1.875rem
    '--suku-font-size-10': '3rem', // 30px	1.875rem
    '--suku-font-size-11': '3.5rem'  // 50px	1.875rem
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
