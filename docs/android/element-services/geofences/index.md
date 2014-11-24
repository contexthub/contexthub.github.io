---
title: Geofences
layout: default
---
#Element Services

##GEOFENCES

Geofences are pre-defined areas of interest that allow your application to be notified when a device has entered or exited that region. Here's how to use `LocationService` and `GeofenceProxy` to interact with geofences:
<br />

### Creating

Creating a geofence contextual element in ContextHub is simple. Every geofence is defined by a latitude and longitude indicating their center and a radius in meters to create the perimeter. After creation, `LocationService.getInstance().synchronize()` must be called if you do not have to push enabled so the sensor pipeline is ready to generate geofence events.

{% gist CHLibrarian/67527271aa5b0d3011f0 %}
<br />

### Retrieving by tag

Retrieve a group of geofences from ContextHub by passing a tag to `GeofenceProxy`. Adding more tags to the same method call filters only geofences that have *all* tags on the same geofence.

{% gist CHLibrarian/6f4d2202cd9efec1eec2 %}
<br />

### Retrieving by ID

Retrieve a specific geofence from ContextHub by passing a geofence ID present either in the ContextHub developer portal or given to you in a `Geofence` response from the SDK.

{% gist CHLibrarian/b2d3bbc50b22ea9d1838 %}
<br />

### Updating

Updating a geofence requires passing back a structure similar to the one returned to you from create/retrieve calls. ContextHub then updates the geofence, and triggers pushes to devices interested in geofence with that specific tag.

{% gist CHLibrarian/08b89ebf1a73e2e442fe %}
<br />

### Deleting

Deleting a geofence is similar to updating, and requires passing a structure similar to one returned to you from create/retrieve calls. The geofence is deleted from ContextHub, then triggers pushes to devices interested in geofence deletions with those specific tags.

{% gist CHLibrarian/cbc74600d574b9d41cf6 %}
<br />