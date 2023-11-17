import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listado'
})
export class ListadoPipe implements PipeTransform {

  transform(listado: any[], page: number = 0, search: string = ''): any[] {
    
    if(search.length === 0)
      return listado.slice(page, page + 10);
    const filteredEquipos = listado.filter(equipo => equipo.team.name.includes(search) 
    || equipo.team.country.includes(search)
    );

    return filteredEquipos.slice(page, page+10);
  }

}
