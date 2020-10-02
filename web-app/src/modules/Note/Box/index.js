import React from 'react';

let styles = {
  blockquote: {
    borderLeft: "solid lightgrey 5px",
    paddingLeft: 5,
    marginLeft: -10
  }
}

function Box({ theme = "" }) {
  return (
    <div className="card mb-3">
      <div className={`card-header ${theme}`}>
        Featured
        <span style={{ float: "right" }}>
          <button type="button" class={`btn btn-sm btn-link ${theme}`}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-share-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
            </svg>
          </button>
        </span>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-2" style={styles.blockquote}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
        <blockquote className="blockquote" style={styles.blockquote}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
      <div className="card-footer" style={{ padding: 0 }}>
        <div className="input-group">
          {/* <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" /> */}
          <textarea className="form-control" row="3"></textarea>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><strong>+</strong></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
