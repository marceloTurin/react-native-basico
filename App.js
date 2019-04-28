import React, {Component} from 'react'; //importação do react
import { View,Text,StyleSheet,Button,Image } from 'react-native'; //importação do react native


//Criação do Componente Imagem
class Imagem extends Component{

  render(){

    let imagem = {
      uri: 'https://external-preview.redd.it/qrdCK2NINpo9AJAbd_quODHAxtU7YZqxccGlQSzuAAM.png?auto=webp&s=fefa1c0aaeefbb52b96b9c94c2646e182d6ea332'
    }
    return(
      <Image source={imagem} style={{width:parseInt(this.props.largura),height:parseInt(this.props.altura)}} />
    );
  }
}

//Criação de uma State

//State é uma informação mutavel que pode ser mudada a partir de um determinavel momento
//Props é um informação estatica que não pode ser mudada
class Janta extends Component{
  constructor(props){
    super(props);
    this.state = {comida:props.comida};
    var comidas = ['Pizza','Lasanha','Hamburgue','Sopa','Arroz'];

    setInterval(()=>{
      this.setState(previousState =>{
        var n = Math.floor(Math.random() * comidas.length);

        return {comida: comidas[n]};
      })
    },1000)
  }

  render(){
    return(
      <View>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'red'}}>Hoje você vai jantar:</Text>
        <Text style={{textAlign:'center',fontSize:20}}>{this.state.comida}</Text>
      </View>
    )
  }
}

export default class PrimeiroProjeto extends Component{

 
  render(){ //renderiza os componentes na tela

   
    return(
      <View style={style.padrao}>
        <Janta comida='Bolacha'/>
        <Text style={style.azulGrade}>Este é o texto 1</Text>
        <Text style={style.vermelho}>Este é o texto 2</Text>
        <Text style={[style.azulGrade,style.vermelho]}>Este é o texto 3</Text>
        <Text style={[style.vermelho,style.azulGrade]}>Este é o texto 4</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({

  padrao:{
    paddingTop:25,
    backgroundColor: 'green'
  },
  azulGrade:{
    color:'blue',
    fontSize:30,
    textAlign: 'center'
  },
  vermelho:{
    color:'red',
    fontSize:15
  }
})