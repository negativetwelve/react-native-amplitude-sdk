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
    return Amplitude.setUserId(userId.toString());
  }

  setUserProperties(properties) {
    return Amplitude.setUserProperties(properties);
  }

  clearUserProperties() {
    return Amplitude.clearUserProperties();
  }

  // --------------------------------------------------
  // Track
  // --------------------------------------------------
  logEvent(name, properties) {
    return Amplitude.logEvent(name, properties);
  }

}


export default new Amplitude();
