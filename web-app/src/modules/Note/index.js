import React from 'react';
import { connect } from 'react-redux';

import { search, load, create, update } from './actions';
// import AppActions from '../../app/actions';
// import * as Utils from '../../utils';

import SearchBox from '../../components/SearchBox';
import VSpace from '../../components/VSpace';
import Box from './Box';

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

  handleNoteChange = ({type, payload}) => {
    if (type === 'update') {
      this.props.update(payload);
    }
  }

  componentWillMount() {
    this.handleLoad();
  }

  render() {
    const { list, data } = this.props;

    return (
      <div className="container">
        <SearchBox style={{ paddingTop: 10 }} onSearch={this.handleSearch} />

        <div style={{ textAlign: "center" }}>
          <button style={{ width: 200 }} type="button" className="btn btn-primary"><strong>+</strong></button>
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