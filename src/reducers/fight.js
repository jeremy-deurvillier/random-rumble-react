import { createSlice } from '@reduxjs/toolkit'

const monster = {
    name: "Monster",
    pv: 800,
    pvMax: 800,
    id: 1
}

const players = {
    1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
    3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
    4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
}

const fightSlice = createSlice({
    name: 'monster',
    initialState: {
        monster,
        players
    },
    reducers: {
        hit: (state, action) => {
            state.monster.pv -= action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { hit } = fightSlice.actions

export const fightReducer = fightSlice.reducer