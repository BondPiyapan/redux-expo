import { ACTION_ADD, ACTION_CLR, ACTION_REM } from "../Constants";

export const setStateToADD = () => ({
    type: ACTION_ADD,
})

export const setStateToREM = () => ({
    type: ACTION_REM,
})

export const setStateToCLR = (payload) => ({
    type: ACTION_CLR,
    payload

})

export const add = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(setStateToADD())
        }, 100)
    }
}

export const remove = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(setStateToREM())
        }, 100)
    }
}

export const clear = (payload) => {
    return dispatch => {
        dispatch(setStateToCLR(payload))
    }
}



