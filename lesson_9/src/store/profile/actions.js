import * as types from '../profile/types'

export const auth = (auth) => ({
    type: types.IS_AUTH,
    payload: auth
})