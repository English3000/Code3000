import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from './Styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'black', color: 'white',
                     justifyContent: 'center' }}>
        <Text>Does React Native have checkboxes?</Text>
      </View>
    );
  }
}
