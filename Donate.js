import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '@rneui/themed';
import * as React from "react";
import { Badge, Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from 'react';



  
export default Donate = ({navigation, route}) => {
  const [address,setAddress] = useState(" ")
  const [food, setFood] = useState("")
  const [inputText, setInputText] = useState('');
  const [enteredTexts, setEnteredTexts] = useState([]);
  const [phone, setPhone] = useState("")

  const handleAddText = () => {
    if (inputText.trim() !== '') {
      setEnteredTexts([...enteredTexts, inputText.trim()]);
      setInputText('');
    }
  };

  const cards = route.params

  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <View style={styles.inputbox}>
      <Input
        containerStyle={{color:"white"}}
        disabledInputStyle={{ background: "#ddd"}}
        inputContainerStyle={{}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{color:"white"}}
        label="Pickup Address"
        multiline
        numberOfLines={3}
        value={address}
        labelStyle={{}}
        labelProps={{}}
        leftIcon={<Icon name="home" size={20} style={{color:"white"}}/>}
        leftIconContainerStyle={{}}
        rightIcon={<Button type='clear' onPress={()=>{setAddress("")}}><Icon name="close" size={20} style={{color:"white"}}/></Button>}
        rightIconContainerStyle={{}}
        placeholder="Pulimootil house                                       Kochi"
        onChangeText={(event)=>{
          setAddress(event)
        }}      
        />
    </View>

    <View style={styles.inputbox}>
      <Input
        containerStyle={{color:"white"}}
        disabledInputStyle={{ background: "#ddd"}}
        inputContainerStyle={{}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{color:"white"}}
        label="Food"
        value={food}
        labelStyle={{}}
        labelProps={{}}
        leftIcon={<Icon name="food" size={20} style={{color:"white"}}/>}
        leftIconContainerStyle={{}}
        rightIcon={<Button type='clear' onPress={()=>{setFood("")}}><Icon name="close" size={20} style={{color:"white"}}/></Button>}
        rightIconContainerStyle={{}}
        placeholder="Vegetables"
        onChangeText={(event)=>{
          setFood(event)
        }}      
        />
    </View>

    <View style={styles.badgebox}>
        <Input
            containerStyle={{width:100, flex:1}}
            style={{}}
            value={inputText}
            label="Ingredients/Components"
            inputStyle={{color:"white", marginTop:5}}
            placeholder="Chicken"
            onChangeText={(text) => setInputText(text)}
        />
        <Button title="Add" containerStyle={{width:100, alignSelf:"center"}} buttonStyle={{width:90}} onPress={handleAddText} />
    </View>
    <View style={{flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'flex-start', marginTop:-20}}>
{enteredTexts.map((badge, index) => (
          <Badge
            key={index}
            badgeStyle={{ height: 30, borderRadius: 20 }}
            containerStyle={{ marginVertical: 10, marginHorizontal:5 }}
            status="primary"
            textProps={{}}
            textStyle={{ color: '#EFE', margin: 2 }}
            value={badge}
            options={{}}
          />
        ))}
    </View>

    <View style={styles.inputbox}>
      <Input
        containerStyle={{color:"white"}}
        disabledInputStyle={{ background: "#ddd"}}
        inputContainerStyle={{}}
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{color:"white"}}
        label="Phone Number"
        value={phone}
        keyboardType='numeric'
        labelStyle={{}}
        labelProps={{}}
        leftIcon={<Icon name="food" size={20} style={{color:"white"}}/>}
        leftIconContainerStyle={{}}
        rightIcon={<Button type='clear' onPress={()=>{setPhone("")}}><Icon name="close" size={20} style={{color:"white"}}/></Button>}
        rightIconContainerStyle={{}}
        placeholder="9846026437"
        onChangeText={(event)=>{
          setPhone(event)
        }}      
        />
    </View>




    

    
    



        <Button 
            title="Submit Details" 
            size="lg"
            buttonStyle={{
                backgroundColor: '#f9bd2e',
                borderRadius: 5,
            }}
            titleStyle={{
                color: '#252525',
            }}
            onPress={() =>{
              const k = {
                title:food,
                tags:enteredTexts,
                status:"To Collect",
                imageurl:{
                  uri:
                    'https://t3.ftcdn.net/jpg/03/98/61/96/360_F_398619615_g8iqFtDWH5gsKjE16H6iNQ6h8BhywuFS.jpg',
                },
                address:address
              }
              cards.push(k)
              console.log("SDsdfs")
              console.log(cards)
              navigation.navigate('Profile', cards)
          }
            }
        />
        <StatusBar style="auto" />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b374b',
    
  },
  content:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputbox:{
    width:"100%",
    marginVertical:10,
  },
  badgebox:{
    width:"100%",
    marginVertical:10,
    flexDirection:"row",
    justifyContent:"space-between",
  }
});
