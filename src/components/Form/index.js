import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from 'react-native'
import ResultImc from './ResultImc/'
import styles from './style'

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [mensageImc, setMensageImc] = useState('Preencha o peso e a altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator(){
        let heightFormat = height.replace(',','.')
        let totalImc = (weight/(heightFormat * heightFormat)).toFixed(2)
        setImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc}])
        setImc(totalImc)
    }

    function verificationImc(){
        if(height == null && weight != null){
            Vibration.vibrate()
            setErrorMessage('Preencha o valor da altura!')
        }else if(weight == null && height != null){
            Vibration.vibrate()
            setErrorMessage('Preencha o valor do peso!')
        }else if(weight == null && height == null){
            Vibration.vibrate()
            setErrorMessage('Preencha todos os campos!')
        }
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMensageImc('Seu IMC é igual:')
            setTextButton('Calcular novamente')
            setErrorMessage(null)
        }else{
            verificationImc()
            setImc(null)
            setTextButton('Calcular')
            setMensageImc('Preencha o peso e a altura')
        }
    }

    return(
        <View style={styles.formContext}>
            { imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
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
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TouchableOpacity 
            style={styles.buttonCalculator} 
            onPress={()=>{
                validationImc()
            }}> 
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
            </Pressable>
            : 
            <View style={styles.exhibitionResultImc}>
                <ResultImc mensageResultImc={mensageImc} resultImc={imc}/>
                <TouchableOpacity 
                    style={styles.buttonCalculator} 
                    onPress={()=>{
                        validationImc()
                    }}> 
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
            </View>
            }
            <FlatList showsVerticalScrollIndicator={false} style={styles.listImcs} data={imcList.reverse()} renderItem={({item}) =>{
                return(
                    <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                        {item.imc}
                    </Text>
                )
            }}
            keyExtractor={(item) =>{
                item.id
            }}/>
        </View>
    )
}