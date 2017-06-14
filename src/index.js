import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {markdown: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    // this.setState({markdown: e.target.value});
    // return marked(this.state.markdown);
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="container">
        <Editor onChange={this.onInputChange}/>
        <Preview />
      </div>
    );
  }
}

class Editor extends React.Component {
  render() {
    return (
      <form>
        <textarea rows="30" cols="70" placeholder="Type Markdown here!"/>
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
