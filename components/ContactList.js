import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import Contact from './Contact';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  let list;
  useEffect(async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });
      console.log(data.length, data);
      if (data.length > 0) {
        await setContacts((contacts) => contacts.concat(data));
      }
    }
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingVertical: 5,
          paddingHorizontal: 15,
          borderBottomColor: '#efefef',
          borderBottomWidth: 2,
        }}
      >
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
            paddingHorizontal: 5,
            paddingVertical: 5,
            marginRight: 10,
          }}
        >
          সকল কন্টাক্টস
        </Text>
        <Text
          style={{
            color: '#b5b5b5',
            fontSize: 16,
            paddingHorizontal: 5,
            paddingVertical: 5,
          }}
        >
          হালাখাতা কন্টাক্টস
        </Text>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {contacts.map((contact) => {
          return <Contact name={contact.name} />;
        })}
      </View>
    </View>
  );
}
