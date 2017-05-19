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

ReactDOM.render(<Editor />, document.getElementById('root'));
