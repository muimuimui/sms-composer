#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

#import <MessageUI/MessageUI.h>
#import <MessageUI/MFMessageComposeViewController.h>

@interface SMSComposer : CDVPlugin <MFMessageComposeViewControllerDelegate>{}

- (void)showComposer:(NSArray *)arguments withDict:(NSDictionary *)options;
@end