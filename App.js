import { useState } from 'react';
import { ActivityIndicator, Button, FlatList, Image, ScrollView, SectionList, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';


const flastListData =[ {id: 'cc001',name:'mobile'},{id: 'cc002',name:'web'},{id: 'cc003',name:'project'} ];
const sectionListData = [{title:'Group A',data:['Liverpool','Barcelona']},{title:'Group B',data:['Juventus','MuangThong']},];
const celebrities = [
  { id: '1', name: 'Brad', lastName: 'Pitt', nationality: 'American', age: 57 },
  { id: '2', name: 'Angelina', lastName: 'Jolie', nationality: 'American', age: 46 },
  { id: '3', name: 'Tom', lastName: 'Cruise', nationality: 'American', age: 59 },
  { id: '4', name: 'Jennifer', lastName: 'Aniston', nationality: 'American', age: 52 },
  { id: '5', name: 'Johnny', lastName: 'Depp', nationality: 'American', age: 58 },
  { id: '6', name: 'Leonardo', lastName: 'DiCaprio', nationality: 'American', age: 46 },
  { id: '7', name: 'Scarlett', lastName: 'Johansson', nationality: 'American', age: 36 },
  { id: '8', name: 'Natalie', lastName: 'Portman', nationality: 'Israeli', age: 40 },
  { id: '9', name: 'Hugh', lastName: 'Jackman', nationality: 'Australian', age: 52 },
  { id: '10', name: 'Emma', lastName: 'Watson', nationality: 'British', age: 31 },
];

export default function App() {
  const[isloading,setIsLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const[isEnable,setIsEnable] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Basic Component</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Image(uri):</Text>
      <Image 
      source={ {
        uri:"https://artofth.com/wp-content/uploads/2021/08/02-5-1170x658.jpg"}}
      style={styles.image}/>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Image(source):</Text>
        <TouchableOpacity>
        <Image source={require('./src/img/ghibi1.jpg')}
        style={styles.image}/>
        </TouchableOpacity>
      </View>
      <View
       style={styles.section}>
        <Text style={styles.header}>View:</Text>
        <View style={styles.view}></View>
       </View>
       <View style={styles.section}>
       <Text style={styles.header}>TextInput:</Text>
       <TextInput style={styles.input} placeholder='Type Something..'/>
       </View>
       <View style={styles.section}>
        <Text style={styles.title}>User Interface Components</Text>
       </View>
       <View style={styles.section}>
       <Text style={styles.header}>Button:{number}</Text>
       <Button title='Add' onPress={() => setNumber(number+1)}/> 
       <Button title='Del' color={'pink'} onPress={() => setNumber(number-1)}/>
       <Button title='Reset' color={'lightgreen'} onPress={() => setNumber(0)}/>
       </View>

       <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() =>setNumber(999)}>
        <Text style={styles.butoonText}>Power Up💪!!</Text>
        </TouchableOpacity>
       </View>
       <View style={styles.section}>
        <Text style={styles.header}>
          ActivityIndicator:</Text>
          <TouchableOpacity onPress={() => setIsLoading(!isloading)}>
          <Text style={styles.title}> Click Me !!</Text>
          </TouchableOpacity>
          { isloading ? <ActivityIndicator size="large" color="orange"/> : null}
       </View>
       <View style ={styles.section}>
        <Text style={styles.header}> Switch:</Text>
        <View style={styles.switchContainer}>
          <Text> Drop Mobile?</Text>
        <Switch
         value = {isEnable}
         onValueChange={() => setIsEnable(!isEnable)}
         trackColor={{false: '#767577',true:'#81b0ff'}}
         thumbColor={isEnable?'#f5dd4b':'#f4f3f4'}
         />
       </View>
       </View>
       <View style={styles.section}>
       <Text style={styles.title}> List Components:</Text>
       <FlatList
       data={ flastListData}
       keyExtractor={(item) => item.id}
       renderItem={({item})=> (<View style={styles.listView}>
       <Text style={styles.title}>{item.id}-{item.name}</Text>
       </View>
       )}
       />
       <Text style={styles.title}>SectionList:</Text>
       <SectionList
       sections={sectionListData}
       renderItem={({item}) => <Text style={styles.title}>{item}</Text>}
       renderSectionHeader={({section}) => (
       <Text style={styles.header}>{section.title}</Text>
       )}
       />
       </View>
       <View style={styles.section}>
        <Text style={styles.title}> celebrities:</Text>
        <FlatList
        data={celebrities}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(<View style={styles.listcelebrities}>
          <Text style={styles.title}>{item.id}-{item.name}-{item.lastName}-{item.nationality}-{item.age}</Text>
        </View>)}
        
        />
       </View>
       
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title:{
    fontSize: 25,
    textAlign: "center",
  },
  image:{
    width: 500,
    height: 200,
  },
  section:{
    marginBottom:20,
  },
  header:{
    fontSize:20,
    marginBottom:10,
  },
  view:{
    height:100,
    backgroundColor: '#ddd',
  },
  input:{
    height:50,
    borderWidth:1,
    paddingLeft:10,
    borderColor:'lightblue',
  },
  butoonText:{
    fontSize: 18,
    margin: 20,
    alignSelf:'center',
    color:"#fff",
  },
  buttonContainer:{
    backgroundColor:"#009688",
    margin:15,
    borderRadius:10,
    elevation:8,
  },
  switchContainer:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent: 'space-between',
    padding:10,
    margin:10,
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:5,
  },
  listView:{
    backgroundColor:"#009688",
    padding:10,
    margin:15,
    borderRadius:10,
    elevation:8,
  },
  listcelebrities:{
    backgroundColor:"#CCCCFF",
    padding:10,
    margin:15,
    elevation:8,
  },
  listsection:{
    backgroundColor:"#99CCFF",
    padding:10,
    margin:15,
    elevation:8,
  },
});
