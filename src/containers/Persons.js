import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../store/actions';
 
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
 
class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.deletePerson(person.id)}/>
                    ))}
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        persons: state.persons
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: () => dispatch({ type: actionType.ADD_PERSON }),
        deletePerson: (id) => dispatch({ type: actionType.DELETE_PERSON, personId:id })
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Persons);