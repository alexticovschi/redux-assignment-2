import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {

    state = {
        name: '',
        age: ''
    }

    onNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    onAgeHandler = (event) => {
        this.setState({age: event.target.value});
    }

    render() {
        return (
            <div className="AddPerson">
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={this.onNameHandler}
                    value={this.state.name}/>
                <input 
                    type="number" 
                    placeholder="Age" 
                    onChange={this.onAgeHandler}
                    value={this.state.age}/>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
} 

export default AddPerson;