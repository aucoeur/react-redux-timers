import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTimer } from '../actions';

class NewTimer extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "" }
    }

    render() {
        //Build out a component that takes a name as input and a save button to save the timer
        return (
            <div>
                <input
                    type='text'
                    placeholder='New Timer Name'
                    name='name'
                    value={this.state.name}
                    onChange={ (e) => this.setState({ name: e.target.value })} />
                <button
                    onClick={ (e) => {
                        this.props.addTimer(this.state.name)
                    }}>Save</button>
            </div>
        )
    }
}
// Not needed for this component - used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state) => {
  return {}
}

// Use 'mapDispatchToProps' to connect the 'newTimer' action creator to this component. used for dispatching actions to the store. Here is a stub for the component:
const mapDispatchToProps = () => {
  return { addTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(NewTimer)