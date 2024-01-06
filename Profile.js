import { Button, Card, Chip } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as React from "react";
import { Badge } from "@rneui/base";
import StatusCard from './StatusCard';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default Profile = ({navigation, route}) => {

  const [cards,setCards] = React.useState(route.params)
  React.useEffect(()=>{
    console.log("SDSSSSSSSSSSSSSSSSSSSSSSSSSSS")
    navigation.navigate('Profile', route.params);
  })

  const [refresh, setRefresh] = React.useState(1)

  const refreshpage = () =>{
    setRefresh(prev=>!prev)
  }
  console.log(cards)

  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={{flexDirection:"row", justifyContent:"space-evenly", width:"100%"}}>
        <Button
              title="Outline Button"
              buttonStyle={{
                borderColor: 'rgba(78, 116, 289, 1)',
                backgroundColor:'rgba(255, 193, 7, 1)',
                borderRadius:20
              }}
              type="solid"
              titleStyle={{ color: 'black' }}
              containerStyle={{
                marginTop:30,
                marginBottom:20
              }}
              onPress={() =>
                navigation.navigate('Donate', cards)
              }
            ><Icon name="gift-outline" size={50} color={"white"}/></Button>

        <Button
              title="Outline Button"
              buttonStyle={{
                borderColor: 'rgba(78, 116, 289, 1)',
                backgroundColor:'rgba(255, 193, 7, 1)',
                borderRadius:20
              }}
              type="solid"
              titleStyle={{ color: 'black' }}
              containerStyle={{
                marginTop:30,
                marginBottom:20
              }}
              onPress={() =>
                refreshpage()
              }
            ><Icon name="refresh" size={50} color={"white"}/></Button>
        </View>
        

        {route.params.map((scard, index) => (
          <StatusCard
          key={scard.tags}
          title={scard.title}
          badges={scard.tags}
          chipTitle={scard.status}
          imageurl={scard.imageurl}
          address={scard.address}
          ></StatusCard>
        ))}
        
        
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
  }
});
