import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    contextImc:{
        flex:1,
        marginTop:20,
        paddingTop:15,
        alignItems:'center',
        width:'100%',
    },
    resultImc:{
        flex:1,
        marginTop:0,
        paddingTop:10,
        borderRadius:50,
        alignItems:'center',
        width:'100%',
    },
    numberImc:{
        fontSize:48,
        color:'#ff0043',
        fontWeight:'bold',
    },
    information:{
        fontSize:18,
        color:'#ff0043',
        fontWeight:'bold',
    },
    boxShareButton:{
        width:'100%',
        alignItems:'center',
        marginTop:0,
        marginBottom:10,
    },
    shared:{
        backgroundColor:'#1877f2',
        borderRadius:50,
        paddingBottom:5,
        paddingTop:5,
    },
    sharedText:{
        color:'#fff',
        fontWeight:'bold',
        paddingHorizontal:30,
    }
});

export default styles