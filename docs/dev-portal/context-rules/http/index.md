---
title: HTTP Object
layout: default
---
#Context Rules

##HTTP Object

The HTTP object allows you to fire webhooks to other services in a context rule. This allows you to communicate with external servers inside ContextHub to provide two-way communication with devices that have generated events such as IoT-like devices like the Raspberry Pi, Arduino, or Electric Imp. 
<br />

### GET

The GET method allows you to perform an HTTP GET request to a specific URL. The `parameters` parameter lets you pass in a hash which will be converted to a long string-escaped GET URL (`?message=get%20message%20from%20webhook`)

{% gist CHLibrarian/9a5e0f673a526ee790a2 %}
<br />

### POST

The POST method allows you to perform HTTP POST request to a sepcific URL. The `body` parameter lets you pass a body with the request, and headers lets you set custom headers with the request.

{% gist CHLibrarian/ae16587c627cf3e8d520 %}
<br />