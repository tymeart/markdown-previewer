import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Editor extends React.Component {
  render() {
    return (
      <form>
        <textarea rows="30" cols="70" placeholder="Type Markdown here!" />
      </form>
    );
  }
}

class Preview extends React.Component {
  render() {
    return (
      <div className="preview">
      </div>
    );
  }
}

ReactDOM.render(
  <div className="container">
    <Editor />
    <Preview />
  </div>,
  document.getElementById('root'));
