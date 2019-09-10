import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'keys' })
export class SukuKeysPipe implements PipeTransform {
  transform(value): any {
    const keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}
