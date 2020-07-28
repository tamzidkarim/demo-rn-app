import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  let credits = 0;
  let debits = 0;

  const handlePress = () => {
    navigation.navigate('Contacts');
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          position: 'relative',
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            borderBottomColor: '#efefef',
            borderBottomWidth: 2,
            width: '100%',
            height: '25%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Text style={{ color: 'black', fontSize: 18 }}>মোট বকেয়াঃ</Text>
            <Text
              style={{
                color: 'red',
                fontSize: 25,
                fontFamily: 'monospace',
                marginBottom: 10,
              }}
            >
              {credits.toFixed(2)}
            </Text>

            <Text style={{ color: 'black', fontSize: 18 }}>মোট আদায়কৃতঃ</Text>
            <Text
              style={{
                color: 'green',
                fontSize: 25,
                fontFamily: 'monospace',
              }}
            >
              {debits.toFixed(2)}
            </Text>
          </View>

          <View
            style={{
              width: 1,
              height: '50%',
              backgroundColor: '#000',
            }}
          ></View>
          <View
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <View>
              <Text style={{ color: 'black', fontSize: 18 }}>
                মোট বকেয়াকারীঃ
              </Text>

              <Text
                style={{
                  color: 'black',
                  fontSize: 25,
                  marginRight: 'auto',
                }}
              >
                {0}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: 15,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              height: 30,
              width: '70%',
              backgroundColor: '#eaeaea',
              borderRadius: 5,
              marginTop: 20,
              flexDirection: 'row',
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                flex: 1 / 2,
                backgroundColor: '#c7c7c7',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}
              >
                বকেয়াকারী
              </Text>
            </View>
            <View
              style={{
                flex: 1 / 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}
              >
                পরিশোধকারী
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text
              style={{
                color: '#000',
                fontSize: 14,
              }}
            >
              এই মুহুর্তে আপনার কোন বকেয়াকারী নেই।
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
              }}
            >
              নতুন বকেয়াকারী এড করতে হলে + বাটন টি চাপুন এবং
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
              }}
            >
              প্রয়োজনীয় তথ্য পূরণ করুন।
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 60,
            backgroundColor: '#b90a0a',
            borderRadius: 50,
            right: 15,
            bottom: 20,
            shadowColor: 'black',
            shadowOpacity: 0.8,
            elevation: 6,
            shadowRadius: 15,
            shadowOffset: { width: 56, height: 13 },
          }}
          onPress={handlePress}
        >
          <AntDesign name='plus' size={24} color='white' />
        </TouchableOpacity>
      </View>
      <StatusBar style={{ backgroundColor: '#b90a0' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
