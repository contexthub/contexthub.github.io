---
title: Contextual Services
layout: default
---
#Contextual Services

##CONTEXTS

The contextual engine evaluates contextual rules written in JavaScript to respond to events triggered by devices and sensors to cause actions which happen on the ContextHub server which affect other devices. These actions include sending push notification, storing data in vault, sending and receiving http requests, and logging console data to your server logs. These actions happen through objects which have a set of methods available to you to create powerful contexts in your applications.

###Objects

####Event

This object contains the information which triggered the event. Within every event object contains the name, data, payload, and context keys available for you to access.

Sample event:

{% gist Kevinwlee/a561eebf2c95acb43c69 %}

#####Specifics

* Name - name of the event, which matches one of the available event types
* Data - data for each event matches its event type

#####Beacons

{% gist Kevinwlee/4d590d9baa29084edfde %}

#####Changed

{% gist Kevinwlee/a6915dc76c05adf86d2a %}

#####Geofences In/out

{% gist Kevinwlee/b056f1eab3712b528d0e %}

#####Location Changed

{% gist Kevinwlee/a059f2277a0620431fe1 %}

#####Motion Changed

{% gist Kevinwlee/d97b5608522e8912d641 %}

* Context - The array contains event data for each of the context types that you have used in your contexts on ContextHub.
* Device - info specific to the device which triggered the event

{% gist Kevinwlee/8856e24cf1564470d52f %}

* Payload - this is additional data sent by your application in addition to the event data. It is defined as a CCHSensorPipelineDataSource protocol method for you to implement.

####Push

This object allows you to send foreground (with alert messages) and background (without alert messages) push notifications to either devices, aliases, tags or push tokens. Writing rules to send to specific push tokens is discouraged, as a push token has no guarantee of staying the same for the lifetime of an application installation.

####Vault

This object allows you to store information within the vault directly from a contextual rule. You have the ability to create, retrieve (by id, keypath, and tag), update, and delete vault items.

####HTTP

This object lets you make HTTP get and post requests within a contextual rule. You have the ability to set parameters and custom headers for your requests, then get back a response and respond accordingly. Note: a contextual rule only has 30 seconds of processing before timing out and these HTTP requests occur synchronously, so be aware that your rule may not be fully executed if waiting for an HTTP request to complete.

####Console

This object allows you to log messages into your server logs to diagnose potential issues in your contextual rule as well as keep a record of what has occurred.

####Rules

Each rule written is triggered when a specific event type is posted to the ContextHub server from a device and then evaluated. Using the objects listed above, you can create complex rules using JavaScript and trigger events to occur. Rules have 30 seconds to finish processing before they timeout.

####Example

For example, a simple rule that logs and stores a geofence event in the vault would look like this:

{% gist Kevinwlee/43d707615ab3f3b5cb8f %}