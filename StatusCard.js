import { Card, Chip, Dialog } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as React from "react";
import { Badge } from "@rneui/base";

const StatusCard = ({ title, badges, chipTitle, imageurl, address="" }) => {

  const [visible, setVisible] = React.useState(0)

  const toggleVisible = ()=>{
    setVisible(!visible)
  }

  return (
<Card containerStyle={{borderRadius:10, width:350}}>
<Card.Title style={{fontSize:20}}>{title}</Card.Title>
<Card.Divider />
<Card.Image
  style={{ padding: 0, height:200 }}
  source={imageurl}
/>
<View style={{flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'flex-start'}}>
{badges.map((badge, index) => (
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
<Card.Divider />
<Dialog
      isVisible={visible}
      onBackdropPress={toggleVisible}
      overlayStyle={{backgroundColor:"white"}}
    >
      <Dialog.Title title="Address"/>
      <Text>{address}</Text>
    </Dialog>
{chipTitle=="Collected" &&
    <Chip
    title={chipTitle}
    buttonStyle={{backgroundColor:"#66AF4F"}}
    onPress={toggleVisible}
  />
}
{chipTitle=="To Collect" &&
    <Chip
    title={chipTitle}
    buttonStyle={{backgroundColor:"#34A0FE"}}
    onPress={toggleVisible}
  />
}
{chipTitle=="Failed to Collect" &&
    <Chip
    title={chipTitle}
    buttonStyle={{backgroundColor:"#c24002"}}
    onPress={toggleVisible}
  />
}

</Card>
  );
};

export default StatusCard;
