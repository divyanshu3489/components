import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainRouter from './src/routes/MainRouter';

const App =()=> {
  return (
    <MainRouter/>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
  }
});

export default App;
