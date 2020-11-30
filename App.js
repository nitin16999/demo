import React from 'react';
import { StyleSheet, View, TouchableOpacity, BackHandler } from 'react-native';

export default class Splash extends React.Component {
  exit = () => {
    BackHandler.exitApp()
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.exit} style={styles.screen}>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%'
  }
});

