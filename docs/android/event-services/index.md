---
title: Event Services
layout: default
---
#Event Services

##EVENTS

Events are generated in ContextHub through the `SensorPipeline` class which allows your application to turn on and off what elements a device is aware of and will then flow up to ContextHub for processing. You can listen in on a variety of events including *beacon_in*/*beacon_out*/*beacon_changed*, *geofence_in*/*geofence_out*, *location_changed*, and *motion_changed* events.

Note: In order to conserve battery life, only events which are subscribed to will generate events in ContextHub (with exception of *location_changed*)

### Interfaces

ContextHub provides control over events being processed through two interfaces: `SensorPipelinePayloadProvider` and `SensorPipelineListener`. This allows you to determine which events should, will and have been posted to the ContextHub server as additional control points. You will also have the ability to add custom payloads to your events which you can use in your context rules written in the ContextHub developer portal. Below is how to setup these two interfaces in your application.

{% gist CHLibrarian/504eb0ee46c1dad19d12 %}
<br />

### Subscribing

Subscribing to a tag turns on the sensor pipeline to start generating events from elements with that tag. This allows you complete flexibility in having many geofence and beacon elements present in the ContextHub portal, but have only a few specific elements trigger events within your application on a user's device. Below is how to subscribe to a tag with the SDK:

{% gist CHLibrarian/3c5a59e3589720915d5f %}
<br />

### Unsubscribing

Unsubscribing to a tag is very similar to subscribing, and turns off the sensor pipeline to notifications from elements with that tag. Be sure to also stop observing posted notifications at the appropriate time in your app to prevent potential bugs and crashes.

{% gist CHLibrarian/1e8dd4ab3ee20885821d %}
<br />
