import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import CustomSwitch from '../components/CustomSwitch';
import InputComp from '../components/InputComp';

export default function Initial({navigation}) {
  const [button, setButton] = useState(1);

  function LogSignButton({ButtonName, OnPress}) {
    return(
      <TouchableOpacity style={{height: 44, width: 225, borderRadius: 22, backgroundColor: "#FF0036", alignItems: 'center', justifyContent: 'center'}}
      onPress = {OnPress}>
      <Text style={{color: 'white', fontSize: 16}}>{ButtonName}</Text>
    </TouchableOpacity>    
    )
  }

  function SocialButtons({Icon, SocialPress}) {
    return(
      <TouchableOpacity style={{height: 47, width: 47, borderRadius: 30, borderWidth: 2, borderColor: "#EEEEF6", alignItems: 'center', justifyContent: 'center'}}
      onPress = {SocialPress}>
      <Image 
      source={Icon}
      resizeMode = "contain"
      style={{
        width: 25,
        height: 25
      }}
      />
    </TouchableOpacity>
    )
  }
  return (
    <View style={{backgroundColor: '#F7F6FF', flex: 1}}>
      <Header />

      <View
        style={{
          width: 315,
          height: 523,
          backgroundColor: 'white',
          position: 'absolute',
          borderRadius: 34,
          left: '10%',
          top: '17%',
          shadowColor: 'grey',
          elevation: 8,
        }}>
        <CustomSwitch
          selectionMode={1}
          option1="Log In"
          option2="Sign Up"
          onSelectSwitch={value => setButton(value)}
        />

        {
          button == 1 && 

          <View style={{paddingHorizontal: 27}}>

            <View style={{marginTop: 40}}>

              <InputComp Placeholder={"Enter email or username"} KType = "email-address"/>

              <InputComp Placeholder={"Password"}/>
              <TouchableOpacity style={{alignItems: 'flex-end', marginTop: 10, right: 10}}
              onPress = {()=> console.log("Forgot Password Pressed")}>
                <Text style={{color: '#A8A7A7'}}>Forgot Password?</Text>
              </TouchableOpacity>  

              <View style={{alignItems: 'center', marginTop: 90}}>
                <LogSignButton ButtonName={"Log In"} OnPress = {()=> navigation.navigate("Home")}/>
              </View>   

              <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={{color: '#A8A7A7', fontSize: 16}}>OR</Text>   
              </View>  

              {/* <View style={{alignItems: 'center'}}> */}
              <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>

                <View style={{right: 10}}>
                  <SocialButtons Icon={require("../assets/facebook.png")} SocialPress = {()=> console.log("Facebook Pressed")}/>
                </View>
                
                <View>
                 <SocialButtons Icon={require("../assets/twitter.png")} SocialPress = {()=> console.log("Twitter Pressed")}/>
                </View>
                
                <View style={{left: 10}}>
                  <SocialButtons Icon={require("../assets/google.png")} SocialPress = {()=> console.log("Google Pressed")}/>
                </View>
              {/* </View>   */}
              </View>
              
            </View>
          </View>
        }

        {
          button == 2 && 

          <View style={{paddingHorizontal: 27}}>

          <View style={{marginTop: 40}}>

            <InputComp Placeholder={"Enter email or username"} KType = "email-address"/>

            <InputComp Placeholder={"Password"}/>

            <InputComp Placeholder={"Confirm Password"}/>

            <View style={{alignItems: 'center', marginTop: 70}}>
              <LogSignButton ButtonName={"Sign Up"} OnPress = {()=> console.log("Signup Pressed")}/>
            </View>   

            <View style={{alignItems: 'center', marginTop: 20}}>
              <Text style={{color: '#A8A7A7', fontSize: 16}}>OR</Text>   
            </View>  

            {/* <View style={{alignItems: 'center'}}> */}
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>

              <View style={{right: 10}}>
                <SocialButtons Icon={require("../assets/facebook.png")} SocialPress = {()=> console.log("Facebook Pressed")}/>
              </View>
              
              <View>
               <SocialButtons Icon={require("../assets/twitter.png")} SocialPress = {()=> console.log("Twitter Pressed")}/>
              </View>
              
              <View style={{left: 10}}>
                <SocialButtons Icon={require("../assets/google.png")} SocialPress = {()=> console.log("Google Pressed")}/>
              </View>
            {/* </View>   */}
            </View>
            
          </View>
        </View>
        }
      </View>
    </View>
  );
}
