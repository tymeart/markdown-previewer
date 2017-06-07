import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
  }

  render() {
    return (
      <div>
        <Editor />
        <Preview />
      </div>
    );
  }
}

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
       <p></p>
      </div>
    );
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root'));
