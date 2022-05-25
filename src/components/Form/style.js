import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },

    form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
    },

    formLabel:{
        color:"#000000",
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttonCalculator: {
        borderRadius: 50,
        alignContent: "center",
        justifyContent:"center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingBottom: 14,
        paddingTop: 14,
        marginLeft: 12,
        marginTop: 30,
    },

    textButtonCalculator: {
       fontSize: 20,
       color : "#ffffff",
       textAlign: 'center', 
    },

    errorMessage: {
        fontSize: 12,
        color : "red",
        fontWeight: 'bold',
        paddingLeft: 20,
    },

    exhibitionResultIMC: {
        width: "100%",
        height: "50%",
    },

    listIMC: {
        marginTop: 15,
        flex : 1, 
        flexGrow :1
    },

    resultIMCItem: {
        fontSize: 28,
        color: "#ff0043",
        height: 50,
        width: "100%",
        paddingRight: 20,
    },

    textResultItemList: {
        fontSize: 16,
        color: "ff0043",

    }

   });

export default styles

