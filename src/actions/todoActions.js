import database from '../firebase/firebaseConfigration'


export const addTodoToUi = (blog)=>{
    return dispatch=>{
        // dispatch({type:"ADD_TODO",payload:blog})
        console.log(blog)
    }
}

export const addTodoToDatabaseAction = (obj)=>{
    return dispatch=>{
        database.ref("blogs").push(obj)
            .then(res=>{
                console.log(res);
                const data = {
                    id: res.key,
                    ...obj
                }
                dispatch(addTodoToUi(data))
            })
    }
}