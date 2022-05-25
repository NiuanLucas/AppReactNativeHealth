import React, {useState} from "react"
import { View, Text, TextInput, Button, Vibration, TouchableOpacity, Keyboard, Pressable, FlatList} from "react-native"
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 
import ResultIMC from "./ResultIMC/";
import styles from "./style";


export default function Form(){

const[height, setHeight]= useState(null)
const[weight, setWeight]= useState(null)
const[messageIMC, setMessageIMC]= useState("Preencha o peso e altura")
const[IMC, setIMC]= useState(null)
const[textButton, setTextButton]= useState("Calcular")
const[errorMessage, setErrorMessage]= useState(null)
const[IMCList, setIMCList] = useState([])

function imcCalculator(){
    let heightFormat = height.replace(",",".")
    let totalIMC = (weight/(height * height)).toFixed(2);
    setIMCList((arr) => [...arr, {id: new Date().getTime(), IMC:totalIMC }])
    setIMC(totalIMC)
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
            {IMC == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={styles.formLabel}> <MaterialCommunityIcons name="human-male-height" size={18} color="#ff0043" /> Altura </Text> 
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"></TextInput>
            <Text style={styles.formLabel}> <MaterialCommunityIcons name="weight"  size={18} color="#ff0043" /> Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex. 68.360" keyboardType="numeric"></TextInput>
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationIMC()}>
                    <Text style={styles.textButtonCalculator}>{textButton} </Text>
                </TouchableOpacity>
            </Pressable>
            :
            <View style={styles.exhibitionResultIMC}>
                <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC} ></ResultIMC> 
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationIMC()}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text> 
                </TouchableOpacity>
            </View>
            }

            <FlatList style={styles.listIMC} data={IMCList.reverse()} 
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>{
                return(
                    <Text style={styles.resultIMCItem}>
                        <Text style={styles.textResultItemList}> Resultado IMC anterior =  </Text>
                        {item.IMC}
                    </Text>
                )
            }}
            keyExtractor={(item) => {
                item.id
            }}
            >
            </FlatList>

        </View>
    );
}