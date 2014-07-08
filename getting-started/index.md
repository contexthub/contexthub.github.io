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

ContextHub made up primarily of 5 different services: elements (geofences, beacons), events (subscriptions to tags), contexts, application (push, vault), and analytics.

## Element Services

#### Beacons

`CCHBeaconService` allows you access to beacon information that lives on the ContextHub server. You have the ability to create, retrieve, update, and delete (CRUD) beacons with an associated tag.

#####Creating

For example, let's say we wanted to create a beacon on the server with the tag "demo". Beacons have information such as UUID, major and minor To create a beacon, call:

{% gist Kevinwlee/bddcc29fe2629ee425bc %}

#####Retrieving

Retrieving a beacon to change it is also similarly easy. You can retrieve beacons by either id (unique) or by tag (array). Retrieving by id is as follows:

{% gist Kevinwlee/d07b400c01bbca4de2e0 %}

Retrieving by tag gives you an array of beacons:

{% gist Kevinwlee/ae805f63833fec291937 %}

#####Updating

Updating a beacon is a single call:

{% gist Kevinwlee/f8fcd1ee194525e5e8a4 %}

#####Deleting

Deleting a beacon is also similar:

{% gist Kevinwlee/c9f108e5e7d97c0c9259 %}

####Geofences

{% highlight objectivec %}CCHGeofenceService{% endhighlight %} allows you access to geofence information that lives on the ContextHub server. You have the ability to create, retrieve, update, and delete (CRUD) geofences with an associated tag.

#####Creating

For example, let's say we wanted to create a geofence on the server with the tag "demo".

Geofences have information such as latitude and longitude which define the center of the fence, then a radius value as well. Let's make that now.

{% gist Kevinwlee/114d81f9192c2dfe745a %}

Call

{% gist Kevinwlee/7120ff389ce85aeaf23d %}

This call will fail if latitude is not between -90 and 90 and longitude is not between -180 and 180.

#####Retrieving

Retrieving a geofence to change it is also similarly easy. You can retrieve geofences by either id (unique) or by tag (array).

Retrieving by id is as follows:

{% gist Kevinwlee/a36aaa2d1f898dde4f36 %}

Retrieving by tag gives you an array of geofences, you have the option of passing in your location to limit the scope to those close to you:

{% gist Kevinwlee/cfcc84f8ff0d6c6cd5e2 %}

The location parameter helps to isolate the number of geofences returned by CCHGeofenceService to those within the radius parameter measured in meters sorted by nearest distance.

#####Updating

Updating a geofence is a single call


{% gist Kevinwlee/738ff4434d8944fed952 %}

#####Deleting

Deleting a geofence is also similar

{% gist Kevinwlee/1ef49eb6d0f115117660 %}