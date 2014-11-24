---
title: Beacons
layout: default
---
#Element Services

##BEACONS

Beacons are Bluetooth 4.0 Low Energy devices that allow devices to detect proximity to objects within 50 meters. This gives you the ability to give context-sensitive information to your users in areas where GPS, WiFi, and cellular towers cannot pinpoint a user's exact location, such as deep inside buildings or underground. Here's how to use `ProximityService` and `BeaconProxy` to interact with beacons:
<br />

### Creating

Creating a beacon contextual element in ContextHub is simple. Every beacon has a UUID (32 digit hexadecimal character, a major value (ranging from 1-65535), and a minor value (also ranging from 1-65535). UUIDs you use should be unique so beacons from other users do not interfere with your app. A combination of these three values should be unique for every beacon you have. After creation,`ProximityService.getInstance().synchronize()` must be called if you do not have to push enabled so the sensor pipeline is ready to generate beacon events.

{% gist CHLibrarian/41b57e8adda63d3cdc8d %}
<br />

### Retrieving by tag

Retrieve a group of beacons from ContextHub by passing a tag to `BeaconProxy`. Adding more tags to the same method call filters only beacons that have *all* tags on the same beacon.

{% gist CHLibrarian/d82a917a81395950b082 %}
<br />

### Retrieving by ID

Retrieve a specific beacon from ContextHub by passing a beacon ID present either in the ContextHub developer portal or given to you in a `Beacon` response from the SDK.

{% gist CHLibrarian/caaef7caa751977ddd13 %}
<br />

### Updating

Updating a beacon requires passing back a structure similar to the one returned to you from create/retrieve calls. ContextHub then updates the beacon, and triggers pushes to devices interested in beacons with that specific tag.

{% gist CHLibrarian/db77bcf21f55b8bf7a07 %}
<br />

### Deleting

Deleting a beacon is similar to updating, and requires passing a structure similar to one returned to you from create/retrieve calls. The beacon is deleted from ContextHub, then triggers pushes to devices interested in beacon deletions with those specific tags.

{% gist CHLibrarian/28b78f6fbd4f8c898821 %}
<br />