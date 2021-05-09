import { StyleSheet } from 'react-native';
import { BrowserView, MobileView, isMobile, isMacOs } from "react-device-detect";

const globalstyles = StyleSheet.create({
  frame:{
    minHeight: (isMobile ? '100vh' : '649px'),
    minWidth:(isMobile? '100vw' : '300px'),
    alignSelf:'center',
    marginVertical:(isMobile?0:'20px'),
    shadowColor:(isMobile?'white':'black'),
    shadowRadius:(isMobile? 0:10),
    backgroundColor:'white',
    borderRadius:20,
  },
  headerTextBlackCherry:{
    fontFamily: 'Poppins',
    fontSize:16,
    fontWeight:'400',
    color:'#7C768B',
    textAlignVertical:'center',
  },
  headerTextCultured:{
    fontFamily: 'Poppins',
    fontSize:16,
    fontWeight:'400',
    textAlignVertical:'center',
    color:'#FAF6F6'
  },
  headerTextRaisin:{
    fontFamily: 'Poppins',
    fontSize:16,
    fontWeight:'400',
    textAlignVertical:'center',
    color:'#757081'
  },
  header:{
    marginLeft:'25px',
    marginTop:'20px',
    height:'15px',
    flexDirection:'row',
  },
  backbutton:{
    resizeMode:'contain', 
    height:'15px', 
    width:'15px',
    marginTop:'6px',
    marginRight:'15px'
  },
  addbutton:{
    resizeMode:'contain', 
    height:'20px', 
    width:'20px',
    marginTop:'2px',
    marginLeft:'115px'
  }
})

export default globalstyles;