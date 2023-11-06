import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from '../redux/actions/action_types'

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

function reducer(state = initialState, {type,payload}){
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters:payload
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload
            }
        case FILTER:
            const filtered = state.allCharacters.filter(char => char.gender === payload  )
            return {
                ...state,
                myFavorites: payload === 'All' ? state.allCharacters : filtered
            }

        case ORDER:
            const orderCharacter = state.myFavorites.sort((a,b)=>{
                if(payload === 'ascendente') return a.id - b.id
                return b.id - a.id
            })
            return{
                ...state,
                myFavorites:[...orderCharacter]
            }
        default:
            return {...state}
    }
}

export default reducer;