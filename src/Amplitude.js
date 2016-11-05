// Libraries
import {NativeModules} from 'react-native';

// Native Modules
const {RNAmplitude} = NativeModules;


class Amplitude {

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  initializeApiKey(key) {
    return RNAmplitude.initializeApiKey(key);
  }

  // --------------------------------------------------
  // Identify
  // --------------------------------------------------
  setUserId(userId) {
    return RNAmplitude.setUserId(userId.toString());
  }

  setUserProperties(properties) {
    return RNAmplitude.setUserProperties(properties);
  }

  clearUserProperties() {
    return RNAmplitude.clearUserProperties();
  }

  // --------------------------------------------------
  // Track
  // --------------------------------------------------
  logEvent(name, properties) {
    return RNAmplitude.logEvent(name, properties);
  }

}


export default new Amplitude();
