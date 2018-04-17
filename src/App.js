/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Result from './Result';
import Numbers from './Numbers';
import Operator from './Operator';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Result/>
          <View style={styles.inputContainer}>
            <Numbers/>
            <Operator/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5FCFF',
  },
  inputContainer:{
    width: '100%',
    height: '80%',
    backgroundColor: '#585858',
    flexDirection: 'row'
  }
});
