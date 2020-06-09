import React, { Component } from 'react'
import {connect} from 'react-redux'
import Person from '../components/Person'
import AddPerson from '../components/AddPerson'


class Persons extends Component {
    render() {
        return (
            <div>
                
                <AddPerson addperson={this.props.onAddPerson}/>
                {this.props.per.map(p=>(
                    <Person key={p.id} 
                    name={p.name}
                    age={p.age}
                    persons={this.props.per}
                    clicked={()=>this.props.onDeletePerson(p.id)}/>
                ))}
            </div>
        )
    }
}

export default connect(state=>{
    return{
        per:state.persons
    }
},dispatch=>{
    return {
        onAddPerson:(name,age)=>dispatch({type:'ADD' ,name:name,age:age}),
        onDeletePerson:(id)=>dispatch({type:'DELETE',resultid:id})
    }
})(Persons)