---
title: Beacon Object
layout: default
---
#Context Rules

##Beacon Object

Beacons are Bluetooth 4.0 Low Energy devices that allow devices to detect proximity to objects within 50 meters. This gives you the ability to give context-sensitive information to your users in areas where GPS, WiFi, and cellular towers cannot pinpoint a user's exact location, such as deep inside buildings or underground. Here's how to use the `beacon` object to interact with beacons in a context rule:
<br />
<br />

### Creating

Creating a beacon contextual element in ContextHub is simple. Every beacon has a UUID (32 digit hexadecimal character, a major value (ranging from 1-65535), and a minor value (also ranging from 1-65535). UUIDs you use should be unique so beacons from other user's do not interfere with your app. A combination of these three values should be unique for every beacon you have.

{% gist CHLibrarian/9c62b626473a434dfc5b %}
<br />

### Response

Once a vault item is created, a hash response is returned with the following keys: 

- `id` - the unique id identifying the beacon
- `name` - the name of the beacon 
- `uuid` - a 32-hexadecimal character string displayed in five groups separated by hyphens, in standardized UUID/GUID format (`8-4-4-4-12`)
- `major` - a 16-bit value from 1-65535
- `minor` - a 16-bit value from 1-65535 
- `tags` - an array of strings representing the tags for the beacon
- `tag_string` - an auto-generated read-only string representation of the tags used by Keen.io for analysis  

Here's the structure of a vault item that was created above:

{% gist CHLibrarian/13d02a106b74289d1dc3 %}
<br />

### Retrieving by Tag

Retrieve a group of beacons from ContextHub by passing a tag to `beacon`. Adding more tags seperated by commas to the same function call filters only beacons that have *all* tags on the same beacon.

{% gist CHLibrarian/1bc45aa1d2b7008fa6f2 %}
<br />

### Retrieving by ID

Retrieve a specific beacon from ContextHub by passing a beacon ID present either in the ContextHub developer portal or given to you as a hash response at the key `id` in a context rule.

{% gist CHLibrarian/494e611bd57f6d0d8863 %}
<br />

### Updating

Updating a beacon is similar to creating a beacon. ContextHub then updates the beacon, and triggers pushes to devices interested in beacons with that specific tag.

{% gist CHLibrarian/84a08b4677d54937dc81 %}
<br />


### Deleting

Deleting a beacon only requires passing the id to the `beacon` object. The beacon is then deleted from ContextHub.

{% gist CHLibrarian/6bb47bccf63793f6864c %}
<br />