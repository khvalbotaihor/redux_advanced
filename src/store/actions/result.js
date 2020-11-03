import  * as actionTypes from "./actionTypes";

export const saveResult = (res) => {
    const updatedResult = res*2;
    return {
        type: actionTypes.STORE_RESULT,
        result: updatedResult
    }
}

export const store_result = (res) => {
    return (dispatch,getState) => {
        setTimeout(() => {
/*            const oldCounter = getState().ctr.counter;
            console.log(oldCounter)*/
            dispatch(saveResult(res))
        }, 2000);
    }
}

export const delete_result = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    }
}