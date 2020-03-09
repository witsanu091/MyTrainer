import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import Route from './src/Route';
import Homescreen from '../MyTrainer/src/pagesUser/Homescreen';
// import Homescreen from '../MyTrainer/src/pages/Gym';
import { Router } from 'react-native-router-flux';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#002f6c"
          barStyle="light-content"
        />
        <Route />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});