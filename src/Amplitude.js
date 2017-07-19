// Libraries
import {NativeModules, Platform} from 'react-native';

// Native Modules
const {RNAmplitude} = NativeModules;


class Amplitude {

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  initializeApiKey(key) {
    if (Platform.OS === 'android') {
      return;
    }

    return RNAmplitude.initializeApiKey(key);
  }

  // --------------------------------------------------
  // Identify
  // --------------------------------------------------
  setUserId(userId) {
    if (Platform.OS === 'android') {
      return;
    }

    return RNAmplitude.setUserId(userId.toString());
  }

  setUserProperties(properties) {
    if (Platform.OS === 'android') {
      return;
    }

    return RNAmplitude.setUserProperties(properties);
  }

  clearUserProperties() {
    if (Platform.OS === 'android') {
      return;
    }

    return RNAmplitude.clearUserProperties();
  }

  // --------------------------------------------------
  // Track
  // --------------------------------------------------
  logEvent(name, properties) {
    if (Platform.OS === 'android') {
      return;
    }

    return RNAmplitude.logEvent(name, properties);
  }

}


export default new Amplitude();
