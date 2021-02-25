import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import AppHeader from './components/AppHeader';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

getWord=(word)=>{
  var searchKeyWord = word.toLowerCase()
  var url = "https://rupinwhitehatjr.github.io/dictionary/"+ searchKeyWord +".json"
  return fetch(url)
  .then((data)=>{
    if(data.status===200){
     return data.json();
    }
    else{
      return null
    }
  })
  .then((response)=>{
    var responseObject = response 

    if(responseObject){
      var wordData = responseObject.definitions[0]

      var definition = wordData.description
      var lexicalCategory = wordData.wordtype
      
      this.setState({
        "word":this.state.text,
        "definition":definition,
        "lexicalCategory":lexicalCategory
      })
    }
    else{
      this.setState({
        "word":this.state.text,
        "definition":"Not Found",
      })
    }
  })
}

  constructor(){
    super();
    this.state = {
      text: ''
    };
  }

  render(){
  return (
    <View style={styles.container}>

       <AppHeader/>

      <StatusBar style="auto" />
      
      <TextInput style={{ height: 40, borderColor: 'black', borderWidth: 3 ,marginTop:100}}
      onChangeText={text =>this.setState({text:text,
        isSearchedPressed:false,
        word:"Loading...",
        lexicalCategory:"",
        examples:[],
        definition:""
      })}
      value={this.state.text}
     />

<TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ isSearchedPressed: true });
            this.getWord(this.state.text)
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
      <Text style={{fontSize:25,color:'yellow',fontWeight:'bold'}}>Word:{""}</Text>
       <Text style={{fontSize:20}}> {this.state.word}</Text>
       </View>
      
       <View style={{flexDirection:'row',flexWrap:'wrap'}}>
         <Text style={{fontSize:25,color:'yellow',fontWeight:'bold'}}> Type:{""} </Text>
         <Text style={{fontSize:20}}>{this.state.lexicalCategory}</Text>
         </View>
      
      <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        <Text style={{fontSize:25,color:'yellow',fontWeight:'bold'}}>
          Definition:{""}
          </Text>   
          <Text style={{fontSize:20}}> {this.state.definition} </Text>
      </View>
    </View>

    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5b4b9',
    alignItems:'center',
    width:1536
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  image:{
    width:150,
    height:150,
    marginLeft:100,
    marginTop:30
  },
  chunkButton:{
    width:200,
    height:60,
    borderWidth:5,
    marginLeft:60,
    margin:10,
    backgroundColor:'darkblue',
    borderRadius:30
  }
});