import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import ResultImc from './ResultImc/'
import styles from './style'

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [mensageImc, setMensageImc] = useState('Preencha o peso e a altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    function imcCalculator(){
        return setImc((weight/(height * height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMensageImc('Seu IMC é igual:')
            setTextButton('Calcular novamente')
            return
        }
        setImc(null)
        setTextButton('Calcular')
        setMensageImc('Preencha o peso e a altura')
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex. 1.75'
                keyboardType='numeric'/>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 75.68'
                keyboardType='numeric'/>

            <TouchableOpacity 
            style={styles.buttonCalculator} 
            onPress={()=>{
                validationImc()
            }}> 
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
            </View>
            <ResultImc mensageResultImc={mensageImc} resultImc={imc}/>
        </View>
    )
}