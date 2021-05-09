import React, {Component,} from 'react';
import globalstyles from '../assets/globalstyles';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import profilebutton from '../assets/images/profilebutton.png';
import XDate from 'xdate';

import financesicon from '../assets/images/financesicon.png';
import habitsicon from '../assets/images/habitsicon.png';
import mealsicon from '../assets/images/mealsicon.png';
import moodicon from '../assets/images/moodicon.png';
import periodicon from '../assets/images/periodicon.png';
import watericon from '../assets/images/watericon.png';
import calendaricon from '../assets/images/calendaricon.png';
import tasksicon from '../assets/images/tasksicon.png';
import eventsicon from '../assets/images/eventsicon.png';
import goalsicon from '../assets/images/goalsicon.png';

interface Props{
  navigation:any
}

class Dashboard extends React.Component<Props,any> {
  constructor(props: any | Readonly<any>) {
    super(props)
    this.state = {
      name: '',
      date: '',
      activities:[habitsicon,periodicon,watericon,mealsicon,moodicon,financesicon],
    }
  }

  componentDidMount(){
    setInterval(() => {
        this.setState({
          date : new XDate().toString('dddd, MMMM, d'),
        })
      }, 1000)
  }
  
  render(){return(
    <View style= {globalstyles.frame}>
      <View style= {styles.main}>
        <View style= {globalstyles.header}>
          <TouchableOpacity>
            <Image source= {{uri:profilebutton}} style = {{resizeMode:'contain', height:'15px', width:'15px'}}/>
          </TouchableOpacity>
        </View>
        <View style= {styles.title}>
          <Text style= {globalstyles.headerTextRaisin}>Welcome,</Text>
          <Text style= {{fontFamily:'Poppins', fontSize:20, fontWeight:'bold', color:'#757081'}}>Danphuong</Text>
        </View>
        <Text style= {{fontFamily:'Poppins', fontWeight:'400', color:'#757081', fontSize:12, marginTop:'3px', marginLeft:'30px'}}>{this.state.date}</Text>
        <Text style= {{fontFamily:'Poppins', fontWeight:'bold', color:'#757081', fontSize:14, marginTop:'15px', marginLeft:'30px'}}>My Activities</Text>
        <View style= {{marginHorizontal:'10px', flexDirection:'row', marginTop:'18px', justifyContent:'space-evenly'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('My Habits')}>
            <Image source= {{uri:this.state.activities[0]}} style= {styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('My Period')}>
            <Image source= {{uri:this.state.activities[1]}} style= {styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('My Water')}>
            <Image source= {{uri:this.state.activities[2]}} style= {styles.icon}/>
          </TouchableOpacity>
        </View>
        <View style= {{marginHorizontal:'10px', flexDirection:'row', marginTop:'20px', justifyContent:'space-evenly'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('My Meals')}>
            <Image source= {{uri:this.state.activities[3]}} style= {styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('My Moods')}>
            <Image source= {{uri:this.state.activities[4]}} style= {styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('My Budget')}>
            <Image source= {{uri:this.state.activities[5]}} style= {styles.icon}/>
          </TouchableOpacity>
        </View>
        <View style= {styles.upcomingBody}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:'15px',marginTop:'14px', width:'250px'}}>
            <Text style={{fontFamily:'Poppins', color:'#FAF6F6', fontSize:13}}>UPCOMING</Text>
            <Image source= {{uri:calendaricon}} style= {{resizeMode:'contain', height:'17px', width:'17px'}}/>
          </View>
          <TouchableOpacity style={styles.upcomingLine} onPress={()=>this.props.navigation.navigate('My Tasks')}>
            <View style={{flexDirection:'row'}}>
              <Image source={{uri:tasksicon}} style= {styles.upcomingIcon}/>
              <Text style={styles.upcomingDetails}>To complete</Text>
            </View>
            <Text style={styles.upcomingCount}><Text style={{fontSize:30, fontWeight:'600'}}>3 </Text>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.upcomingLine} onPress={()=>this.props.navigation.navigate('My Events')}>
            <View style={{flexDirection:'row'}}>
              <Image source={{uri:eventsicon}} style= {styles.upcomingIcon}/>
              <Text style={styles.upcomingDetails}>Total Planned</Text>
            </View>
            <Text style={styles.upcomingCountEvents}><Text style={{fontSize:30, fontWeight:'600'}}>5 </Text>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.upcomingLine} onPress={()=>this.props.navigation.navigate('My Goals')}>
            <View style={{flexDirection:'row'}}>
              <Image source={{uri:goalsicon}} style= {styles.upcomingIcon}/>
              <Text style={styles.upcomingDetails}>Total to Complete</Text>
            </View>
            <Text style={styles.upcomingCount}><Text style={{fontSize:30, fontWeight:'600'}}>3 </Text>Goals</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )}
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:'#FAF6F6', 
    height:'100%',
    width:'100%',
    borderRadius:20
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
  upcomingBody:{
    borderBottomLeftRadius:10, 
    borderBottomRightRadius:10,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    backgroundColor:'#757081',
    marginTop:'40px',
    marginBottom:'5px',
    marginHorizontal:'10px',
    width:'95%',
    alignSelf:'center'
  },
  upcomingLine:{
    width:'250px',
    flexDirection:'row',
    marginTop:'5px',
    alignSelf:'center',
    flex:1,
    justifyContent:'space-between'
  },
  upcomingDetails:{
    fontFamily:'Poppins',
    color:'white',
    textAlignVertical:'center',
    width:'60px',
    fontSize:10,
    alignSelf:'center',
  },
  upcomingIcon:{
    height:'26px',
    width:'26px',
    margin:'8px',
  },
  upcomingCount:{
    fontFamily:'Poppins',
    textAlignVertical:'center',
    alignSelf:'flex-end',
    color:'white',
    marginRight:'5px'
  },
  upcomingCountEvents:{
    fontFamily:'Poppins',
    textAlignVertical:'center',
    alignSelf:'flex-end',
    color:'white',
    marginRight:'-2px'
  }
})

export default Dashboard;