import React, {Component} from 'react'; //importação do react
import { View,Text,StyleSheet,Button } from 'react-native'; //importação do react native

export default class PrimeiroProjeto extends Component{

  somar(n1,n2){
    return n1+n2;
  }
  render(){ //renderediza os componentes na tela

    let nome = 'Marcelo';
    return(
      <View>
        <Text>Olá Mundo {nome}</Text>
        <Text>Olá Mundo</Text>
        <Text>Olá Mundo</Text>
        <Text style={style.texto}>A soma de 2+2 é {this.somar(2,2)}</Text>
        <Button title="Aperte" onPress={()=>{
          alert("Me apertou");
        }} />
        <Button title="Aperte Novamente" onPress={()=> alert("Me apertou novamente")}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  texto:{
    fontSize:30
  }
})