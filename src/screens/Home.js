import React from 'react';
import { StyleSheet, Text, View , Image ,ImageBackground,ActivityIndicator, TextInput,Button,TouchableOpacity,ScrollView , FlatList} from 'react-native';



function Home (props){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:32}}>
                Home
            </Text>
            <Button onPress={()=>props.navigation.navigate ('About',{name:"Saimoon ahmed"})} title="Go To About"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
flex:1,
backgroundColor:"white",
// alignItem:"center",
justifyContent:"center"
    }
})

export default Home;