---
title: Push Object
layout: default
---
#Context Rules

##Push Object

The push object allows you to send foreground and background notifications to devices in a context rule. You have the option of sending notifications to devices based on their token, device id, alias, or one of many tags they may have. By allowing for notifications to be sent based on different groups, you can abstract away some of the complexity of sending push messages to devices and focus more on the core logic of your application. Here's how to use the `push` object to send push notifications:
<br />
<br />

### Sending (Foreground)

There are four ways to send a push message to devices in the foreground: token, device id, alias, and tags. Each method takes the identifier plus the message to be sent.

{% gist CHLibrarian/f5aab36ce20d86828099 %}
<br />

### Sending (Background)

There are four ways to send a push message to devices in the background: token, device id, alias, and tags. Each method takes the identifier, the data to be sent, and an optional sound to be played when a push is received (a push with "" for a sound isn't played at all and becomes a silent notification). For iOS devices, silent notifications do not have guaranteed delivery, and may piggyback a foreground notification if rate-limited.

{% gist CHLibrarian/00bbaea42964509b55b1 %}
<br />