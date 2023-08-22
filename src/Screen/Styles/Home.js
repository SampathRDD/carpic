import { StyleSheet } from "react-native";
import {
  responsiveHeight as RH,
  responsiveWidth as RW,
  responsiveFontSize as RF,
  responsiveScreenHeight as SH,
  responsiveScreenWidth as SW,
  responsiveScreenFontSize as SF,
} from "react-native-responsive-dimensions";
    import colors from '../../constants/colors';
    import fonts from '../../constants/fonts';

export default StyleSheet.create({
  header:{
    height:SH(20),
},
logo:{
    width:RW(20),
    height:RW(20),
    marginLeft:RW(2),
    marginTop:RW(4),
},
profileView:{
    flexDirection:'row',
    position:'absolute',
    top:SW(4),
    marginLeft:SW(8),
},
profileText:{
    fontFamily:fonts.poppinsRegular,
    marginTop:SH(2.6),
    color:'black',
    marginLeft:SW(10),
    fontWeight:'400',
},
profile:{
    width:RW(14),
    height:RW(14),
    // borderRadius:RW(7),
    // borderWidth:1,
    // borderColor:colors.WHITE_COLOR
},
container:{
    width:SW(94),
    height:SH(50),
    marginHorizontal:SW(3),
    backgroundColor:colors.WHITE_COLOR,
    borderRadius:10,
    marginTop:SH(2),
    shadowColor: 'red',
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
},
text:{
    fontFamily:fonts.LOVE,
    textAlign:'center',
    color:colors.RED_COLOR,
    fontSize:SF(5),
    fontFamily:fonts.poppinsRegular,
},
tabButton:{
    backgroundColor:colors.MAIN_THEME_LIGHT,
    width:SW(45),
    height:SH(10),
    marginTop:SH(38),
    borderRadius:SW(2),
    marginHorizontal:SW(2)
},
banerContainer:{
    backgroundColor:colors.MAIN_THEME,
    width:SW(94),
    height:SH(20),
    marginVertical:SH(3),
    marginHorizontal:SW(3),
    marginBottom:SH(20),
    borderRadius:SW(2),
},
search:{
    width:SW(70),
    height:SH(5.5),
    color:colors.BLACK_COLOR,
    
},
searchBox:{
  width:SW(90),
    height:SH(5),
    backgroundColor:colors.WHITE_COLOR,
    borderRadius:SW(2),
    marginTop:SH(12),
    marginLeft:SW(5),
    paddingLeft:SW(2),
    fontFamily:fonts.poppinsRegular,
    fontSize:SF(3),
    color:colors.BLACK_COLOR,
    justifyContent:'left',
    flexDirection:'row',
    alignItems:'center',
},
searchIcon:{
    width:RW(6),
    height:RW(6),
    marginLeft:RW(2),
},
carImage:{
    width:SW(90),
    height:SH(30),
    resizeMode:'contain',
    marginTop:SH(1),
    marginBottom:SH(2),
    marginHorizontal:SW(2),
    borderRadius:SW(1),
},
carDetails:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:SW(7),
},
carName:{
    fontFamily:fonts.poppinsRegular,
    fontSize:SF(2.5),
    color:colors.BLACK_COLOR,
    marginTop:SH(1),
    marginLeft:SW(5),
    textAlign:'left',
    fontWeight:'600',
},
carPrice:{
    fontFamily:fonts.poppinsSemiBold,
    fontSize:SF(2),
    color:"gray",
},
carLocation:{
    fontFamily:fonts.poppinsRegular,
    fontSize:SF(2),
    color:"gray",
},
RatingIcon:{
    width:RW(5),
    height:RW(5),
    marginTop:SH(1),
},
carName2:{
  fontFamily:fonts.poppinsRegular,
    fontSize:SF(2.2),
    color:"black",
    fontWeight:'600',
}


    

});