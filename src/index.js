import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.convertText = this.convertText.bind(this);
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  convertText() {
    let rawMarkup = marked(this.state.input, {sanitize: true});
    return {__html: rawMarkup};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Editor input={this.state.input} handleInput={this.handleInput}/>
          <Preview convertText={this.convertText}/>
        </div>
      </div>
    );
  }
}

const Header = () => {
  return (
    <h1 className="heading">Markdown Previewer</h1>
  );
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <textarea rows="30" cols="70" placeholder="Type Markdown here!" onChange={this.props.handleInput} value={this.props.input} />
      </form>
    );
  }
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="preview" dangerouslySetInnerHTML={this.props.convertText()} />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));
