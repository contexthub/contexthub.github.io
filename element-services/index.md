---
title: Element Services
layout: default
---
# Element Services

## Beacons

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

##Geofences

`CCHGeofenceService` allows you access to geofence information that lives on the ContextHub server. You have the ability to create, retrieve, update, and delete (CRUD) geofences with an associated tag.

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

