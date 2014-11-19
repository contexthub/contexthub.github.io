---
title: Beacons
layout: default
group: "element-services"
---
#Element Services

##BEACONS

Beacons are Bluetooth 4.0 Low Energy devices that allow devices to detect proximity to objects within 50 meters. This gives you the ability to give context-sensitive information to your users in areas where GPS, WiFi, and cellular towers cannot pinpoint a user's exact location, such as deep inside buildings or underground. Here's how to use `CCHBeaconService` to interact with beacons:
<br />

### Creating

Creating a beacon contextual element in ContextHub is simple. Every beacon has a UUID (32 digit hexadecimal character, a major value (ranging from 1-65535), and a minor value (also ranging from 1-65535). UUIDs you use should be unique so beacons from other user's do not interfere with your app. A combination of these three values should be unique for every beacon you have. You can also create a standard `CLBeaconRegion` class from the response for use in your app. After creation,`[CCHSensorPipeline synchronize:]` must be called if you do not have to push enabled so the sensor pipeline is ready to generate beacon events. 

{% gist CHLibrarian/9a88528f3c94bc524a47 %}
<br />

### Retrieving by tag

Retrieve a group of beacons from ContextHub by passing a tag to `CCHBeaconService`. Adding more tags to the same method call filters only beacons that have *all* tags on the same beacon.

{% gist CHLibrarian/8a124104fe165ca06deb %}
<br />

### Retrieving by ID

Retrieve a specific beacon from ContextHub by passing a beacon ID present either in the ContextHub developer portal or given to you as a dictionary response from the SDK at the key "id".

{% gist CHLibrarian/40cb8d5346a7773b0daa %}
<br />

### Updating

Updating a beacon requires passing back a structure similar to the one returned to you from create/retrieve calls. ContextHub then updates the beacon, and triggers pushes to devices interested in beacons with that specific tag.

{% gist CHLibrarian/d9bc6b5675b062b11dbf %}
<br />

### Deleting

Deleting a beacon is similar to updating, and requires passing a strecture similar to one returned to you from create/retrieve calls. The beacon is deleted from ContextHub, then triggers pushes to devices interested in beacon deletions with those specific tags.

{% gist CHLibrarian/191d805bf82b563cabf0 %}
<br />