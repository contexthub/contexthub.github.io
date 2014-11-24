---
title: Getting Started - Android
layout: default
group: "android"
---



# Android

<a name="RegistrationandSetup"></a>
<a data-magellan-destination="RegistrationandSetup"></a>

## Registration and Setup

### Registration

On ContextHub, you create a separate app for each of your mobile applications. Each app has its own application id which you will use to register with the ContextHub Android SDK. Each account on ContextHub can have multiple application ids for multiple apps. This lets you accommodate both testing and production versions of your app with the same account.

### Sign Up

Sign up for [ContextHub](http://www.contexthub.com) by either creating a username/password or using your GitHub credentials.


<a name="PushNotifications"></a>
<a data-magellan-destination="PushNotifications"></a>

## PushNotifications

Push notifications let you send foreground messages which your users will be alerted to as well as background notifications which trigger your app to perform processing. Combined with elements that trigger events, this allows for increased functionality that forms the foundation of most apps that use ContextHub. Here's how to use it:
<br />

<a name="PushNotifications-registering"></a>
<a data-magellan-destination="PushNotifications-registering"></a>

### Registering

Registering for push involves a one line call to `Push.init()` with your Google Cloud Messaging (GCM) sender id. You can optionally specify an alias, tags, and a custom push notification handler.

{% gist CHLibrarian/0e3b504ba329611a5d4b %}
<br />

<a name="PushNotifications-sendingtodevice"></a>
<a data-magellan-destination="PushNotifications-sendingtodevice"></a>

### Sending to device(s)

Sending to a device is as simple as sending an array of device IDs along with the `NSDictionary` containing the message you want sent. The push message will then get queued to be processed in a first-in, first-out basis on the server.

{% gist CHLibrarian/5e6c22663d79a8cbfadd %}
<br />

<a name="PushNotifications-sendingtoalias"></a>
<a data-magellan-destination="PushNotifications-sendingtoalias"></a>

### Sending to alias(es)

Sending to an alias is similar to sending to a device, where ContextHub will figure out which alias maps to a device to send a notification. Remember that unlike device IDs, aliases are not required to be unique, so sending a message to "Android" will send to *all* devices with that alias. It is therefore recommended to pick an alias that is unlikely to be conflicting at the global scope of your app (hashed usernames are a good choice).

{% gist CHLibrarian/8f369dfe08629a0f4e3c %}
<br />

<a name="PushNotifications-sendingtotags"></a>
<a data-magellan-destination="PushNotifications-sendingtotags"></a>

### Sending to tag(s)

Sending to tags are also similar to sending to devices and aliases where you specify the tags to send a message to. Tags also are not required to be unique, and since a device can have multiple tags, it is possible for a device to receive multiple messages if you send the same message to multiple tags. Keep this in mind when building the logic in your app if that is undesired behavior.

{% gist CHLibrarian/d9dabae73866762912b0 %}
<br />

<a name="PushNotifications-sendingcustomdata"></a>
<a data-magellan-destination="PushNotifications-sendingcustomdata"></a>

### Sending custom data

In addition to sending simple push notifications with a message, you can also send notifications with custom data. To do this, create a class to represent your data structure and specify it as the generic type parameter when creating your `PushNotification` instance.

{% gist CHLibrarian/1a1dda15af234a929f29 %}
<br />

<a name="PushNotifications-receiving"></a>
<a data-magellan-destination="PushNotifications-receiving"></a>

### Receiving

Receiving a notification is as simple as implementing the `PushPayloadHandler` interface with your custom code and passing an instance of your handler class in the call to `Push.init()`. You can pull out information from the notification such as message or custom data, and act on it appropriately. This method will get called even if your app isn't running if the push is a background push (displaying a notification to the user like the example below is optional). Since ContextHub has background pushes that keep `SensorPipeline` in sync, use this pattern to ensure that your app always has the latest data about element services that generate events.

{% gist CHLibrarian/796f09a0243058d30962 %}
<br />


<a name="Events"></a>
<a data-magellan-destination="Events"></a>

## Events

Events are generated in ContextHub through the `SensorPipeline` class which allows your application to turn on and off what elements a device is aware of and will then flow up to ContextHub for processing. You can listen in on a variety of events including *beacon_in*/*beacon_out*/*beacon_changed*, *geofence_in*/*geofence_out*, *location_changed*, and *motion_changed* events.

Note: In order to conserve battery life, only events which are subscribed to will generate events in ContextHub (with exception of *location_changed*)

<a name="Events-protocols"></a>
<a data-magellan-destination="Events-protocols"></a>

### Interfaces

ContextHub provides control over events being processed through two interfaces: `SensorPipelinePayloadProvider` and `SensorPipelineListener`. This allows you to determine which events should, will and have been posted to the ContextHub server as additional control points. You will also have the ability to add custom payloads to your events which you can use in your context rules written in the ContextHub developer portal. Below is how to setup these two interfaces in your application.

{% gist CHLibrarian/504eb0ee46c1dad19d12 %}
<br />

<a name="Events-subscribing"></a>
<a data-magellan-destination="Events-subscribing"></a>

### Subscribing

Subscribing to a tag turns on the sensor pipeline to start generating events from elements with that tag. This allows you complete flexibility in having many geofence and beacon elements present in the ContextHub portal, but have only a few specific elements trigger events within your application on a user's device. Below is how to subscribe to a tag with the SDK:

{% gist CHLibrarian/3c5a59e3589720915d5f %}
<br />

<a name="Events-observing"></a>
<a data-magellan-destination="Events-observing"></a>

### Observing

In order to listen to events being generated from ContextHub, you have the option of observing whether a method should be called if an event will be posted, has been posted, or was canceled. You do this by adding a `SensorPipelineListener` which will call your method(s) immediately before or after ContextHub processes the event.

{% gist CHLibrarian/c95bbcf56e9888bd5ac3 %}
<br />

<a name="Events-unsubscribing"></a>
<a data-magellan-destination="Events-unsubscribing"></a>

### Unsubscribing

Unsubscribing to a tag is very similar to subscribing, and turns off the sensor pipeline to events from elements with that tag. Be sure to also stop observing posted events at the appropriate time in your app to prevent potential bugs and crashes.

{% gist CHLibrarian/1e8dd4ab3ee20885821d %}
<br />

<a name="DataDistribution"></a>
<a data-magellan-destination="DataDistribution"></a>

## Data Distribution

Vault lets you save data to the server which all devices and context rules can access. Combined with element services, it allows beacons and geofences to have state. Here's how to use `VaultProxy`:
<br />

<a name="DataDistribution-creating"></a>
<a data-magellan-destination="DataDistribution-creating"></a>

### Creating

Creating a vault item is simple. Vault items need to be JSON-serializable objects so they can be saved properly in ContextHub. In general, values stored are strings, arrays, and objects, which allows for an arbitrary nesting of values.  Below is an example of creating a vault item, then processing the response to extract the metadata given to you from ContextHub:

{% gist CHLibrarian/41275c8d6cfa5df6d2f7 %}
<br />

<a name="DataDistribution-retrievingbytags"></a>
<a data-magellan-destination="DataDistribution-retrievingbytags"></a>

### Retrieving by Tags

Retrieve a group of vault items from ContextHub by passing an array of tags to `listDocuments()`. Multiple tags returns only items that have *all* tags on the same vault item.

{% gist CHLibrarian/ec2bd32a9ee88b7ab065 %}
<br />

<a name="DataDistribution-retrievingbyid"></a>
<a data-magellan-destination="DataDistribution-retrievingbyid"></a>

### Retrieving by ID

Retrieve a specific vault item from ContextHub by passing a vault ID present either in the ContextHub developer portal or in the `VaultInfo` returned with a create/update response.

{% gist CHLibrarian/6008038d1947c45b2614 %}
<br />

<a name="DataDistribution-retrievingbykeypathval"></a>
<a data-magellan-destination="DataDistribution-retrievingbykeypathval"></a>

### Retrieving by Matching KeyPath/Value

Retrieve a group of vault items that have match a value for a given keypath, by passing a keypath, value and tags which ContextHub should search through. You'll receive an array of responses which match the given keypath/value combination in the data key of the response.

{% gist CHLibrarian/1c46b3e99cc3842390e9 %}
<br />

<a name="DataDistribution-updating"></a>
<a data-magellan-destination="DataDistribution-updating"></a>

### Updating

Updating a vault item requires passing back a structure similar to the one returned to you from create/retrieve calls with both your custom data and `VaultInfo`. ContextHub does an entire replacement of the vault item with your new data, so you must pass the entire structure, not a patch to an existing structure currently stored in the vault. This is to prevent errors from happening when multiple devices attempt to access the same record. ContextHub then updates the vault item, and triggers pushes to devices interested in vault item with that specific tag.

{% gist CHLibrarian/51ff5a783e00df3024d0 %}
<br />

<a name="DataDistribution-deleting"></a>
<a data-magellan-destination="DataDistribution-deleting"></a>

### Deleting

Deleting a vault item simply requires passing the unique id of the item. Deleting a vault item from ContextHub triggers pushes to devices interested in vault item deletions with those specific tags.

{% gist CHLibrarian/d79579c843e532532490 %}
<br />





<a name="SubscriptionsandTags"></a>
<a data-magellan-destination="SubscriptionsandTags"></a>

## Subscriptions and Tags

Subscriptions send your app background notifications whenever a contextual element like a beacon, geofence or vault item has been updated on the server so you can respond to it in real-time. Here's how to use the `SubscriptionProxy`:
<br />

<a name="SubscriptionsandTags-subscribing"></a>
<a data-magellan-destination="SubscriptionsandTags-subscribing"></a>

### Subscribing

Subscribing to a tag is simple. Pass the tag you are interested in to the `updateSubscriptions` method of `SubscriptionProxy` along with the elements you are interested in as options (`beacon`, `geofence`, or `vault`) to be subscribed to any creation, update, or deletion of elements with that tag. You can also use the more specific `updateBeaconSubscription`, `updateGeofenceSubscription`, and `updateVaultSubscription` methods to subscribe/unsubscribe to changes for a single element.

{% gist CHLibrarian/1876275ccb198d441293 %}
<br />

<a name="SubscriptionsandTags-retrieving"></a>
<a data-magellan-destination="SubscriptionsandTags-retrieving"></a>

### Retrieving

Retrieve all the tags you are subscribed to for each service by calling `listSubscriptions` and then accessing the appropriate subscriptions via the `SubscriptionResponse` class.

{% gist CHLibrarian/3790cd3661e22fe0feb8 %}
<br />

<a name="SubscriptionsandTags-unsubscribing"></a>
<a data-magellan-destination="SubscriptionsandTags-unsubscribing"></a>

### Unsubscribing

Unsubscribing from a tag is similar to subscribing.  Pass in a tag and options (same as above) so your application is no longer notified about creation, updates, or deletion of items of elements with that tag.

{% gist CHLibrarian/872f303ba35b44f57356 %}
<br />

<a name="UsingLocation"></a>
<a data-magellan-destination="UsingLocation"></a>

## Using Location

### Coming Soon

<a name="geofences"></a>
<a data-magellan-destination="geofences"></a>

## Geofences

Geofences are pre-defined areas of interest that allow your application to be notified when a device has entered or exited that region. Here's how to use `LocationService` and `GeofenceProxy` to interact with geofences:
<br />

<a name="geofences-creating"></a>
<a data-magellan-destination="geofences-creating"></a>

### Creating

Creating a geofence contextual element in ContextHub is simple. Every geofence is defined by a latitude and longitude indicating their center and a radius in meters to create the perimeter. After creation, `LocationService.getInstance().synchronize()` must be called if you do not have to push enabled so the sensor pipeline is ready to generate geofence events.

{% gist CHLibrarian/67527271aa5b0d3011f0 %}
<br />

<a name="geofences-retrievebytag"></a>
<a data-magellan-destination="geofences-retrievebytag"></a>

### Retrieving by tag

Retrieve a group of geofences from ContextHub by passing a tag to `GeofenceProxy`. Adding more tags to the same method call filters only geofences that have *all* tags on the same geofence.

{% gist CHLibrarian/6f4d2202cd9efec1eec2 %}
<br />

<a name="geofences-retrievebyid"></a>
<a data-magellan-destination="geofences-retrievebyid"></a>

### Retrieving by ID

Retrieve a specific geofence from ContextHub by passing a geofence ID present either in the ContextHub developer portal or given to you in a `Geofence` response from the SDK.

{% gist CHLibrarian/b2d3bbc50b22ea9d1838 %}
<br />


<a name="geofences-updating"></a>
<a data-magellan-destination="geofences-updating"></a>

### Updating

Updating a geofence requires passing back a structure similar to the one returned to you from create/retrieve calls. ContextHub then updates the geofence, and triggers pushes to devices interested in geofence with that specific tag.

{% gist CHLibrarian/08b89ebf1a73e2e442fe %}
<br />


<a name="geofences-deleting"></a>
<a data-magellan-destination="geofences-deleting"></a>

### Deleting

Deleting a geofence is similar to updating, and requires passing a structure similar to one returned to you from create/retrieve calls. The geofence is deleted from ContextHub, then triggers pushes to devices interested in geofence deletions with those specific tags.

{% gist CHLibrarian/cbc74600d574b9d41cf6 %}
<br />



<a name="Beacons"></a>
<a data-magellan-destination="Beacons"></a>

## Beacons

Beacons are Bluetooth 4.0 Low Energy devices that allow devices to detect proximity to objects within 50 meters. This gives you the ability to give context-sensitive information to your users in areas where GPS, WiFi, and cellular towers cannot pinpoint a user's exact location, such as deep inside buildings or underground. Here's how to use `ProximityService` and `BeaconProxy` to interact with beacons:
<br />

<a name="beacons-creating"></a>
<a data-magellan-destination="beacons-creating"></a>

### Creating

Creating a beacon contextual element in ContextHub is simple. Every beacon has a UUID (32 digit hexadecimal character, a major value (ranging from 1-65535), and a minor value (also ranging from 1-65535). UUIDs you use should be unique so beacons from other users do not interfere with your app. A combination of these three values should be unique for every beacon you have. After creation,`ProximityService.getInstance().synchronize()` must be called if you do not have to push enabled so the sensor pipeline is ready to generate beacon events.

{% gist CHLibrarian/41b57e8adda63d3cdc8d %}
<br />

<a name="beacons-retrievebytag"></a>
<a data-magellan-destination="beacons-retrievebytag"></a>

### Retrieving by tag

Retrieve a group of beacons from ContextHub by passing a tag to `BeaconProxy`. Adding more tags to the same method call filters only beacons that have *all* tags on the same beacon.

{% gist CHLibrarian/d82a917a81395950b082 %}
<br />

<a name="beacons-retrievebyid"></a>
<a data-magellan-destination="beacons-retrievebyid"></a>

### Retrieving by ID

Retrieve a specific beacon from ContextHub by passing a beacon ID present either in the ContextHub developer portal or given to you in a `Beacon` response from the SDK.

{% gist CHLibrarian/caaef7caa751977ddd13 %}
<br />


<a name="beacons-updating"></a>
<a data-magellan-destination="beacons-updating"></a>

### Updating

Updating a beacon requires passing back a structure similar to the one returned to you from create/retrieve calls. ContextHub then updates the beacon, and triggers pushes to devices interested in beacons with that specific tag.

{% gist CHLibrarian/db77bcf21f55b8bf7a07 %}
<br />


<a name="beacons-deleting"></a>
<a data-magellan-destination="beacons-deleting"></a>

### Deleting

Deleting a beacon is similar to updating, and requires passing a structure similar to one returned to you from create/retrieve calls. The beacon is deleted from ContextHub, then triggers pushes to devices interested in beacon deletions with those specific tags.

{% gist CHLibrarian/28b78f6fbd4f8c898821 %}
<br />

<a name="devices"></a>
<a data-magellan-destination="devices"></a>

## Devices

### Coming soon!
<br/>
<br/>

<a name="Logging"></a>
<a data-magellan-destination="Logging"></a>

## Logging

### Coming soon!
<br/>
<br/>
<br/>
