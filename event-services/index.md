---
title: Event Services
layout: default
---
#Event Services

##EVENTS

`CCHSensorPipeline` allows you to tap into the events triggered by changes in state which then flow up to ContextHub for processing. You can listen in on a variety of events including *beacon_in*, *beacon_out*, and *beacon_changed* events, *geofence_in* and *geofence_out* events, and then *location_changed* and *motion_changed* events. In order to conserve battery life, only events which are subscribed to will generate events in ContextHub (with exception of *location_changed*)

#####Protocols

Set the pipeline delegate and datasource to one of your classes `[[CCHSensorPipeline sharedInstance] setDataSource:self];` and `[[CCHSensorPipeline sharedInstance] setDelegate: self];` Conforming to the `CCHSensorPipelineDataSource` and `CCHSensorPipelineDelegate` protocols gives you the ability to see and control which events should, will, and have flown up to the ContextHub server as well as send custom event payloads.

#####Subscribing

You then need to subscribe to the tag of the element on the server (beacons, geofences, etc..) to have your app be notified of events:

{% gist Kevinwlee/c19ae6ac8a4e2a719802 %}

#####Observing

Then, you need to observe the notification so your specific method for handling events can be called:

{% gist Kevinwlee/c949ae2af8fedfd75c4d %}

There are a series of helper class extensions which extend CLBeaconRegion and CLCircularRegion which make processing generated events easier (`CLBeaconRegion+ContextHub` and `CLCircularRegion+ContextHub`)

#####Responding

Finally, you'll start getting notifications sent to your method about events. For example, if you had named your method "handleNotification", you would structure your method like this:

{% gist Kevinwlee/22af2139e6509bdf5835 %}