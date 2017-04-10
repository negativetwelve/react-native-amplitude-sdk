//
//  RNAmplitude.m
//  RNAmplitude
//
//  Created by Mark Miyashita on 11/4/16.
//  Copyright © 2016 Mark Miyashita. All rights reserved.
//


#import "Amplitude.h"
#import "AMPIdentify.h"
#import "RNAmplitude.h"


@implementation RNAmplitude

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(initializeApiKey:(NSString *)apiKey) {
  [[Amplitude instance] initializeApiKey:apiKey];
}

RCT_EXPORT_METHOD(setUserId:(NSString *)userId) {
  [[Amplitude instance] setUserId:userId];
}

RCT_EXPORT_METHOD(setUserProperties:(NSDictionary *)properties) {
  [[Amplitude instance] setUserProperties:properties];
}

RCT_EXPORT_METHOD(clearUserProperties) {
  [[Amplitude instance] clearUserProperties];
}

RCT_EXPORT_METHOD(logEvent:(NSString *)event withProperties:(NSDictionary *)properties) {
  [[Amplitude instance] logEvent:event withEventProperties:properties];
}

@end
