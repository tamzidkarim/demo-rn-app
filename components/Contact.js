import React from 'react';
import { View, Text } from 'react-native';

export default function Contact({ name }) {
  return (
    <View style={{ flexDirection: 'row', marginTop: 20, padding: 5 }}>
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: '#b5b5b5',
          borderRadius: 50,
        }}
      ></View>
      <View
        style={{
          paddingLeft: 15,
          alignItems: 'flex-start',
        }}
      >
        <Text style={{ color: 'black', paddingBottom: 5, fontSize: 16 }}>
          {name}
        </Text>
        <Text style={{ color: '#b5b5b5', fontSize: 16 }}>01711111111</Text>
      </View>
    </View>
  );
}
