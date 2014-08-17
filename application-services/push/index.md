---
title: Application Services
layout: default
---
#Application Services

##PUSH NOTIFICATIONS

Push notifications let you send foreground messages which your users will be alerted to as well as background notifications which trigger your app to run for up to 30 seconds. Combined with elements that trigger events, this allows for increased functionality that forms the foundation of most apps that use ContextHub. Here's how to use it:

### Registering

Registering for push involves telling the device what kind of notification types you wish to to use (badge, alert, sound). That triggers a request to the user asking for permission for those alerts (which they can deny), then Apple Push Notifications gives you a token which `CCHPush` uses along with an associated alias and set of tags to tell ContextHub which devices to get which messages. 

{% gist CHLibrarian/8b4d81f756ef8588629c %}
<br />

### Setting up a push

Setting up push involves creating an `NSDictionary` which the pre-specified keys to send the message you want. Keys are optional based on what kind of message you would like to send (foreground of background) and additional information can be sent along with the push. The total message must be under 256 bytes or it will not be delivered.

{% gist CHLibrarian/ba3e71b262534e412e13 %}
<br />

### Sending to device(s)

Sending to a device is as simple as sending an array of device IDs along with the `NSDictionary` containing the message you want sent. The push message will then get queued to be processed in a first-in, first-out basis on the server.

{% gist CHLibrarian/3f4f606b815eaf8eb544 %}
<br />

### Sending to alias(es)

Sending to an alias is similar to sending to a device, where ContextHub will figure out which alias maps to a device to send out a message. Remember that unlike device IDs, aliases are not requiring to be unique, so sending a message to "iPhone" will send to *all* devices with that alias. It is therefore recommended to pick an alias that is unlikely to be confliciting at the global scope of your app (hashed usernames are a good choice).

{% gist CHLibrarian/b99996c76275660f3ce8 %}
<br />

### Sending to tag(s)

Sending to tags are also similar to sending to devices and aliases where `CCHPush` takes an array of tags to send a message to. Tags also are not required to be unique, and since a device can have multiple tags, it is possible for a device to receive multiple messages if you send the same message to multiple tags. Keep this in mind when building the logic in your app if that is undesired behavior.

{% gist CHLibrarian/b7b22d69ba1d81143704 %}
<br />

### Receiving

Receiving a message is as simple as defining a completion handler with your custom code and passing that to `CCHPush` to be called at the appropriate time. You can pull out information from the notification such as message or custom data, and act on it appropriately. This method will get called even if your app isn't running if the push is a background push (presence of "aps.content-available" key with a value of 1). Since ContextHub has background pushes that keep `CCHSensorPipeline` in sync, use this pattern to ensure that your app always has the latest data about element services that generate events.

{% gist CHLibrarian/8f965baac6e4e7ddfefd %}
<br />