import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.bttn1 = this.bttn1.bind(this);
    this.bttn2 = this.bttn2.bind(this);
    this.bttn3 = this.bttn3.bind(this);

    this.state = {
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0,
    };
  }

  bttn1() {
    this.setState((estadoAnterior, _props) => ({
      clicksBtn1: estadoAnterior.clicksBtn1 + 1
    }), () => {
      console.log(`Botão 1: ${this.bttnColor(this.state.clicksBtn1)}`);
    });
  }
  
  bttn2() {
    this.setState((estadoAnterior, _props) => ({
      clicksBtn2: estadoAnterior.clicksBtn2 + 1
    }), () => {
      console.log(`Botão 2: ${this.bttnColor(this.state.clicksBtn2)}`);
    });
  }
  
  bttn3() {
    this.setState((estadoAnterior, _props) => ({
      clicksBtn3: estadoAnterior.clicksBtn3 + 1
    }), () => {
      console.log(`Botão 3: ${this.bttnColor(this.state.clicksBtn3)}`);
    });
  }

  bttnColor = (num) => num % 2 === 0 ? 'blue' : 'red';

  render() {
    const { clicksBtn1, clicksBtn2, clicksBtn3 } = this.state;
    return (
      <div className='botoes'>
        <button 
          onClick={ this.bttn1 }
          style={{ backgroundColor: this.bttnColor(clicksBtn1)}}
        >
          { clicksBtn1 }
        </button>
        <button 
          onClick={ this.bttn2 }
          style={{ backgroundColor: this.bttnColor(clicksBtn2)}}
        >
          { clicksBtn2 }
        </button>
        <button 
          onClick={ this.bttn3 }
          style={{ backgroundColor: this.bttnColor(clicksBtn3)}}
        >
          { clicksBtn3 }
        </button>
      </div>
    );
  }
}

export default App;
