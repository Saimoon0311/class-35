import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import Home from './src/screens/Home'
// import Contact from './src/screens/contact'
// import About from './src/screens/About'
import Navigation from './src/config/Navigation'
import { StyleSheet, Text, View , Image ,ImageBackground,ActivityIndicator, TextInput,Button,TouchableOpacity,ScrollView , FlatList} from 'react-native';
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

export default function App() {
  return (
    <Navigation />

    // <View>
    //   <Text>Hello</Text>
    // </View>

//    // <ScrollView>
// //     <View style={styles.container}>
// // <ImageBackground style={{width:"100%",height:"100%"}} source={{uri:"https://i.pinimg.com/736x/84/75/42/84754248cc698bc0bcf96f76d568933f.jpg"}}>
// //   <Text style={{fontSize:44,color:"white",marginTop:100}}>Saimoon Ahmed</Text>
// //   <ActivityIndicator size="large" color="white" />
// // </ImageBackground>
// {/* 
//     <View style={styles.main1}>
//     <Text style={styles.text}>Header</Text>
//     </View>
//         <View style={styles.main2}>
//           <View style={styles.boxes}>
//             <View style={styles.item}>
//             <Text>Item</Text>
//         </View>
//                     <View style={styles.item}>
//         <Text>Item</Text>
//         </View>
//                     <View style={styles.item}>
//         <Text>Item</Text>
//         </View>
//             <View style={styles.item}>
//         <Text>Item</Text>
//         </View>
//             <View style={styles.item}>
//         <Text>Item</Text>
//         </View>
//             <View style={styles.item}>
//         <Text>Item</Text>
//         </View>
//         </View>
//         </View>
//             <View style={styles.main3}>
//             <Text style={styles.text}>Footer</Text>
//             </View> */}








//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       {/* <StatusBar style="auto" /> */}
//       {/* <Image source={{uri:'data:image/jpeg;base64,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'}} 
//        style={{width:200,height:200 , resizeMode:'contain'}} />

//              <Image source={require('./assets/download.jpg')} 
//        style={{width:200,height:200 , resizeMode:'contain'}} /> */}

// {/* <TextInput keyboardType={"number-pad"} onChangeText={(text)=>console.log(text)} style={{height:40,bordercolor:'gray',borderwidth:1}}
//  placeholder="Enter value"/> */}

// {/* <TextInput keyboardType={"email-address"} onChangeText={(text)=>console.log(text)} style={{height:40,bordercolor:'gray',borderwidth:1}}
//  placeholder="Enter value"/> */}


// {/* <TextInput secureTextEntry={true} keyboardType={"email-address"} onChangeText={(text)=>console.log(text)} style={{height:40,bordercolor:'gray',borderwidth:1}}
//  placeholder="Enter value"/> */}


// {/* <Button style={styles.btn} title={"Click me"} onPress={()=>alert("Hy")}/> */}

// {/* <TouchableOpacity onPress={()=>alert("Hy")} activeOpacity={0.8} style={styles.button}>
// <Text style={styles.brntext}> Click me </Text>
// </TouchableOpacity> */}



// {/* {[1,2,3,4,5,6,7,8,9,10].map((v,i)=>{
//   return(
//     <View style={styles.card}>
//     <Text style={{fontSize:32}}>Saimoon Ahmed</Text>
//     </View>

//   )
// })} */}



// {/* <FlatList
//         data={DATA}
//         renderItem={(data)=>{
//           return(
//           <View style={styles.card}>
//           <Text style={{fontSize:32}}>{data.item.title}</Text>
//           </View>
//           )
//         }}
//         keyExtractor={item => item.id}
//       /> */}


    

//     // </View>

//     // {/* </ScrollView> */}

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
// main1:{
//     flex: 1,
//     backgroundColor: 'blue',
//     width:"100%"
// },
// main2:{
//     flex: 8,
//     backgroundColor: 'green',
//     width:"100%"
// },
// main3:{
//     flex: 1,
//     backgroundColor: 'purple',
//     width:"100%"
// },
// text:{
// fontSize:50,
// color:"white",
// alignItems:"center"
// },
// boxes:{
//   flex: 1,
// marginTop:10,
// flexDirection:"row",
// justifyContent:"space-around",
// flexWrap:"wrap",
// // alignContent:"flex-end",
// alignContent:"center",
// },
// item:{
//   backgroundColor:"#fff",
//   width:100,
//   height:100,
//   marginBottom:10,
// }
//   button:{
// backgroundColor:"purple",
// width:"80%",
// height:40,
// justifyContent :'center',
// alignItems:'center'
//   },
//   brntext:{
// color:"white",
// fontSize:25,
//   }
card:{
  backgroundColor:"white",
  width:"80%",
  height:200,
  justifyContent:"center",
  alignItems:"center",
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
}
});
