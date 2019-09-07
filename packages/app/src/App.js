import React, { Component } from 'react';
import { Text } from 'react-native';
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import FontLoader from '@joaobgusmao/ui/src/Atoms/FontLoader'

class App extends Component {
  render() {
    return (
      <FontLoader>
        <Text>Hello</Text>
      </FontLoader>
    );
  }
}

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);

export default App;
