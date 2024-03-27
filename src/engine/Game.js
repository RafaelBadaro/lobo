import { basic_game_roles } from '../classes/Role'

import { Player } from '../classes/Player'
/*
    O minimo pra ter um jogo é:

    2 lobos
    1 caçador
    1 medico
    1 cartomante
    1 jester
    1 prefeito
    2 vilas

    TOTAL: 9 pessoas
*/

// TODO - deixar o jogo ser customizavel no futuro

// Creates temp array to play
const game_roles = basic_game_roles

export const players = [
    new Player("zezin1", null, "player"), // 0
    new Player("zezin2", null, "player"), // 1
    new Player("zezin3", null, "player"), // 2
    new Player("zezin4", null, "player"), // 3
    new Player("zezin5", null, "player"), // 4
    new Player("zezin6", null, "player"), // 5
    new Player("zezin7", null, "player"), // 6
    new Player("zezin8", null, "player"), // 7
    new Player("zezin9", null, "player"), // 8
]