import React, { useState } from 'react';
import {Alert, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderTop from '../Comman/ HeaderTop';

const ForgotPassword = (props) => {

const [email,setEmail] = useState ("nice7@yopmail.com")

const ForgotPasswordApi = () => {

fetch('http://3.7.0.131:3320/auth/forgot-password', {
method: 'POST',
headers: {
Accept: 'application/json',
'Content-Type': 'application/json',
},
body: JSON.stringify({
email:email,
}),
})

.then(response => response.json())
.then(json => {
 console.log("--------------",json);
 if (json.success === true) {
letUserData = {
Emailss:email,
tokenss:json.data.token,
type: "forget"
} 
 props.navigation.navigate("EmailVerifyS",{DataMove:UserData}) 
 }
 else {
Alert.alert("----no")

 }
})
.catch(error => {
console.error(error);
});

}

return (
<View style={{ flex: 1,}}>

<LinearGradient colors={['#2db1c9', '#4dd9f2']} style={{height:700,padding:10}}>
<HeaderTop 
Icon = 'Forgot Password'
/>

<View style={{alignSelf:'center',marginTop:15}}>

<Image style={{height:150,width:150,resizeMode:'contain'}} source={require('../assets/Image/Lock.png')}/>

</View>

<Text style={{fontSize:25,color:'white',textAlign:'center',marginTop:10}}>Enter your register email Address below to receive Password reset instruction</Text>

 <View style={{marginTop:20}}> 

<TextInput style={{backgroundColor:'#00B4C7',fontSize:22,borderRadius:10,paddingLeft:15,paddingVertical:20,}}
placeholder='Email Address'
placeholderTextColor={'white'}
onChangeText={(test) => setEmail(test)}
value={email}
/>
</View>

<TouchableOpacity onPress={()=> {ForgotPasswordApi()}}style={{backgroundColor:'#62D5CC',padding:15,borderRadius:30,marginTop:90,elevation:10}}>

<Text style={{fontSize:22,textAlign:'center',color:'white'}}>Send OTP</Text>
</TouchableOpacity>
</LinearGradient>

</View>
);
};

export default ForgotPassword; 

