import React, {Component} from "react";
import Cronometro from "./assets/Cronometro.png";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      timerRodando: false
    }
    this.timer = null;
    this.comecar = this.comecar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  comecar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null
      let state = this.state;
      state.timerRodando = false;
      this.setState(state);
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        state.timerRodando = true;
        this.setState(state);
      },100);
    }
    }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      let state = this.state;
      state.timerRodando = false;
      this.setState(state);
    }
    this.setState({
      numero: 0
    })

  }
  render(){
    return(
      <>
      <div className="container">

        <img src={Cronometro} className="img-cronomete" />
        <div className="cronometer">
        <a className="number-cronometer">{this.state.numero.toFixed(1)}</a>
        </div>

        <div className="button-component">
          <button className="button" onClick={() => this.comecar()}>{this.state.timerRodando ? "Pausar" : "Começar"}</button>
          <button className="button" onClick={()=>this.limpar()}>Limpar</button>
        </div>

      </div>
      </>
    )
  }
}

export default App;