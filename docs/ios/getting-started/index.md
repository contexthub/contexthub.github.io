---
title: Getting Started - iOS
layout: default
---
# Getting Started

## iOS

ContextHub provides a mechanism for third party developers to quickly and easily add powerful contextual capabilities to their applications with just a few lines of code. This enables developers to create unique and engaging experiences for their users.

### Apps

On ContextHub, you create a separate app for each of your mobile applications. Each app has its own application id which you will use to register with the ContextHub iOS SDK. Each account on ContextHub can have multiple application ids for multiple apps. This lets you accommodate both testing and production versions of your app with the same account.

## Intitial Setup

### Sign Up

Sign up for [ContextHub](http://www.contexthub.com) by either creating a username/password or using your GitHub credentials.

### Download

Download the framework from [GitHub](https://github.com/contexthub/contexthub-ios-framework) and add it to your project as well as include the necessary libraries (CoreLocation, CoreMotion, and MobileCoreServices)

## Documentation

### SDK Docs

SDK reference [documentation](http://docs.contexthub.com/contexthub-ios-framework/) is available and is included in the same GitHub repository where the ContextHub iOS SDK is hosted. The docs are generated to integrate with Xcode for quick reference during development. All of the classes and their methods have parameter information listed for their intended use. ContextHub made up primarily of 5 different services: [elements](/docs/ios/element-services) (beacons, geofences), [events](/docs/ios/event-services) (subscriptions to tags), [contexts](/docs/dev-portal/contextual-engine), [application](/docs/ios/application-services) (push, vault), and analytics.


## Sample Apps

Sample apps are available to walk you through the different services ContextHub offers. Below are the following sample apps to choose from. We recommend starting off with Hello ContextHub to get an idea of how to ContextHub works before looking into other examples

### Samples

**[Hello ContextHub](https://github.com/contexthub/hello-contexthub)** - introduces you to the basic ideas behind ContextHub, the iOS SDK framework, and contextual engine. You'll see how events triggered on the device end up on the server and write rules to respond to events on ContextHub.

**[Awareness](https://github.com/contexthub/awareness)** (Context Rules) - introduces you to the context rule features in ContextHub. You'll see how to use different objects inside a context rule to interact with beacons, geofences, vault items, send push notifications, fire webhooks, log console messages and more.

**[Boundaries](https://github.com/contexthub/boundaries)** (Geofences) - introduces you to the geofence features in ContextHub. You'll see how to create, retrieve, update, delete and handle events from geofences all in a few lines of code.

**[Detect Me](https://github.com/contexthub/detect-me)** (Beacons) - introduces you to the beacon features in ContextHub. You'll see how to create, retrieve, update, delete and handle events from beacons all in a few lines of code.

**[Notify Me](https://github.com/contexthub/notify-me)** (Push) - introduces you to the push features in ContextHub. You'll see how easy it is to send messages to multiple devices in different ways, and with enabling push, automatically get the latest server data about elements (beacons, geofences) through background pushes.

**[Storage](https://github.com/contexthub/storage)** (Vault) - introduces you to the vault features in ContextHub. You'll see how to create, retrieve, update, delete vault items all in a few lines of code.

### Demos

Demo apps take different features present in ContextHub and integrate it into a more real-world use case. You'll be able to see how beacons can interact with vault items and context rules to create a truly contextual application.

**[WayFinder v1.0](https://github.com/contexthub/wayfinder)** - Dives into how to detect and use iBeacons to develop a location-aware application. You'll be setting up a few iBeacons and can pretend you are right in the ChaiOne office!

**[WayFinder v2.0](https://github.com/contexthub/wayfinder-vault)** - Building off of WayFinder v1.0, you'll expand the scope of your app by storing data on the server and learn the concept of tags, a way to group similar elements together in ContextHub for easy retrieval from the server. (+ vault)

**[WayFinder v3.0](https://github.com/contexthub/wayfinder-vault-push)** - After WayFinder v2.0, it's time to integrate Apple Push Notification Services (also known as push notifications). You'll write a rule that will send a push notification each time a beacon has entered range and also send a push when the last beacon leaves range. (+ push)


