import { createSlice } from '@reduxjs/toolkit'

const monster = {
    name: "Monster",
    pv: 800,
    pvMax: 800,
    id: 1
}

const baseDamage = 5

export const capacities = {
    ATK: { damage: baseDamage, pv: 0, mana: 0, cure: {pv: 0, mana : 0} },
    SATK: { damage: baseDamage * 2, pv: 0, mana: 5, cure: {pv: 0, mana : 0} },
    DEF: { damage: 0, pv: 3, mana: 0, cure: {pv: 2, mana : 5} },
    CURE: { damage: 0, pv: 0, mana: 15, cure: {pv: 15, mana : 0} }
}

const players = [
    { name: "John", pv: 10, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    { name: "Jack", pv: 10, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
    { name: "Jessy", pv: 10, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
]

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomInt(min = 0, max = 1) {
    const minInt = Math.ceil(min)
    const maxInt = Math.floor(max)

    return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt)
}

const fightSlice = createSlice({
    name: 'fight',
    initialState: {
        monster,
        players,
        deads: [],
        winner: '',
        gameTurn: []
    },
    reducers: {
        hitMonster: (state, action) => {
            const currentPlayer = state.players.filter(player => player.id === action.payload.id)[0]
            const otherPlayer = state.players.filter(player => player.id !== action.payload.id)
            const capacity = capacities[action.payload.data]

            state.monster.pv -= capacity.damage

            if (state.monster.pv < 0) state.monster.pv = 0

            // Calcul des coûts en pv et en mana.
            currentPlayer.pv -= capacity.pv
            currentPlayer.mana -= capacity.mana

            if (currentPlayer.pv < 0) currentPlayer.pv = 0
            if (currentPlayer.mana < 0) currentPlayer.mana = 0

            state.gameTurn.push(action.payload.id)

            // Soins pour les autres joueurs
            otherPlayer.map(player => {
                if (!state.deads.includes(player.id)) {
                    player.pv += capacity.cure.pv
                    player.mana += capacity.cure.mana

                    if (player.pv > player.pvMax) player.pv = player.pvMax
                    if (player.mana > player.manaMax) player.mana = player.manaMax
                }
            })
        },
        hitBack: (state, action) => {
            const damage = 5
            const currentPlayer = state.players.filter(player => player.id === action.payload.id)[0]

            currentPlayer.pv -= damage

            if (currentPlayer.pv <= 0) {
                currentPlayer.pv = 0
                state.deads = [...state.deads, action.payload.id]
            }

        },
        calculateWinner: (state, payload) => {
            const players = state.players

            if (state.monster.pv === 0) state.winner = 'Victoire !'
            if (state.deads.length === players.length) state.winner = 'Défaite !'
        },
        nextTurn: (state, action) => {
            const turn = state.gameTurn
            const players = state.players
            let playersAlives, index, currentPlayer, damage

            if (turn.length === players.length) {
                playersAlives = players.filter(player => player.pv > 0)
                if (playersAlives.length > 0) {
                    index = getRandomInt(0, playersAlives.length - 1)
                    currentPlayer = playersAlives[index]
                    damage = getRandomInt(0, 15)

                    currentPlayer.pv -= damage

                    if (currentPlayer.pv <= 0) {
                        currentPlayer.pv = 0
                        state.deads = [...state.deads, currentPlayer.id]
                    }
                }

                state.gameTurn = players.filter(player => player.pv <= 0)
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { hitMonster, hitBack, calculateWinner, nextTurn } = fightSlice.actions

export default fightSlice.reducer