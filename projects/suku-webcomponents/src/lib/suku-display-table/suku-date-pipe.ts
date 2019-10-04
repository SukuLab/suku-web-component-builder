import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'dateLocale', pure: false })
export class DateLocaleFilter implements PipeTransform {

  constructor(public translate: TranslateService, private datePipe: DatePipe) { }

  transform(value: string, dateFormat: string) {
    const dateFormatKey = dateFormat;
    if (value == '-') {
      return value;
    }
    if (dateFormatKey) {
      const currentLang = this.translate.currentLang; // get current language
      if (currentLang && dateFormatKey) {
        let returnConvertedValue;
        this.translate.get(dateFormatKey).subscribe((text: string) => {
          if (text) {
            const formattedValue = this.datePipe.transform(value, text);
            returnConvertedValue = formattedValue;
          }
        });
        return returnConvertedValue;
      }
    } else {
      return value;
    }
  }
}
