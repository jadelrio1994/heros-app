import { heros } from "../data/Heros";

export const getHeroById = ( id ) => {
  return heros.find(hero => hero.id === id)
}