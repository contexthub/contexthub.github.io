---
title: Triggers
layout: default
---

#Triggers

Triggers are specially crafted, application-specific URLs generated by ContextHub that let you trigger your own custom events from any web browser, JavaScript script, Arduino, Raspberry Pi, or other IoT device. Triggers are perfect for integrating new platforms not yet directly supported by our SDKs into your own applications.

<a name="triggers-creating" data-magellan-destination="triggers-creating"></a>


##Creating

Creating a trigger is simple. In the developer portal, select an app, then click on *Settings*, then the *Triggers* tab to see all the triggers for you app. To create a new trigger, click the *New Trigger* button and type in a name of the trigger. A generated trigger looks like this:

`https://app.contexthub.com/api/triggers/:token/:event_name`

- `:token` - random alphanumeric string generated by ContextHub tying the events for the trigger directly to your app
    - Example: `1782914xneuuoy26b6g45swco`
- `:event_name` - name of the event which will match the context rule during rule processing
    - Example: `arduino_event`

So the full URL for a trigger linked to your app that would post the `arduino_event` would be:

`https://app.contexthub.com/api/triggers/1782914xneuuoy26b6g45swco/arduino_event`

<a name="triggers-posting" data-magellan-destination="triggers-posting"></a>

##Posting

To use a trigger, you need to generate an HTTP POST request with the appropriate token and event name, along with posting the JSON body that represents the data for your event. The web request should have the `Content-Type` header set to `application/json` so the body is parsed correctly. A web tool like [Hurl.it](http://www.hurl.it) is a great way to test that your triggers are working correctly and you are passing the correct data to a context rule.