

const initialState={
    persons:[]
}

const PersonReducer=(state=initialState,action)=>{
    if(action.type==='ADD'){
        return{
            ...state,
            persons:state.persons.concat({id:Math.random()*10,name:action.name,age:action.age})
        } 
    }
    if(action.type==='DELETE'){
        const updatedPerson=state.persons.filter(p=>p.id!==action.resultid)
        return{
            ...state,
            persons:updatedPerson
        }
    }
    return state
}

export default PersonReducer