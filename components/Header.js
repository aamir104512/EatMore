import {View, Text, Image} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View>
      <View>
        <Image
          source={require('../assets/profile.png')}
          style={{
            width: '100%',
            height: 250,
          }}
        />
      </View>

      <View>
        <Image
          source={require('../assets/el.png')}
          style={{
            height: 505,
            width: 451,
            bottom: 385,
            // flex: 1,
            right: 45,
          }}
        />
      </View>

      <View style={{position: 'absolute', left: '35%', top: 40}}>
        <Image
          source={require('../assets/logo.png')}
          style={{tintColor: 'white', height: 47, width: 108}}
        />
      </View>
    </View>
  );
}
