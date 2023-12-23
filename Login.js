import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import * as React from "react";
import { Input, color } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from 'react';

export default Login = ({navigation, route}) => {
  const [username,setUsername] = useState(" ")
  const [cards,setCards] = React.useState([
    {
      title:"Vegetables",
      tags: ['Cucumber', 'Broccoli', 'Capsicum', 'Onion', "Cabbage", "Tomato"],
      status:"Collected",
      imageurl:{
        uri:
          'https://t3.ftcdn.net/jpg/03/98/61/96/360_F_398619615_g8iqFtDWH5gsKjE16H6iNQ6h8BhywuFS.jpg',
      },
      address:"ausksjha dh askdhaskdh kas dh"
    },
    {
      title:"Porotta & Beef",
      tags: ['Porotta', 'Beef', 'Gravy'],
      status:"To Collect",
      imageurl:{
        uri:
          'https://pbs.twimg.com/media/E3I2WNNVEAAqod4.jpg',
      },
      address:"ausksjha dh askdhaskdh kas dh"
    },
    {
      title:"Biriyani",
      tags: ['Chicken', 'Rice'],
      status:"Failed to Collect",
      imageurl:{
        uri:
          'https://i0.wp.com/www.fatimacooks.net/wp-content/uploads/2015/10/Leftover-Biryani.jpg?resize=960%2C750',
      },
      address:"ausksjha dh askdhaskdh kas dh"
    }
  ])
  return (
      <View style={styles.container}>
      <Input
        containerStyle={{color:"white"}}
        disabledInputStyle={{ background: "#ddd"}}
        inputContainerStyle={{}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{color:"white"}}
        label="Name"
        labelStyle={{}}
        labelProps={{}}
        leftIcon={<Icon name="account-outline" size={20} style={{color:"white"}} />}
        leftIconContainerStyle={{}}
        rightIcon={<Icon name="close" size={20} style={{color:"white"}} />}
        rightIconContainerStyle={{}}
        placeholder="Enter Name"
        onChangeText={(event)=>{
          setUsername(event)
        }}      
        />
        <Button 
            title="Login" 
            size="lg"
            buttonStyle={{
                backgroundColor: '#f9bd2e',
                borderRadius: 5,
            }}
            titleStyle={{
                color: '#252525',
            }}
            onPress={() =>
                navigation.navigate('Profile', cards)
            }
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b374b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
