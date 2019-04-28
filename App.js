import React, {Component} from 'react'; //importação do react
import { View,Text,StyleSheet,Button,Image } from 'react-native'; //importação do react native

export default class PrimeiroProjeto extends Component{

  somar(n1,n2){
    return n1+n2;
  }
  render(){ //renderediza os componentes na tela

    let imagem = {
      uri: 'https://img7.anidb.net/pics/anime/7810.jpg'
    }

    let nome = 'Marcelo';
    return(
      <View>
        <Text>Olá Mundo {nome}</Text>
        <Text style={style.texto}>A soma de 2+2 é {this.somar(2,2)}</Text>
        <Text style={{fontSize:25, color:'red',margin:20}}>Olá Mundo</Text>

       

        <Image source={imagem} style={{width:300,height:300}} />

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