import logo from './img/suggbox.png';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Suggest a change for our team environment!</p>
      </header>
        <body className="App-body">
          <p className="body-item">
            <SuggestionForm />
          </p>
          <p className="body-item">
          <img src={logo}  id="suggboximg" alt="suggestion box"/>
          </p>
        </body>
    </div>
  );
}

class SuggestionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 'Please write something'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    //Use this function to handle submissions
    alert('Something was written: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
