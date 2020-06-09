import React,{Component} from 'react'
import './AddPerson.css'

class AddPerson extends Component{

    state={
        name:'',
        age:''
    }

    addHandlername=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    
    addHandlerage=(event)=>{
        this.setState({
            age:event.target.value
        })
    }


    render(){
        return (
            <div className="AddPerson">
                <input type="text" placeholder="Name" onChange={this.addHandlername} value={this.state.name}/><br/>
              <input type="number" placeholder="Age" onChange={this.addHandlerage} value={this.state.age}/><br/>
                <button onClick={()=>this.props.addperson(this.state.name,this.state.age)}>Add Person</button>
            </div>
        )
    }
    
    
}

export default AddPerson