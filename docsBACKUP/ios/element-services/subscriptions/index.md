---
title: Subscriptions
layout: default
---
#Element Services

##SUBSCRIPTIONS

Subscriptions send your app background notifications whenever a contextual element like a beacon, geofence or vault item has been updated on the server so you can respond to it in real-time. Here's how to use the `CCHSubscriptionService`:
<br />

### Subscribing

Subscribing to a tag is simple. Pass the tag you are interested in to `CCHSubscriptionService` along with the elements you are interested in as options (`CCHOptionBeacon`, `CCHOptionDevice`, `CCHOptionGeofence`, `CCHOptionVault`, or `nil` to get all of them) to be subscribed to any creation, update, or deletion of elements with that tag.

{% gist CHLibrarian/702e5903bc757eeeaca5 %}
<br />

### Retrieving

Retrieve all the tags you are subscribed to for each service by calling `[CCHSubscriptionService getSubscriptionsWithCompletion:]` then accessing the appropriate key in the dictionary.

{% gist CHLibrarian/49d41f8d7a613ef3fb11 %}
<br />

### Unsubscribing

Unsubscribing from a tag is similar to subscribing by passing in a tag and options (same as above) so your application is no longer notified about creation, updates, or deletion of items of elements with that tag.

{% gist CHLibrarian/4babb7b758ed8bac9500 %}
<br />