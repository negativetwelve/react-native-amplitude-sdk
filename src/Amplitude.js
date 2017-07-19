// Libraries
import {NativeModules, Platform} from 'react-native';

// Native Modules
const {RNAmplitude} = NativeModules;


// Wraps native functions so they are no-ops on android.
const noop = () => {};
const safe = (callback) => Platform.OS === 'android' ? noop : callback;
const guard = (object) => {
  const safeObject = {};

  // Copies all key/values and wraps each value inside a safe callback.
  Object.keys(object).forEach(key => safeObject[key] = safe(object[key]));

  // Returns the new cloned object.
  return safeObject;
};

const Amplitude = {
  // Initialize
  initializeApiKey: (key) => RNAmplitude.initializeApiKey(key),

  // User
  setUserId: (userId) => RNAmplitude.setUserId(userId.toString()),
  setUserProperties: (properties) => RNAmplitude.setUserProperties(properties),
  clearUserProperties: () => RNAmplitude.clearUserProperties(),

  // Events
  logEvent: (name, properties) => RNAmplitude.logEvent(name, properties),
};


export default guard(Amplitude);
