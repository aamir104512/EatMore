import {TextInput} from 'react-native';
import React from 'react';

export default function InputComp({Placeholder, KType}) {
  return (
    <TextInput
      placeholder= {Placeholder}
      placeholderTextColor={'#A8A7A7'}
      style={{
        borderBottomWidth: 1,
        borderColor: '#EAEAF5',
        color: 'black',
      }}
      keyboardType= {KType}
    />
  );
}
