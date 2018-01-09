import React from 'react';
import { Text, View, Linking } from 'react-native';
import { CheckBox } from 'react-native-elements';
// import { Styles } from './Styles';

export default class App extends React.Component {
  state = {checked1: false, checked2: false};

  render() {
    return (<View style={{backgroundColor: 'black', paddingTop: 25,
                          flex: 1, alignItems: 'center'}}>
      <Text style={{color: 'white', textDecorationLine: 'underline',
                    fontWeight: 'bold', fontSize: 20}}>Code 3000</Text>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox containerStyle={{backgroundColor: 'black', width: 22.5, padding: 0, borderColor: 'black'}}
                    textStyle={{color: 'white'}} checkedColor='white'
                    checkedIcon='check-square' checked={this.state.checked1}
                    onPress={() => this.setState({checked1: !this.state.checked1})}/>
          <Text onPress={() => Linking.openURL('https://atom.io/').then(
                                () => this.setState({checked1: !this.state.checked1}) )}
                style={{color: 'white'}}>Download any text editor</Text>
        </View>
        {this.state.checked1 ? <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox containerStyle={{backgroundColor: 'black', width: 22.5, padding: 0, borderColor: 'black'}}
                    textStyle={{color: 'white'}} checkedColor='white'
                    checkedIcon='check-square' checked={this.state.checked2}
                    onPress={() => this.setState({checked2: !this.state.checked2})}/>
          <Text onPress={() => Linking.openURL('').then(
                                () => this.setState({checked2: !this.state.checked2}) )}
                style={{color: 'white'}}>2nd instruction</Text>
        </View> : null}
      </View>
    </View>);
  }
}
