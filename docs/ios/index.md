---
title: Getting Started - iOS
layout: default
group: "ios"
---



# iOS

<a name="RegistrationandSetup"></a>
<a data-magellan-destination="RegistrationandSetup"></a>

## Registration and Setup

### Registration

On ContextHub, you create a separate app for each of your mobile applications. Each app has its own application id which you will use to register with the ContextHub iOS SDK. Each account on ContextHub can have multiple application ids for multiple apps. This lets you accommodate both testing and production versions of your app with the same account.

### Sign Up

Sign up for [ContextHub](http://www.contexthub.com) by either creating a username/password or using your GitHub credentials.


<a name="PushNotifications"></a>
<a data-magellan-destination="PushNotifications"></a>

## PushNotifications

Push notifications let you send foreground messages which your users will be alerted to as well as background notifications which trigger your app to run for up to 30 seconds. Combined with elements that trigger events, this allows for increased functionality that forms the foundation of most apps that use ContextHub. Here's how to use it:
<br />

<a name="PushNotifications-registering"></a>
<a data-magellan-destination="PushNotifications-registering"></a>

### Registering

Registering for push involves telling the device what kind of notification types you wish to use (badge, alert, sound). That triggers a request to the user asking for permission for those alerts (which they can deny), then Apple Push Notifications gives you a token which `CCHPush` uses along with an associated alias and set of tags to tell ContextHub which devices to get which messages. 

{% gist CHLibrarian/8b4d81f756ef8588629c %}
<br />

<a name="PushNotifications-settingup"></a>
<a data-magellan-destination="PushNotifications-settingup"></a>

### Setting Up

Setting up push involves creating an `NSDictionary` which the pre-specified keys to send the message you want. Keys are optional based on what kind of message you would like to send (foreground of background) and additional information can be sent along with the push. The total message must be under 256 bytes or it will not be delivered.

{% gist CHLibrarian/ba3e71b262534e412e13 %}
<br />

<a name="PushNotifications-sendingtodevice"></a>
<a data-magellan-destination="PushNotifications-sendingtodevice"></a>

### Sending to Device(s)

Sending to a device is as simple as sending an array of device IDs along with the `NSDictionary` containing the message you want sent. The push message will then get queued to be processed in a first-in, first-out basis on the server.

{% gist CHLibrarian/3f4f606b815eaf8eb544 %}
<br />

<a name="PushNotifications-sendingtoalias"></a>
<a data-magellan-destination="PushNotifications-sendingtoalias"></a>

### Sending to Alias(es)

Sending to an alias is similar to sending to a device, where ContextHub will figure out which alias maps to a device to send out a message. Remember that unlike device IDs, aliases are not requiring to be unique, so sending a message to "iPhone" will send to *all* devices with that alias. It is therefore recommended to pick an alias that is unlikely to be confliciting at the global scope of your app (hashed usernames are a good choice).

{% gist CHLibrarian/b99996c76275660f3ce8 %}
<br />

<a name="PushNotifications-sendingtotags"></a>
<a data-magellan-destination="PushNotifications-sendingtotags"></a>

### Sending to Tag(s)

Sending to tags are also similar to sending to devices and aliases where `CCHPush` takes an array of tags to send a message to. Tags also are not required to be unique, and since a device can have multiple tags, it is possible for a device to receive multiple messages if you send the same message to multiple tags. Keep this in mind when building the logic in your app if that is undesired behavior.

{% gist CHLibrarian/b7b22d69ba1d81143704 %}
<br />

<a name="PushNotifications-receiving"></a>
<a data-magellan-destination="PushNotifications-receiving"></a>

### Receiving

Receiving a message is as simple as defining a completion handler with your custom code and passing that to `CCHPush` to be called at the appropriate time. You can pull out information from the notification such as message or custom data, and act on it appropriately. This method will get called even if your app isn't running if the push is a background push (presence of "aps.content-available" key with a value of 1). Since ContextHub has background pushes that keep `CCHSensorPipeline` in sync, use this pattern to ensure that your app always has the latest data about element services that generate events.

{% gist CHLibrarian/8f965baac6e4e7ddfefd %}
<br />


<a name="Events"></a>
<a data-magellan-destination="Events"></a>

## Events

Events are generated in ContextHub through the `CCHSensorPipeline` class which allows your application to turn on and off what elements a device is aware of and will then flow up to ContextHub for processing. You can listen in on a variety of events including *beacon_in*, *beacon_out*, and *beacon_changed* events, *geofence_in* and *geofence_out* events, and then *location_changed* and *motion_changed* events. 

Note: In order to conserve battery life, only events which are subscribed to will generate events in ContextHub (with exception of *location_changed*)

<a name="Events-protocols"></a>
<a data-magellan-destination="Events-protocols"></a>

### Protocols

ContextHub provides control over events being processed through two protocols: `CCHSensorPipelineDataSource` and `CCHSensorPipelineDelegate`. This allows you to determine which events should, will and have been posted to the ContextHub server as additional control points. You will also have the ability to add custom payloads to your events which you can use in your context rules written in the ContextHub developer portal. Below is how to setup these two protocols in your application.

{% gist CHLibrarian/c6e525f61ac33daf0dd1 %}
<br />

<a name="Events-subscribing"></a>
<a data-magellan-destination="Events-subscribing"></a>

### Subscribing

Subscribing to a tag turns on the sensor pipeline to start generating events from elements with that tag. This allows you complete flexibility in having many geofence and beacon elements present in the ContextHub portal, but have only a few specific elements trigger events within your application on a user's device. Below is how to subscribe to a tag with the SDK:

{% gist CHLibrarian/e4a5ca8a6aafd7c74a1f %}
<br />

<a name="Events-observing"></a>
<a data-magellan-destination="Events-observing"></a>

### Observing

In order to listen to events being generated from ContextHub, you have the option of observing whether a method should be called if an event will be posted, has been posted, or was canceled. You do this by adding an observer to `NSNotificationCenter` which will call your method(s) immediately after ContextHub raises the appropriate notification. Not all of these notifications need to be observed in a single application, pick and choose the one that best fills your needs.

{% gist CHLibrarian/76dd487466d712d716b2 %}
<br />

<a name="Events-handling"></a>
<a data-magellan-destination="Events-handling"></a>

### Handling

Finally, you'll start getting notifications sent to your method about events. Your method signature will have a simple structure as written below, with the event present in the `object` property of the notification for you to inspect. Note that *all* events will pass as notifications to this method, so you'll need to inspect the event to distinguish between for example a geofence_in event from a beacon_out event.

{% gist CHLibrarian/219985e1b47202b7f80b %}
<br />

<a name="Events-unsubscribing"></a>
<a data-magellan-destination="Events-unsubscribing"></a>

### Unsubscribing

Unsubscribing to a tag is very similar to subscribing, and turns off the sensor pipeline to notifications from elements with that tag. Be sure to also stop observing posted notifications at the appropriate time in your app to prevent potential bugs and crashes.

{% gist CHLibrarian/921338791c871c67d269 %}
<br />

<a name="DataDistribution"></a>
<a data-magellan-destination="DataDistribution"></a>

## Data Distribution

Vault lets you save data to the server which all devices and context rules can access. Combined with element services, it allows beacons and geofences to have state. Here's how to use `CCHVault`:
<br />

<a name="DataDistribution-creating"></a>
<a data-magellan-destination="DataDistribution-creating"></a>

### Creating

Creating a vault item is simple. Vault items need to be JSON-serializable `NSDictionary` items so they can be saved properly in ContextHub. In general, values stored are strings, arrays, and dictionaries, which allows for an arbitrary nesting of values.  Below is an example of creating a vault item, then processing the response to extract the metadata given to you from ContextHub:

{% gist CHLibrarian/d013c0329fe1b76c4573 %}
<br />


<a name="DataDistribution-response"></a>
<a data-magellan-destination="DataDistribution-response"></a>

### Response

Once a vault item is created, a dictionary response is returned with two keys, `data` and `vault_info`. `data` contains your data which you meant to save in ContextHub. `vault_info` stores some metadata about your vault information and contains information like the `id`, `tags`, `created_at`, and `updated_at` timestamps. Here's the structure of a vault item that was created above:

{% gist CHLibrarian/84472db06d3fd5cb3301 %}
<br />

<a name="DataDistribution-retrievingbytags"></a>
<a data-magellan-destination="DataDistribution-retrievingbytags"></a>

### Retrieving by Tags

Retrieve a group of vault items from ContextHub by passing a tag to `CCHVault`. Adding more tags to the same method call filters only items that have *all* tags on the same vault item.

{% gist CHLibrarian/77df801086743a8159e7 %}
<br />

<a name="DataDistribution-retrievingbyid"></a>
<a data-magellan-destination="DataDistribution-retrievingbyid"></a>

### Retrieving by ID

Retrieve a specific vault item from ContextHub by passing a vault ID present either in the ContextHub developer portal or given to you as a dictionary response from the SDK at the keypath "vault_info.id".

{% gist CHLibrarian/03e46b12816e092a1f21 %}
<br />

<a name="DataDistribution-retrievingbykeypathval"></a>
<a data-magellan-destination="DataDistribution-retrievingbykeypathval"></a>

### Retrieving by Matching KeyPath/Value

Retrieve a group of vault items that have match a value for a given keypath, by passing a keypath, value and tags which ContextHub should search through. You'll receive an array of responses which match the given keypath/value combination in the data key of the response.

{% gist CHLibrarian/beb09796768d42ce9523 %}
<br />

<a name="DataDistribution-updating"></a>
<a data-magellan-destination="DataDistribution-updating"></a>

### Updating

Updating a vault item requires passing back a structure similar to the one returned to you from create/retrieve calls with both data and vault_info keys. ContextHub does an entire replacement of the vault item with your new data, so you must pass the entire structure, not a patch to an existing structure currently on the vault. This is to prevent errors from happening when multiple devices attempt to access the same record. ContextHub then updates the vault item, and triggers pushes to devices interested in vault item with that specific tag.

{% gist CHLibrarian/07bb9aa25f2dec34c353 %}
<br />

<a name="DataDistribution-deleting"></a>
<a data-magellan-destination="DataDistribution-deleting"></a>

### Deleting

Deleting a vault item is similar to updating, and requires passing a strecture similar to one returned to you from create/retrieve calls with bot data and vault_info keys. The vault item is deleted from ContextHub, then triggers pushes to devices interested in vault item deletions with those specific tags.

{% gist CHLibrarian/593a3e39950d6ccf6d28 %}
<br />





<a name="SubscriptionsandTags"></a>
<a data-magellan-destination="SubscriptionsandTags"></a>

## Subscriptions and Tags

Subscriptions send your app background notifications whenever a contextual element like a beacon, geofence or vault item has been updated on the server so you can respond to it in real-time. Here's how to use the `CCHSubscriptionService`:
<br />

<a name="SubscriptionsandTags-subscribing"></a>
<a data-magellan-destination="SubscriptionsandTags-subscribing"></a>

### Subscribing

Subscribing to a tag is simple. Pass the tag you are interested in to `CCHSubscriptionService` along with the elements you are interested in as options (`CCHOptionBeacon`, `CCHOptionDevice`, `CCHOptionGeofence`, `CCHOptionVault`, or `nil` to get all of them) to be subscribed to any creation, update, or deletion of elements with that tag.

{% gist CHLibrarian/702e5903bc757eeeaca5 %}
<br />

<a name="SubscriptionsandTags-retrieving"></a>
<a data-magellan-destination="SubscriptionsandTags-retrieving"></a>

### Retrieving

Retrieve all the tags you are subscribed to for each service by calling `[CCHSubscriptionService getSubscriptionsWithCompletion:]` then accessing the appropriate key in the dictionary.

{% gist CHLibrarian/49d41f8d7a613ef3fb11 %}
<br />

<a name="SubscriptionsandTags-unsubscribing"></a>
<a data-magellan-destination="SubscriptionsandTags-unsubscribing"></a>

### Unsubscribing

Unsubscribing from a tag is similar to subscribing by passing in a tag and options (same as above) so your application is no longer notified about creation, updates, or deletion of items of elements with that tag.

{% gist CHLibrarian/4babb7b758ed8bac9500 %}
<br />

<a name="UsingLocation"></a>
<a data-magellan-destination="UsingLocation"></a>

## Using Location

### Coming Soon

<a name="geofences"></a>
<a data-magellan-destination="geofences"></a>

## Geo Fences

Geofences are pre-defined areas of interest that allow your application to be notified when a device has entered or exited that region. Here's how to use `CCHGeofenceService` to interact with geofences:
<br />

<a name="geofences-creating"></a>
<a data-magellan-destination="geofences-creating"></a>

### Creating

Creating a geofence contextual element in ContextHub is simple. Every geofence is defined by a latitude and longitude indicating their center and a radius in meters to create the perimeter. You can also create a standard `CLCircularRegion` class from the response for use in your app. After creation, `[CCHSensorPipeline synchronize]` must be called if you do not have to push enabled so the sensor pipeline is ready to generate geofence events.

{% gist CHLibrarian/604928d3705c3d0d78cd %}
<br />

<a name="geofences-retrievebytag"></a>
<a data-magellan-destination="geofences-retrievebytag"></a>

### Retrieving by Tag

Retrieve a group of geofences from ContextHub by passing a tag to `CCHGeofenceService`. Adding more tags to the same method call filters only geofence that have *all* tags on the same geofence.

{% gist CHLibrarian/b77f33f3c577feccf18a %}
<br />

<a name="geofences-retrievebyid"></a>
<a data-magellan-destination="geofences-retrievebyid"></a>

### Retrieving by ID

Retrieve a specific geofence from ContextHub by passing a geofence ID present either in the ContextHub developer portal or given to you as a dictionary response from the SDK at the key "id".

{% gist CHLibrarian/3d527dbdc110900b694d %}
<br />


<a name="geofences-updating"></a>
<a data-magellan-destination="geofences-updating"></a>

### Updating

Updating a geofence requires passing back a structure similar to the one returned to you from create/retrieve calls. ContextHub then updates the geofence, and triggers pushes to devices interested in geofence with that specific tag.

{% gist CHLibrarian/81a90f9f2c08c4f35cf2 %}
<br />


<a name="geofences-deleting"></a>
<a data-magellan-destination="geofences-deleting"></a>

### Deleting

Deleting a geofence is similar to updating, and requires passing a structure similar to one returned to you from create/retrieve calls. The geofence is deleted from ContextHub, then triggers pushes to devices interested in geofence deletions with those specific tags.

{% gist CHLibrarian/fec0abd474cf6c1acc36 %}
<br />



<a name="Beacons"></a>
<a data-magellan-destination="Beacons"></a>

## Beacons

Beacons are Bluetooth 4.0 Low Energy devices that allow devices to detect proximity to objects within 50 meters. This gives you the ability to give context-sensitive information to your users in areas where GPS, WiFi, and cellular towers cannot pinpoint a user's exact location, such as deep inside buildings or underground. Here's how to use `CCHBeaconService` to interact with beacons:
<br />

<a name="beacons-creating"></a>
<a data-magellan-destination="beacons-creating"></a>

### Creating

Creating a beacon contextual element in ContextHub is simple. Every beacon has a UUID (32 digit hexadecimal character, a major value (ranging from 1-65535), and a minor value (also ranging from 1-65535). UUIDs you use should be unique so beacons from other user's do not interfere with your app. A combination of these three values should be unique for every beacon you have. You can also create a standard `CLBeaconRegion` class from the response for use in your app. After creation,`[CCHSensorPipeline synchronize:]` must be called if you do not have to push enabled so the sensor pipeline is ready to generate beacon events. 

{% gist CHLibrarian/9a88528f3c94bc524a47 %}
<br />

<a name="beacons-retrievebytag"></a>
<a data-magellan-destination="beacons-retrievebytag"></a>

### Retrieving by Tag

Retrieve a group of beacons from ContextHub by passing a tag to `CCHBeaconService`. Adding more tags to the same method call filters only beacons that have *all* tags on the same beacon.

{% gist CHLibrarian/8a124104fe165ca06deb %}
<br />

<a name="beacons-retrievebyid"></a>
<a data-magellan-destination="beacons-retrievebyid"></a>

### Retrieving by ID

Retrieve a specific beacon from ContextHub by passing a beacon ID present either in the ContextHub developer portal or given to you as a dictionary response from the SDK at the key "id".

{% gist CHLibrarian/40cb8d5346a7773b0daa %}
<br />


<a name="beacons-updating"></a>
<a data-magellan-destination="beacons-updating"></a>

### Updating

Updating a beacon requires passing back a structure similar to the one returned to you from create/retrieve calls. ContextHub then updates the beacon, and triggers pushes to devices interested in beacons with that specific tag.

{% gist CHLibrarian/d9bc6b5675b062b11dbf %}
<br />


<a name="beacons-deleting"></a>
<a data-magellan-destination="beacons-deleting"></a>

### Deleting

Deleting a beacon is similar to updating, and requires passing a structure similar to one returned to you from create/retrieve calls. The beacon is deleted from ContextHub, then triggers pushes to devices interested in beacon deletions with those specific tags.

{% gist CHLibrarian/191d805bf82b563cabf0 %}
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
