import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
  } from 'react-native';

import styles from './src/styles/index.js'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    };

    //Variavel do timer do relogio.
    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.timer != null){
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;

      this.setState({botao: 'Iniciar'});
    }else{

      //Comeca girar o timer
      this.timer = setInterval( ()=> {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);

      this.setState({botao: 'PAUSAR'});
    }

  }

  limpar(){
    if(this.timer != null){
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI'
    })
  }

  render(){
    return(
      <View style={styles.container}>  

      <Image
      source={require('./src/images/cronometro.png')}
      style={styles.cronometro}
      />

      <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={this.vai}>
          <Text style={styles.btnTexto}> {this.state.botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.limpar}>
          <Text style={styles.btnTexto}>PARAR</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? 'Último tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
          </Text>
      </View>


      </View>    
    );
  }

}

export default App;