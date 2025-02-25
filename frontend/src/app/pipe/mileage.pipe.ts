import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mileage'
})
export class MileagePipe implements PipeTransform {

  transform(value: string | null): unknown {
    let stringNumber = value?.replace(',','');
    let toNumber = Number(stringNumber) || -1;
    let text = '';
    if(toNumber<0){
      text = 'No se han encontrado millas';
    }else if(toNumber===0){
      text = value+' <span class="bg-green-500">Nuevo</span>'
    }else if(toNumber<100000){
      text = value+' <span class="bg-blue-500">Km 0</span>'
    }else{
      text = value+' <span class="bg-yellow-500">Ocasión</span>'
    }
    return text;
  }

}
