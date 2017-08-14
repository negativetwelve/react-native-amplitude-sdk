// Libraries
import {NativeModules, Platform} from 'react-native';
import Package from 'react-native-package';


/**
 * Package.create handles two things:
 *
 *   1. Checks that for each platform that's `enabled`, the module is installed
 *      properly. If it's not, it logs a warning.
 *   2. Guards the module on every platform that is not `enabled`. This allows
 *      the module to exist in cross-platform code without hacks to disable it.
 *
 * You can read more about `react-native-package` here:
 * https://github.com/negativetwelve/react-native-package
 */
export default Package.create({
  json: require('../package.json'),
  nativeModule: NativeModules.RNAmplitude,
  enabled: Platform.select({
    ios: true,
  }),
  export: (Amplitude) => ({
    // Initialize
    initializeApiKey: (key) => Amplitude.initializeApiKey(key),

    // User
    setUserId: (userId) => Amplitude.setUserId(userId.toString()),
    setUserProperties: (properties) => Amplitude.setUserProperties(properties),
    clearUserProperties: () => Amplitude.clearUserProperties(),

    // Events
    logEvent: (name, properties) => Amplitude.logEvent(name, properties),
  }),
});
