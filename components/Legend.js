import React from 'react';
import { connect } from 'react-redux';
import { IncreaseNEVisible, DecreaseNEVisible } from '../actions';

class Legend extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      neselected: 1,
      seselected: 1,
      nwselected: 1,
      swselected: 1
    }
    this.store = this.props.store;
    this.handleChange = this.handleChange.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }

  handleChange = (e) => {
    if (e.target.id === "neVisible") {
        this.setState({ neselected: !this.state.neselected});
        this.state.neselected ?  this.store.dispatch(DecreaseNEVisible()) : this.store.dispatch(IncreaseNEVisible()) ;
      } else if (e.target.id === "seVisible") {
        this.setState({ seselected: !this.state.seselected});
      } else if (e.target.id === "nwVisible") {
        this.setState({ nwselected: !this.state.nwselected});
      } else if (e.target.id === "swVisible") {
        this.setState({ swselected: !this.state.swselected});
      }
  }

  refreshPage() {
    window.location.reload();
  }

  render() {

    var isNESelected = this.state.neselected;
    var isSESelected = this.state.seselected;
    var isNWSelected = this.state.nwselected;
    var isSWSelected = this.state.swselected;

    return (
      <div className="legend_hldr">
        <h1>Legend</h1>
        <table width="270px">
          <tbody>
          <tr>
            <td>&nbsp;</td>
            <td className="hd">Hemisphere</td>
            <td className="hd">Count</td>
          </tr>
            <tr>
              <td className="check"><input type="checkbox" id="neVisible" checked={isNESelected} onChange={this.handleChange}/></td>
              <td className="ne">Northeast</td>
              <td className="count"><input type="text" readOnly value={this.store.getState().northeast}/></td>
            </tr>
            <tr>
              <td className="check"><input type="checkbox" id="seVisible" checked={isSESelected} onChange={this.handleChange} /></td>
              <td className="se">Southeast</td>
              <td className="count"><input type="text" readOnly value={this.store.getState().southeast}/></td>
            </tr>
            <tr>
              <td className="check"><input type="checkbox" id="nwVisible" checked={isNWSelected} onChange={this.handleChange} /></td>
              <td className="nw">Northwest</td>
              <td className="count"><input type="text" readOnly value={this.store.getState().northwest}/></td>
            </tr>
            <tr>
              <td className="check"><input type="checkbox" id="swVisible" checked={isSWSelected} onChange={this.handleChange} /></td>
              <td className="sw">Southwest</td>
              <td className="count"><input type="text" readOnly value={this.store.getState().southwest}/></td>
            </tr>
          </tbody>
        </table>

        <button onClick={this.refreshPage}>Reload Page</button>

        <p>Here is the visibility of NE {this.store.getState().nevisible}</p>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
        northeast: state.northeast,
        southeast: state.southeast,
        northwest: state.northwest,
        southwest: state.southwest,
        nevisible: state.nevisible
    };
}

export default connect(mapStateToProps)(Legend);
