import React from 'react';
import { connect } from 'react-redux';

import { search, load, create, update } from './actions';
// import AppActions from '../../app/actions';
// import * as Utils from '../../utils';

import SearchBox from '../../components/SearchBox';
import VSpace from '../../components/VSpace';
import Box from './Box';
import BoxCreateDialog from './BoxCreateDialog';

// const THEMES = [
//   "bg-light",
//   "text-white bg-danger",
//   "text-white bg-secondary",
//   "text-white bg-success",
//   "text-white bg-primary",
//   "text-white bg-warning",
//   "text-white bg-info",
//   "text-white bg-dark"
// ];


class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creatingBox: false
    };
  }

  handleLoad = () => {
    let username = this.props.auth.owner;
    this.props.load({username});
  }

  handleSearch = (text) => {
    let username = this.props.auth.owner;
    this.props.search({
      username: username,
      keyword: text
    });
  }

  handleAddBox = () => {
    this.setState({creatingBox: true});
  }

  handleNoteChange = ({type, payload}) => {
    if (type === 'update') {
      this.props.update(payload);
    }
  }

  handleBoxCreateDialog = ({type, payload}) => {
    if (type === 'create') {
      this.props.create(payload);
    }

    this.setState({creatingBox: false});
  }

  componentWillMount() {
    this.handleLoad();
  }

  render() {
    const { list, data } = this.props;
    const { creatingBox } = this.state;

    return (
      <div className="container">
        <BoxCreateDialog open={creatingBox} onChange={this.handleBoxCreateDialog} />
        <SearchBox style={{ paddingTop: 10 }} onSearch={this.handleSearch} />

        <div style={{ textAlign: "center" }}>
          <button style={{ width: 200 }} type="button" className="btn btn-primary" onClick={this.handleAddBox} ><strong>+</strong></button>
        </div>

        <VSpace />
        { list.map((id, i) =>
          <Box key={i} model={data[id]} onChange={this.handleNoteChange} />
        )}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.note,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { load, search, create, update}
)(Note);