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
    this.props.load({ username });
  }

  handleSearch = (text) => {
    let username = this.props.auth.owner;
    this.props.search({
      username: username,
      keyword: text
    });
  }

  handleAddBox = () => {
    this.setState({ creatingBox: true });
  }

  handleNoteChange = ({ type, payload }) => {
    if (type === 'update') {
      this.props.update(payload);
    }
  }

  handleBoxCreateDialog = ({ type, payload }) => {
    if (type === 'create') {
      this.props.create(payload);
    }

    this.setState({ creatingBox: false });
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
          <button type="button" className="btn" onClick={this.handleAddBox}
          >
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="#007bff" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          </button>
        </div>

        <VSpace />
        { list.map((id, i) =>
          <Box key={i}
            theme={'text-white bg-info'}
            model={data[id]}
            onChange={this.handleNoteChange}
          />
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
  { load, search, create, update }
)(Note);