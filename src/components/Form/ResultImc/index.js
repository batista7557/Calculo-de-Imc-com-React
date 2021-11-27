import React from 'react'
import { View, Text, TouchableOpacity, Share, Touchable } from 'react-native'
import styles from './style'

export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message:'Meu imc hoje é: ' +props.resultImc,
        })
    }

    return(
        <View style={styles.resultImc}>
            <View style={styles.boxShareButton}>
                {props.resultImc != null ?
                <TouchableOpacity 
                onPress={onShare}
                style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>
            <Text style={styles.information}>{props.mensageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    )
}