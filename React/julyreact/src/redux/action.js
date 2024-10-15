export const increment =()=>{
    return {
        type: 'INCREMENT',
    }
}
export const decrement =()=>{
    return {
        type: 'DECREMENT'
    }
}

export const setBackgroundColor =(color)=>{
    return {
        type: 'SET_BACKGROUND_COLOR',
        payload: color
    }
}