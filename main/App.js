import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

// Criando um estilo para a view usando StyleSheet
const styles = StyleSheet.create({
  borda: {
    height: 68,
    backgroundColor: '#363636'
  },
  topo: {
    height: 68,
    backgroundColor: '#363636',
  },
  meio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF'
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 20
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      senha: '',
      loggedIn: false
    }
    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if (this.state.nome === '' || this.state.senha === '') {
      alert('Digite seu nome e senha!');
      return;
    }
    this.setState({
      loggedIn: true
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.topo}> </View>
        <View style={styles.meio}>
          {!this.state.loggedIn ? (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                onChangeText={(texto) => this.setState({nome: texto})}
              />
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
                onChangeText={(texto) => this.setState({senha: texto})}
              />
              <Button title="Acessar" onPress={this.entrar}/>
            </View>
          ) : (
            <View>
              <Text style={styles.texto}>Bem-vindo, {this.state.nome}!</Text>
              <Image source={{ uri: 'https://uploads.metropoles.com/wp-content/uploads/2023/05/16120020/Border-Collie-2.jpg' }} style={styles.foto} />
            </View>
          )}
        </View>
        <View style={styles.borda}> </View>
      </View>
    )
  }
}

export default App;
