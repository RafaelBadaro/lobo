import lobo from '../images/lobo.webp';
import cacador from '../images/cacador.webp';
import medico from '../images/medico.webp';
import cartomante from '../images/cartomante.webp';
import loboimg from '../images/lobo.webp';

class Role {
    constructor(name, description, img) {
      this.name = name;
      this.description = description;
      this.img = img;
    }
  }

  export const roles = [
    new Role("Lobo", "Decida quem matar durante a noite!", lobo),
    new Role("Caçador", "Você possui um tiro!", cacador), 
    new Role("Médico", "Você possui uma cura!", medico),
    new Role("Cartomante", "Você escolhe a carta de um jogador para ver!", cartomante)

]