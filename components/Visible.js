import React from 'react';
import { connect } from 'react-redux';

class Visible extends React.Component {
  constructor (props) {
    super(props)
    this.store = this.props.store;
    this.state = {
      visible: 1
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    console.log("this is working");
  }

  render() {
    return(
      <div>
      <p>Here is the visibility of NE {this.store.getState().nevisible}</p>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
   nevisible: state.nevisible
});

export default connect(mapStateToProps)(Visible);
