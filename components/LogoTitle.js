import React from 'react';
import { Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function LogoTitle({ title }) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
    >
      <Text style={{ color: 'white', fontSize: 17 }}>{title}</Text>
      <EvilIcons name='search' size={26} color='white' />
    </View>
  );
}
