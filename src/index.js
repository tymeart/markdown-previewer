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

  handleInput = (e) => {
    this.setState({
      output: marked(e.target.value)
    });
  }

  render() {
    return (
      <div className="container">
        <form>
          <textarea rows="30" cols="70" placeholder="Type Markdown here!" onChange={this.handleInput}/>
        </form>

        <div className="preview">
          {this.state.output}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));
