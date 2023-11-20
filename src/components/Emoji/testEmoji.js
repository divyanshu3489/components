import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Mapper from "./Mapper";

export const EmojiText = () => {

  function RenderEmoji({name}) {
    return (
      <Text style={{fontSize:40}}>
        {Mapper[name]}
      </Text>
    );
  }

  const emojiNames = Object.keys(Mapper);

  return (
    <ScrollView>
        <View style={styles.container}>
            {
            emojiNames.map((value, index) => (
                <RenderEmoji key={index} name={value}/>
            ))
            }
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }
})

