import React, {Component,} from 'react';
import globalstyles from '../assets/globalstyles';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import '../index.css';

class Dashboard extends React.Component<{}, {sum: any}> {
  constructor(props: any | Readonly<any>) {
    super(props)
    this.state = {
      sum: 0,
    }
  }
  
  render(){return(
    <View style= {globalstyles.main}>
      <Text style= {globalstyles.headerText}>SUM</Text>
      <View style= {{flexDirection:'row'}}>
        <Text style= {styles.sub} onPress={()=>{this.setState({sum:this.state.sum - 1})}}>subtract</Text>
        <Text style= {globalstyles.headerText}> {this.state.sum} </Text>
        <Text style= {styles.add} onPress={()=>{this.setState({sum:this.state.sum + 1})}}>add</Text>
      </View>
    </View>
  )}
}

const styles = StyleSheet.create({
  sub:{
    fontFamily:'Poppins',
    color:'red',
    fontSize:10,
  },
  add:{
    fontFamily:'Poppins',
    color:'green',
    fontSize:10,
  }
})

export default Dashboard;