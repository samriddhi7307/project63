import * as React from 'react';
import {Text,View,StyleSheet}from 'react-native';

 class AppHeader extends React.Component{
  render(){
  return(
    <View style = {styles.button}>
    <Text style = {styles.buttonText}>Pocket Dictionary </Text>
    </View>
  )
}
 }


 const styles=StyleSheet.create({
  button:{backgroundColor:'purple'},
  buttonText:{
     marginTop:0,
    color:'white',
    width:500,
    padding:10,
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center'
  }
 });
 
 export default AppHeader;