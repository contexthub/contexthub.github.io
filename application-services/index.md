---
title: Application Services
layout: default
---
#Application Services

##PUSH NOTIFICATIONS

`CCHPush` deals with registering, sending and receiving push notifications within ContextHub. This is covered in greater detail in the [WayFinder v3.0 sample app](https://github.com/contexthub/Wayfinder/tree/wayfinder-v3.0) (including generating private keys and certs).

###Registering

{% gist Kevinwlee/f7e3567823ba985cff1e %}

Call to trigger the device to get a push notification token from Apple's servers. This is often called in the
`[application: didFinishLaunchingWithOptions:]`
method in your application delegate.

Then in your `[application: didRegisterforRemoteNotificationsWithDeviceToken:]` method, pass that push token to `[[CCHPush sharedInstance] registerDeviceToken: alias: tags: completionHandler:^(NSError *error) {}]` method.

Aliases are a way of abstracting a user's devices to be less dependent on a specific push token (as they may change for a number of reasons). They need not be unique, a common pattern is to hash a user's username or email address so it is the same between multiple devices, and a single push is sent to all a user's devices at once. Do not store personally identifiable information in the alias, salt and hash it to keep it from being easily discoverable.

Tags are a method of organizing specific groups of devices to have push notifications sent to. Tags are meant to be more general than aliases, as a device can have many tags but only one alias.

If you need to change the alias or tags for a device, simply call `[[CCHPush sharedInstance] registerDeviceToken: alias: tags: completionHandler:^(NSError *error) {}]` again to update that info on the server.

At this point, if everything is working, when your app is launched, a popup will appear asking for permission to accept remote notifications.

###Sending

You have three options for sending push notifications to other devices: by device id, alias, and tag. Each method accepts an array of identifiers to send a push at once. You need to construct an `NSDictionary` that has at least the alert key set with your message in order to be delivered with a visible notification. Other optional keys include sound and badge, which let you set what sound to play or badge number to set. `Content-available` is another key that allows you to set whether a message should be sent in the background as a silent notification which will not alert the user so your app can process data in the background. Here are the methods you can use:

#####To Device(s)

{% gist Kevinwlee/fba5b225958b15102908 %}

#####To Alias(es)

{% gist Kevinwlee/597008f760d801a7a60e %}

#####To Tags(s)

{% gist Kevinwlee/5441ae0e39e9a2cb50d4 %}

###Receiving

Receiving and responding to push notifications happens with a simple method implemented in your application delegate: `[application: didReceiveRemoteNotification: fetchCompletionHandler:]`

Call `[[CCHPush sharedInstance] application: didReceiveRemoteNotification: completionHandler: {}]` on all remote notifications. Within the completion handler, you can put your own code in to process notifications that are not from ContextHub. Be sure to still call the completionHandler with either `UIBackgroundFetchResultNewData/NoData/Failed` method so iOS knows how often to launch your app in the background for processing.

##VAULT

`CCHVault` allows you persist important information so it can live on the ContextHub server. You have the ability to create, retrieve, update, and delete (CRUD) vault items with an associated tag.

###Creating

For example, let's say we wanted to store a bit of extra information about a beacon. We would store the UUID, major and minor which unique identifies the beacon, plus its associated data in an NSDictionary to be sent up to the server.

Our sample dictionary item:

{% gist Kevinwlee/66d710b2e0d26181f555 %}

Then create that item on the server:

{% gist Kevinwlee/49b920d934cf5b678cba %}

###Retrieving

Retrieving a vault item to change it is also similarly easy. You can retrieve beacons by either id (unique) or by tag (array).

#####Retrieval by id:

{% gist Kevinwlee/3aefa9607cd8b76f2c26 %}

#####Retrieval by tag:

{% gist Kevinwlee/9c68a1552b57202c72cf %}

`completionHandler:^(NSArray *responses, NSError *error) {}];`

###Updating

Updating a vault item is a single call

{% gist Kevinwlee/bbd87069f922eb549b91 %}

###Deleting

Deleting a vault item is also similar

{% gist Kevinwlee/3c49553e338255152981 %}