---
title: Subscriptions
layout: default
---
#Element Services

##SUBSCRIPTIONS

Subscriptions send your app background notifications whenever a contextual element like a beacon, geofence or vault item has been updated on the server so you can respond to it in real-time. Here's how to use the `SubscriptionProxy`:
<br />

### Subscribing

Subscribing to a tag is simple. Pass the tag you are interested in to the `updateSubscriptions` method of `SubscriptionProxy` along with the elements you are interested in as options (`beacon`, `geofence`, or `vault`) to be subscribed to any creation, update, or deletion of elements with that tag. You can also use the more specific `updateBeaconSubscription`, `updateGeofenceSubscription`, and `updateVaultSubscription` methods to subscribe/unsubscribe to changes for a single element.

{% gist CHLibrarian/1876275ccb198d441293 %}
<br />

### Retrieving

Retrieve all the tags you are subscribed to for each service by calling `listSubscriptions` and then accessing the appropriate subscriptions via the `SubscriptionResponse` class.

{% gist CHLibrarian/3790cd3661e22fe0feb8 %}
<br />

### Unsubscribing

Unsubscribing from a tag is similar to subscribing.  Pass in a tag and options (same as above) so your application is no longer notified about creation, updates, or deletion of items of elements with that tag.

{% gist CHLibrarian/872f303ba35b44f57356 %}
<br />