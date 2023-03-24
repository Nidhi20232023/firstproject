import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
const App = () => {

  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(() => {
    getApiData()
  }, []);

  return (
    <View>
      <Text style={[style.main, style.title]}>API Calling Using FlatList</Text>
      {data.length ?
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <View style={style.view}>
              <Text style={style.main}>USERID:</Text>
              <Text style={[style.main, style.item]}>{item.userId}</Text>
              <Text style={style.main}>ID:</Text>
              <Text style={[style.main, style.item]}>{item.id}</Text>
              <Text style={style.main}>TITLE:</Text>
              <Text style={[style.main, style.item]}>{item.title}</Text>
              <Text style={style.main}>BODY:</Text>
              <Text style={[style.main, style.item]}>{item.body}</Text>
            </View>}

        />
        : null}
    </View>
  )
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 5,
    marginTop: 20,
    textAlign: 'center'
  },
  view:{
backgroundColor:'#DCDCDC',
borderColor:'#DCDCDC',
margin:5,
borderWidth:1,
borderRadius:10
  },
  main: {
    fontSize: 15,
    fontFamily: 'serif',
    color: 'black',
    fontWeight: 'bold'
  },
  item: {
    fontSize: 12,
    fontWeight: 'normal'
  }
})

export default App;
