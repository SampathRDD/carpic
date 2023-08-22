import { StyleSheet } from "react-native";
import fonts from "../../constants/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
        },
    text: {
        fontFamily: fonts.poppinsRegular,
        color: "black",
        fontSize: 20,
        fontWeight: "500"
        },
    header: {
        width: "100%",
        height: 80,
        alignItems: "left",
        justifyContent: "center",
        marginLeft: 20
        },
    headerText: {
        fontFamily: fonts.poppinsRegular,
        fontSize: 20,
        fontWeight: "500",
        color: "#000"
        },
    headerImageView: {
        width: "100%",
        height: 150,
        alignItems: "center",
        justifyContent: "center"
        },
    headerImage: {
        width: 150,
        height: 150,
        resizeMode: "contain"
        },
    scrollView: {
        width: "100%",
        alignItems: "center",
        },
    historycontainer: {
        width: "95%",
        height: 80,
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        shadowColor: "red",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
        },
    historyImage: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        borderRadius:40,
        marginRight: 10,
        marginLeft: 10
        },
    h1: {
        width: "50%",
        height: 60,
        marginLeft: 10
        },
    h2: {
        width: "20%",
        height: 60,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center"
        },
        Datetext:{
            fontFamily: fonts.poppinsRegular,
            fontSize:14,
            color:'#000',
            marginTop:8
        },
        locationtext:{
            fontSize:18,
            fontFamily: fonts.poppinsRegular,
            color:'#000',
            marginTop:8,
            fontWeight:'600'
        },
        locationIcon:{
            width:50,
            height:50,
            resizeMode:'contain',
            marginLeft:10
        }





});