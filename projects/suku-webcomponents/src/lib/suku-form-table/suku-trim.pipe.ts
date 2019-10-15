import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'trim' })
export class SukuTrimPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }
    console.log(value);
    return value.replace(/\s/g, '');
  }
}
