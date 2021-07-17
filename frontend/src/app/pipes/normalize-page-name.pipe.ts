import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizePageName'
})
export class NormalizePageNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'employee':
        return 'Empleado';
      default:
        return 'Home';
    }
  }

}
