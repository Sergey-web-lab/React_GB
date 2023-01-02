import * as types from './types'

const initialState = {
    name: 'Batman',
    isAuth: false
}

export const profileReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.CHANGE_NAME:
            return {
                ...state,
                name: payload
            }
        case types.TOGGLE_NAME:
            return {
                ...state,
                name: payload
            }
        case types.IS_AUTH:
            return {
                ...state,
                visible: payload
            }
        default:
            return state
    }
}