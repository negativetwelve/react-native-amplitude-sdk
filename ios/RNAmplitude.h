//
//  RNAmplitude.h
//  RNAmplitude
//
//  Created by Mark Miyashita on 11/4/16.
//  Copyright © 2016 Mark Miyashita. All rights reserved.
//


#if __has_include(<React/RCTAssert.h>)
  #import <React/RCTBridgeModule.h>
#else
  #import "RCTBridgeModule.h"
#endif


@interface RNAmplitude : NSObject <RCTBridgeModule>
@end
