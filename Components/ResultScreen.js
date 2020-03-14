import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, Dimensions} from 'react-native';

const ResultScreen = ({navigation}) =>{
    const result = navigation.getParam('result');
    const backColor = navigation.getParam('backColor');
    const tosy = navigation.getParam('tosy');


    return(
        <View style={{flex:1, backgroundColor:`${backColor}`}}>
        <StatusBar barStyle="light-content"/>
        
            <View style={styles.resulter}>
                <Text style={{fontSize:35}}>YOUR RESULT</Text>
                <Text style={{fontSize:50, fontWeight:'900'}}>{result}</Text>
                <Text style={{fontSize:18, color:'black', fontWeight:'500'}}>{tosy}</Text>
            </View>

            <View style={styles.placeOfImage}>
                <Image
                    source={require('../../assets/end.png')}
                    style={{width:264.195, height: 169.615, zIndex:-1, position:'absolute', bottom:0, alignSelf:'flex-end'}}
                 />




            </View>

            <TouchableOpacity
                 onPress={()=> navigation.navigate('index')} 
                 style={styles.bottom}>
                    <View style={styles.buttonCalculate}>
                        <Text style={{color:'#627EDC', fontSize:20, marginTop:15}}>CALCULATE AGIN</Text>
                    </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    placeOfImage:{
        flex:1,
        justifyContent:'flex-end'
    },
    resulter:{
        alignSelf:'center',
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end'
    },
    buttonCalculate:{
        backgroundColor:'white',
        alignSelf:'center',
        alignItems:'center',
        width: Dimensions.get('window').width-30,
        height:55,
        borderRadius:7,
        bottom:25,
    },
});
export default ResultScreen;
