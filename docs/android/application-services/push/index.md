---
title: Application Services
layout: default
---
#Application Services

##PUSH NOTIFICATIONS

Push notifications let you send foreground messages which your users will be alerted to as well as background notifications which trigger your app to perform processing. Combined with elements that trigger events, this allows for increased functionality that forms the foundation of most apps that use ContextHub. Here's how to use it:
<br />

### Registering

Registering for push involves a one line call to `Push.init()` with your Google Cloud Messaging (GCM) sender id. You can optionally specify an alias, tags, and a custom push notfication handler.

{% gist CHLibrarian/0e3b504ba329611a5d4b %}
<br />

### Sending to device(s)

Sending to a device is as simple as sending an array of device IDs along with the `NSDictionary` containing the message you want sent. The push message will then get queued to be processed in a first-in, first-out basis on the server.

{% gist CHLibrarian/5e6c22663d79a8cbfadd %}
<br />

### Sending to alias(es)

Sending to an alias is similar to sending to a device, where ContextHub will figure out which alias maps to a device to send a notification. Remember that unlike device IDs, aliases are not required to be unique, so sending a message to "Android" will send to *all* devices with that alias. It is therefore recommended to pick an alias that is unlikely to be confliciting at the global scope of your app (hashed usernames are a good choice).

{% gist CHLibrarian/8f369dfe08629a0f4e3c %}
<br />

### Sending to tag(s)

Sending to tags are also similar to sending to devices and aliases where you specify the tags to send a message to. Tags also are not required to be unique, and since a device can have multiple tags, it is possible for a device to receive multiple messages if you send the same message to multiple tags. Keep this in mind when building the logic in your app if that is undesired behavior.

{% gist CHLibrarian/d9dabae73866762912b0 %}
<br />

### Sending custom data

In addition to sending simple push notifications with a message, you can also send notifications with custom data. To do this, create a class to represent your data structure and specify it as the generic type parameter when creating your `PushNotification` instance.

{% gist CHLibrarian/1a1dda15af234a929f29 %}
<br />

### Receiving

Receiving a notification is as simple as implementing the `PushPayloadHandler` interface with your custom code and passing an instance of your handler class in the call to `Push.init()`. You can pull out information from the notification such as message or custom data, and act on it appropriately. This method will get called even if your app isn't running if the push is a background push (displaying a notification to the user like the example below is optional). Since ContextHub has background pushes that keep `SensorPipeline` in sync, use this pattern to ensure that your app always has the latest data about element services that generate events.

{% gist CHLibrarian/796f09a0243058d30962 %}
<br />