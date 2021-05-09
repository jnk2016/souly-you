import React, {Component,} from 'react';
import globalstyles from '../../assets/globalstyles';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import backbutton from '../../assets/images/backiconcultured.png';
import addicon from '../../assets/images/addicon.png'

interface Props{
  navigation:any
}

class Period extends React.Component<Props,any> {
  constructor(props: any | Readonly<any>) {
    super(props)
    this.state = {
      name: '',
    }
  }
  
  render(){return(
    <View style= {globalstyles.frame}>
      <View style= {styles.main}>
        <View style= {globalstyles.header}>
          <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
            <Image source= {{uri:backbutton}} style = {globalstyles.backbutton}/>
          </TouchableOpacity>
          <Text style= {globalstyles.headerTextCultured}>My Period</Text>
        </View>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Edit Cycle')}}>
            <Text style={{marginTop:'20px'}}>Edit Cycle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Add Symptoms')}}>
            <Text>Add Symptoms</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('My Activity')}}>
            <Text>View My Activity</Text>
          </TouchableOpacity>
      </View>
    </View>
  )}
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:'#757081', 
    height:'98%',
    width:'97%',
    borderRadius:20,
    marginTop:'2%',
    alignSelf:'center',
  },
  title:{
    marginTop:'20px',
    marginLeft:'30px',
  },
  icon:{
    height:'102px',
    width:'85px',
    resizeMode:'contain',
  },
})

export default Period;