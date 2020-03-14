import React, { useState } from 'react';
import {View, Slider, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';

const index = ({navigation}) =>{
    const [changerHeight, setChangerHeight] = useState( 0);
    const [changerWeight, setChangerWeight] = useState( 0);

    const [backColor, setBackColor] = useState('white');
    const [tosy, setTosy] = useState('');

    // const [result, setResult] = useState( 0);
    //function for Calculate BMI 
    const calculateUserBMI = (changerHeight, changerWeight) =>{

        if(changerHeight==0|| changerWeight==0) alert('Plz Enter Height and Weight');

        else{

            const result =  changerWeight / Math.pow(changerHeight, 2);
            const final = result.toFixed(1);
            console.log(final)

            if(final<=18.5){
                navigation.navigate('ResultScreen', {backColor:'#4FF8FE'});
                navigation.navigate('ResultScreen', {tosy: "Eat more pies"});
            }
            if(final>18.5 && result<=24.9){
                    navigation.navigate('ResultScreen', {backColor:'#84E88E'});
                    navigation.navigate('ResultScreen', {tosy: "Fit as a fiddle"});
            }
            if(final >=25.9 && final < 29.9){
                    navigation.navigate('ResultScreen', {backColor:'#DC88B0'});
                    navigation.navigate('ResultScreen', {tosy: "Eat less pies"});
            }
            if(final >=29.9){
                navigation.navigate('ResultScreen', {backColor:'#E80D0D'});
                navigation.navigate('ResultScreen', {tosy: "Eat less than pies"});
        }

            navigation.navigate('ResultScreen', {result: final});
        }
           

    }

    return(
        <View style={{flex:1, flexDirection:'column'}}> 
            <View style={styles.mainContainer}>
                <Image
                    source={require('../../assets/mainImg.png')}
                    style={{width:528.39, height: 339.23, zIndex:-1}}
                 />
                 <Text style={styles.testTxt}>CALCULATE</Text>
                 <Text style={styles.testTxt2}>
                   YOUR BMI
                 </Text>

                {/* for height */}

                <View style={styles.heightSection}>

                    <View style={styles.heightSection1}>
                        <Text style={{color:'gray', fontSize:18}}>Height</Text>
                        <Text style={{color:'gray', fontSize:18}}>{changerHeight.toFixed(2)}M</Text>
                    </View>

                    <Slider
                        step={ 0.01 }
                        minimumValue = { 1 }
                        maximumValue = { 3 }
                        minimumTrackTintColor = "#4251D6"
                        onValueChange = {(changeNumber) => setChangerHeight(changeNumber)} 
                        style = {styles.sliderChanger} 
                    />
                </View>

                  {/* for height */}
                <View style={styles.weightSection}>

                    <View style={styles.heightSection1}>
                        <Text style={{color:'gray', fontSize:18}}>Weight</Text>
                        <Text style={{color:'gray', fontSize:18}}>{changerWeight}Kg</Text>
                    </View>

                    <Slider
                        step={ 1 }
                        minimumValue = { 10 }
                        maximumValue = { 200 }
                        minimumTrackTintColor = "#4251D6"
                        onValueChange = {(changeNumber) => setChangerWeight(changeNumber)} 
                        style = {styles.sliderChanger} 
                    />
                </View>
                
            </View>
            

            <TouchableOpacity
                 onPress={()=>calculateUserBMI(changerHeight, changerWeight)} 
                 style={styles.bottom}>
                    <View style={styles.buttonCalculate}>
                        <Text style={{color:'white', fontSize:20, marginTop:15}}>CALCULATE</Text>
                    </View>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'column'
    },
    testTxt:{
        fontSize:30,
        marginHorizontal:25,
        marginTop:-120,
        fontWeight:'bold'
    },
    testTxt2:{
        fontSize:30,
        marginHorizontal:25,
        fontWeight:'bold'
    },
    heightSection:{
        flexDirection:'column',
        marginHorizontal:10,
        justifyContent:'space-between',
        marginTop:100
    },
    heightSection1:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal:20,
        marginBottom:20
    },
    weightSection:{
        flexDirection:'column',
        marginHorizontal:10,
        justifyContent:'space-between',
        marginTop:50
    },
    buttonCalculate:{
        backgroundColor:'#627EDC',
        alignSelf:'center',
        alignItems:'center',
        width: Dimensions.get('window').width-30,
        height:55,
        borderRadius:7,
        position: 'absolute',
        bottom:0,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40,
      }
});
export default index
