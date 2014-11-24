---
title: 
layout: default
---

<h1 id="contextual_engine">Contextual Engine</h1>

<h2 id="contexts">CONTEXTS</h2>

<p>The contextual engine evaluates contextual rules written in JavaScript to respond to events triggered by devices and sensors to cause actions which happen on the ContextHub server which affect other devices. These actions include sending push notification, storing data in vault, sending and receiving http requests, and logging console data to your server logs. These actions happen through objects which have a set of methods available to you to create powerful contexts in your applications.</p>

<h3 id="objects">Objects</h3>

<h4 id="event">Event</h4>

<p>This object contains the information which triggered the event. Within every event object contains the name, data, payload, and context keys available for you to access.</p>

<p>Sample event:</p>
<script src='https://gist.github.com/Kevinwlee/a561eebf2c95acb43c69.js'><![CDATA[ ]]></script>
<h5 id="specifics">Specifics</h5>

<ul>
<li>Name - name of the event, which matches one of the available event types</li>

<li>Data - data for each event matches its event type</li>
</ul>

<h5 id="beacons_inout">Beacons In/out</h5>
<script src='https://gist.github.com/Kevinwlee/4d590d9baa29084edfde.js'><![CDATA[ ]]></script>
<h5 id="beacon_changed">Beacon Changed</h5>
<script src='https://gist.github.com/Kevinwlee/a6915dc76c05adf86d2a.js'><![CDATA[ ]]></script>
<h5 id="geofences_inout">Geofences In/out</h5>
<script src='https://gist.github.com/Kevinwlee/b056f1eab3712b528d0e.js'><![CDATA[ ]]></script>
<h5 id="location_changed">Location Changed</h5>
<script src='https://gist.github.com/Kevinwlee/a059f2277a0620431fe1.js'><![CDATA[ ]]></script><!--
#####Motion Changed

<script src="https://gist.github.com/Kevinwlee/d97b5608522e8912d641.js"> </script> -->
<ul>
<li>Context - The array contains event data for each of the context types that you have used in your contexts on ContextHub.</li>

<li>Device - info specific to the device which triggered the event</li>
</ul>
<script src='https://gist.github.com/Kevinwlee/8856e24cf1564470d52f.js'><![CDATA[ ]]></script>
<ul>
<li>Payload - this is additional data sent by your application in addition to the event data. It is defined as a CCHSensorPipelineDataSource protocol method for you to implement.</li>
</ul>

<h4 id="push">Push</h4>

<p>This object allows you to send foreground (with alert messages) and background (without alert messages) push notifications to either devices, aliases, tags or push tokens. Writing rules to send to specific push tokens is discouraged, as a push token has no guarantee of staying the same for the lifetime of an application installation.</p>
<script src='https://gist.github.com/jeffkibbule/1ca14a51402b3b06288e.js'><![CDATA[ ]]></script>
<h4 id="vault">Vault</h4>

<p>This object allows you to store information within the vault directly from a contextual rule. You have the ability to create, retrieve (by id, keypath, and tag), update, and delete vault items.</p>
<script src='https://gist.github.com/jeffkibuule/57776c703c24f4f16ce7.js'><![CDATA[ ]]></script>
<h4 id="console">Console</h4>

<p>This object allows you to log messages into your server logs to diagnose potential issues in your contextual rule as well as keep a record of what has occurred.</p>
<script src='https://gist.github.com/jeffkibuule/532e7c902d8661da5529.js'><![CDATA[ ]]></script>
<h4 id="rules">Rules</h4>

<p>Each rule written is triggered when a specific event type is posted to the ContextHub server from a device and then evaluated. Using the objects listed above, you can create complex rules using JavaScript and trigger events to occur. Rules have 30 seconds to finish processing before they timeout.</p>

<h4 id="example">Example</h4>

<p>For example, a simple rule that logs and stores a geofence event in the vault would look like this:</p>
<script src='https://gist.github.com/Kevinwlee/43d707615ab3f3b5cb8f.js'><![CDATA[ ]]></script>