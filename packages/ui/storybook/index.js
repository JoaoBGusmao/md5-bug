import React from 'react';
import { Text } from 'react-native';
import { registerRootComponent, SplashScreen } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import FontLoader from '../src/Atoms/FontLoader';

SplashScreen.hide();

activateKeepAwake();
registerRootComponent(() => (
  <FontLoader>
    <Text>Hello</Text>
  </FontLoader>
));
