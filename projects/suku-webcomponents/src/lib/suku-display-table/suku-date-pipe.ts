import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
// import moment from 'moment';

@Pipe({ name: 'dateLocale', pure: false })
export class DateLocaleFilter implements PipeTransform {

  constructor(public translate: TranslateService, private datePipe: DatePipe) { }

  transform(value: string, dateFormat: string) {
    const dateFormatKey = dateFormat;
    if (value == '-') {
      return value;
    }
    if (dateFormatKey) {
      // const currentLang = this.translate.currentLang; // get current language
      // console.log('currentLang from pipe', value, currentLang);
      // if(currentLang && dateFormatKey) {
      //   // const returnValue = this.translate.translations[currentLang][dateFormatKey];
      //  const returnValue = this.getTranslatedTxt(dateFormatKey);
      //  let formatKey;
      //   returnValue.then(val => { 
      //    console.log('returnValueTxt', val);
      //    formatKey = val;
      //    return val;
      //   });
      //   if(formatKey) {
      //     console.log('value from pipe', value, formatKey);
      //     const formattedValue = this.datePipe.transform(value , formatKey);
      //     return formattedValue;
      //   }
      // } 
    } else {
      return value;
    }
  }

  getTranslatedTxt(key): Promise<any> {
    if (key) {
      return new Promise((resolve, reject) => {
        this.translate.get(key).subscribe((text: string) => {
          console.log('text', text);
          resolve(text);
        });
      });
    } else {
      return key;
    }
  }

}
