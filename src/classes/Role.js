import lobo from '../images/lobo.webp';
import cacador from '../images/cacador.webp';
import medico from '../images/medico.webp';
import cartomante from '../images/cartomante.webp';
import jester from '../images/jester.webp';
import prefeito from '../images/prefeito.webp';
import vila from '../images/vila.webp';


export class Role {
  constructor(name, description, img) {
    this.name = name;
    this.description = description;
    this.img = img;
  }
}

// Roles to show in the cards
export const roles_to_show = [
  new Role("Lobo", "Decida quem matar durante a noite!", lobo),
  new Role("Caçador", "Você possui um tiro!", cacador),
  new Role("Médico", "Você possui uma cura!", medico),
  new Role("Cartomante", "Você escolhe a carta de um jogador para ver!", cartomante),
  new Role("Jester", "Você tem que fazer a vila te votar durante o dia!", jester),
  new Role("Prefeito", "Você pode se revelar, quando você faz isso seu voto vale como 2!", prefeito),
  new Role("Vila", "Você faz parte da vila, tente descobrir quem são os lobos!", vila)
]


// A basic set of Roles to play the game
export const basic_game_roles = [
  new Role("Lobo", "Decida quem matar durante a noite!", lobo),
  new Role("Lobo", "Decida quem matar durante a noite!", lobo),
  new Role("Caçador", "Você possui um tiro!", cacador),
  new Role("Médico", "Você possui uma cura!", medico),
  new Role("Cartomante", "Você escolhe a carta de um jogador para ver!", cartomante),
  new Role("Jester", "Você tem que fazer a vila te votar durante o dia!", jester),
  new Role("Prefeito", "Você pode se revelar, quando você faz isso seu voto vale como 2!", prefeito),
  new Role("Vila", "Você faz parte da vila, tente descobrir quem são os lobos!", vila),
  new Role("Vila", "Você faz parte da vila, tente descobrir quem são os lobos!", vila)
]