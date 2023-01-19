import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CustomSwitch = ({selectionMode, option1, option2, onSelectSwitch}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          height: 35,
          width: 265,
          backgroundColor: 'white',
          borderRadius: 30,
          borderColor: '#EAEAF5',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 40,
          borderWidth: 1,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updateSwitchData(1)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? '#FF0036' : 'white',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 1 ? 'white' : '#FF0036',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updateSwitchData(2)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? '#FF0036' : 'white',
            borderRadius: 10,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 2 ? 'white' : '#FF0036',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomSwitch;
