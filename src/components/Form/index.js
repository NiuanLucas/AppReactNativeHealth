import React, {useState} from "react"
import { View, Text, TextInput, Button, Vibration, TouchableOpacity} from "react-native"
import ResultIMC from "./ResultIMC/";
import styles from "./style";


export default function Form(){

const[height, setHeight]= useState(null)
const[weight, setWeight]= useState(null)
const[messageIMC, setMessageIMC]= useState("Preencha o peso e altura")
const[IMC, setIMC]= useState(null)
const[textButton, setTextButton]= useState("Calcular")
const[errorMessage, setErrorMessage]= useState(null)

function imcCalculator(){
    return setIMC((weight/(height * height)).toFixed(2))
}

function verificationIMC(){
    if(IMC == null){
        Vibration.vibrate();
        setErrorMessage("Campo Obrigatorio*")
    }
}

function validationIMC(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageIMC("Seu IMC é igual: ")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
        return
    }
    verificationIMC()
    setIMC(null)
    setTextButton("Calcular")
    setMessageIMC("Preencha o peso e altura.")
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex. 68.360" keyboardType="numeric"></TextInput>
                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationIMC()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
            </View> 
            <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC} ></ResultIMC> 
        </View>

    );
}