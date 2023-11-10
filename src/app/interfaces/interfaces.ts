export interface User{
    username:string,
    password:string,
    firstName:string,
    lastName:string,
    email:string,
    city:string,
    state:string,
    country:string,
    startedDate:string,
    /**Equipo favorito, id del equipo favorito? */
    favoriteTeam:number,
    /**Agregar un rol al usuario, 1 si es un usario normal, 0 si es admin*/
    rol:number,
    id:number
}

export interface Countrie {
    code: string
    code3: string
    name: string
    number: string
}