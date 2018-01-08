import React from 'react';
import { Text, View, Linking } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Hyperlink from 'react-native-hyperlink';
// import { Styles } from './Styles';

export default class App extends React.Component {
  state = {checked1: false};

  render() {
    return (<View style={{backgroundColor: 'black', paddingTop: 25,
                          flex: 1, alignItems: 'center'}}>
      <Text style={{color: 'white', textDecorationLine: 'underline',
                    fontWeight: 'bold', fontSize: 20}}>Code 3000</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox containerStyle={{backgroundColor: 'black', width: 22.5, padding: 0, borderColor: 'black'}}
                  textStyle={{color: 'white'}} checkedColor='white'
                  checkedIcon='check-square' checked={this.state.checked1}
                  onPress={() => this.setState({checked1: !this.state.checked1})}/>
        <Hyperlink onPress={() => Linking.openURL('https://atom.io/')}
                   linkStyle={{textDecorationLine: 'none', color: 'white'}}
                   linkText={ url => url === 'https://atom.io/' ?
                                'Download any text editor' : null }>
          <Text style={{color: 'white'}}>https://atom.io/</Text>
        </Hyperlink>
      </View>
    </View>);
  }
} //Linking almost works...
