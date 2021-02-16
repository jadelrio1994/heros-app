import { heros } from "../data/Heros"


export const getHerosMyName = ( name = '' ) => {

  if (name === '') {
    return [];
  }
  name = name.toLocaleLowerCase(); 
  return heros.filter(hero => hero.superhero.toLocaleLowerCase().includes( name ));
}