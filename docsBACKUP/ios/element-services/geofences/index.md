---
title: Geofences
layout: default
group: "element-services"

---
#Element Services

##GEOFENCES

Geofences are pre-defined areas of interest that allow your application to be notified when a device has entered or exited that region. Here's how to use `CCHGeofenceService` to interact with geofences:
<br />

### Creating

Creating a geofence contextual element in ContextHub is simple. Every geofence is defined by a latitude and longitude indicating their center and a radius in meters to create the perimeter. You can also create a standard `CLCircularRegion` class from the response for use in your app. After creation, `[CCHSensorPipeline synchronize]` must be called if you do not have to push enabled so the sensor pipeline is ready to generate geofence events.

{% gist CHLibrarian/604928d3705c3d0d78cd %}
<br />

### Retrieving by tag

Retrieve a group of geofences from ContextHub by passing a tag to `CCHGeofenceService`. Adding more tags to the same method call filters only geofence that have *all* tags on the same geofence.

{% gist CHLibrarian/b77f33f3c577feccf18a %}
<br />

### Retrieving by ID

Retrieve a specific geofence from ContextHub by passing a geofence ID present either in the ContextHub developer portal or given to you as a dictionary response from the SDK at the key "id".

{% gist CHLibrarian/3d527dbdc110900b694d %}
<br />

### Updating

Updating a geofence requires passing back a structure similar to the one returned to you from create/retrieve calls. ContextHub then updates the geofence, and triggers pushes to devices interested in geofence with that specific tag.

{% gist CHLibrarian/81a90f9f2c08c4f35cf2 %}
<br />

### Deleting

Deleting a geofence is similar to updating, and requires passing a strecture similar to one returned to you from create/retrieve calls. The geofence is deleted from ContextHub, then triggers pushes to devices interested in geofence deletions with those specific tags.

{% gist CHLibrarian/fec0abd474cf6c1acc36 %}
<br />