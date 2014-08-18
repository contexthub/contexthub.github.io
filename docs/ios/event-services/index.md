---
title: Event Services
layout: default
---
#Event Services

##EVENTS

Events are generated in ContextHub through the `CCHSensorPipeline` class which allows your application to turn on and off what elements a device is aware of and will then flow up to ContextHub for processing. You can listen in on a variety of events including *beacon_in*, *beacon_out*, and *beacon_changed* events, *geofence_in* and *geofence_out* events, and then *location_changed* and *motion_changed* events. 

Note: In order to conserve battery life, only events which are subscribed to will generate events in ContextHub (with exception of *location_changed*)

### Protocols

ContextHub provides control over events being processed through two protocols: `CCHSensorPipelineDataSource` and `CCHSensorPipelineDelegate`. This allows you to determine which events should, will and have been posted to the ContextHub server as additional control points. You will also have the ability to add custom payloads to your events which you can use in your context rules written in the ContextHub developer portal. Below is how to setup these two protocols in your application.

{% gist CHLibrarian/c6e525f61ac33daf0dd1 %}
<br />

### Subscribing

Subscribing to a tag turns on the sensor pipeline to start generating events from elements with that tag. This allows you complete flexibility in having many geofence and beacon elements present in the ContextHub portal, but have only a few specific elements trigger events within your application on a user's device. Below is how to subscribe to a tag with the SDK:

{% gist CHLibrarian/e4a5ca8a6aafd7c74a1f %}
<br />

### Observing

In order to listen to events being generated from ContextHub, you have the option of observing whether a method should be called if an event will be posted, has been posted, or was canceled. You do this by adding an observer to `NSNotificationCenter` which will call your method(s) immediately after ContextHub raises the appropriate notification. Not all of these notifications need to be observed in a single application, pick and choose the one that best fills your needs.

{% gist CHLibrarian/76dd487466d712d716b2 %}
<br />

### Handling

Finally, you'll start getting notifications sent to your method about events. Your method signature will have a simple structure as written below, with the event present in the `object` property of the notification for you to inspect. Note that *all* events will pass as notifications to this method, so you'll need to inspect the event to distinguish between for example a geofence_in event from a beacon_out event.

{% gist CHLibrarian/219985e1b47202b7f80b %}
<br />

### Unsubscribing

Unsubscribing to a tag is very similar to subscribing, and turns off the sensor pipeline to notifications from elements with that tag. Be sure to also stop observing posted notifications at the appropriate time in your app to prevent potential bugs and crashes.

{% gist CHLibrarian/921338791c871c67d269 %}
<br />
