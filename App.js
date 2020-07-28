import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import ContactList from './components/ContactList';
import LogoTitle from './components/LogoTitle';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#b90a0a',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 15,
          },
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerTitle: (props) => <LogoTitle {...props} title='ডেমো অ্যাপ' />,
          }}
        />
        <Stack.Screen
          name='Contacts'
          component={ContactList}
          options={{
            headerTitle: (props) => (
              <LogoTitle {...props} title='কন্টাক্টস লিস্ট' />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
