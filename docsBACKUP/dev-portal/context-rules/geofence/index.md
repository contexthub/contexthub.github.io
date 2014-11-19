---
title: Geofence Object
layout: default
---
#Context Rules

##Geofence Object

Geofences are pre-defined areas of interest that allow your application to be notified when a device has entered or exited that region. Here's how to use the `geofence` object to interact with geofences:
<br />
<br />

### Creating

Creating a geofence contextual element in ContextHub is simple. Every geofence is defined by a latitude and longitude indicating their center and a radius in meters to create the perimeter.

{% gist CHLibrarian/10308ee7887765d11b29 %}
<br />

### Response

Once a geofence is created, a hash response is returned with the following keys: 

- `id` - The unique id identifying the geofence
- `name` - The name of the geofence 
- `latitude` - A float between -90 and 90 representiting the latitude coordinate
- `longitude` - A float between -180 and 180 representing the longitude coordinate
- `radius` - An integer representing the radius
- `tags` - An array of strings representing the tags for the geofence
- `tag_string` - An auto-generated read-only string representation of the tags used by Keen.io for analysis  

Here's the structure of a geofence that was created above:

{% gist CHLibrarian/27c84da6c401fd4e312c %}
<br />

### Retrieving by Tag

Retrieve a group of geofences from ContextHub by passing a tag to `geofence`. Adding more tags separated by commas to the same function call filters only beacons that have *all* tags on the same geofence.

{% gist CHLibrarian/4ed014db0c57e58fd3a2 %}
<br />

### Retrieving by ID

Retrieve a specific geofence from ContextHub by passing a geofence ID present either in the ContextHub developer portal or given to you as a hash response at the key `id` in a context rule.

{% gist CHLibrarian/268b1e9bd2b3e1b157e2 %}
<br />

### Updating

Updating a geofence is similar to creating one. ContextHub first updates the geofence on the server, then triggers pushes to devices interested in geofences with that specific tag.

{% gist CHLibrarian/54183962334352202b4c %}
<br />


### Deleting

Deleting a geofence only requires passing the id to the `geofence` object. The geofence is deleted from ContextHub, then triggers pushes to devices interested in geofence deletions with those specific tags.

{% gist CHLibrarian/fd892e5fa5075f97f19f %}
<br />
