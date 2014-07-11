---
title: Getting Started Guide - IOS
layout: default
---
# Getting Started Guide - IOS

ContextHub provides a mechanism for third party developers to quickly and easily add powerful contextual capabilities to their applications with just a few lines of code. This enables developers to create unique and engaging experiences for their users.

### Apps

On ContextHub, you create a separate app for each of your mobile applications. Each app has its own application id which you will use to register with the ContextHub iOS SDK. Each account on ContextHub can have multiple application ids for multiple apps. This lets you accommodate both testing and production versions of your app with the same account.

## Intitial Setup

### Sign Up

Sign up for ContextHub at [www.contexthub.com](http://www.contexthub.com).

### Download

Download the framework from GitHub at [https://github.com/contexthub/contexthub-ios-framework](https://github.com/contexthub/contexthub-ios-framework) and add it to your project as well as include the necessary libraries (CoreLocation, CoreMotion, and MobileCoreServices)

## Sample Apps

Sample apps are available to walk you through the different services ContextHub offers. Below are the following sample apps to choose from. We recommend starting off with Hello ContextHub to get an idea of how to ContextHub works before looking into other examples

Each sample app usually has a v1.0 with a simple concept dealing with only one elemental service. Successive versions of apps then integrate more services to create more interesting use cases

### Samples

**[Hello ContextHub](https://github.com/contexthub/hello-contexthub)** - introduces you to the basic ideas behind ContextHub, the iOS SDK framework, and contextual engine. You'll see how events triggered on the device end up on the server and write rules to respond to events on ContextHub.


**[WayFinder](https://github.com/contexthub/Wayfinder)** - iBeacons

* WayFinder v1.0 - Dives into how to detect and use iBeacons to develop a location-aware application. You'll be setting up a few iBeacons and can pretend you are right in the ChaiOne office!
* WayFinder v2.0 - Building off of WayFinder v1.0, you'll expand the scope of your app by storing data on the server and learn the concept of tags, a way to group similar elements together in ContextHub for easy retrieval from the server. (+ vault)
* WayFinder v3.0 - After WayFinder v2.0, it's time to integrate Apple Push Notification Services (also known as push notifications). You'll write a rule that will send a push notification each time a beacon has entered range and also send a push when the last beacon leaves range. (+ push)



## Documentation

Reference documentation is available and is included in the same GitHub repository where the ContextHub iOS SDK is hosted. The docs are generated to integrate with Xcode for quick reference during development. All of the classes and their methods have parameter information listed for their intended use.

[http://docs.contexthub.com/contexthub-ios-framework/](http://docs.contexthub.com/contexthub-ios-framework/)

## Services

ContextHub made up primarily of 5 different services: [elements](/element-services) (geofences, beacons), [events](/event-service) (subscriptions to tags), [contexts](/contextual-services), application (push, vault), and analytics.
