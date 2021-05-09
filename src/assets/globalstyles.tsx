import { StyleSheet } from 'react-native';
import { BrowserView, MobileView, isMobile, isMacOs } from "react-device-detect";

const globalstyles = StyleSheet.create({
  main:{
    minHeight: (isMobile ? '100vh' : '649px'),
    minWidth:(isMobile? '100vw' : '300px'),
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginVertical:'20px',
    shadowColor:(isMobile?'white':'black'),
    shadowRadius:(isMobile? 0:10),
    backgroundColor:'white',
  },
  headerText:{
    fontFamily: 'Poppins',
    fontSize:20,
  }
})

export default globalstyles;