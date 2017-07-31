import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      output: e.target.value
    });
  }

  convertText() {
    let rawMarkup = marked(this.state.output, {sanitize: true});
    return {__html: rawMarkup};
  }

  render() {
    return (
      <div className="container">
        <form>
          <textarea rows="30" cols="70" placeholder="Type Markdown here!" onChange={this.handleInput}/>
        </form>

        <div className="preview" dangerouslySetInnerHTML={this.convertText()}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));
