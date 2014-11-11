---
title: Application Services
layout: default
---
#Application Services

##Vault

Vault lets you save data to the server which all devices and context rules can access. Combined with element services, it allows beacons and geofences to have state. Here's how to use `VaultProxy`:
<br />

### Creating

Creating a vault item is simple. Vault items need to be JSON-serializable objects so they can be saved properly in ContextHub. In general, values stored are strings, arrays, and objects, which allows for an arbitrary nesting of values.  Below is an example of creating a vault item, then processing the response to extract the metadata given to you from ContextHub:

{% gist CHLibrarian/41275c8d6cfa5df6d2f7 %}
<br />

### Retrieving by Tags

Retrieve a group of vault items from ContextHub by passing an array of tags to `listDocuments()`. Multiple tags returns only items that have *all* tags on the same vault item.

{% gist CHLibrarian/ec2bd32a9ee88b7ab065 %}
<br />

### Retrieving by ID

Retrieve a specific vault item from ContextHub by passing a vault ID present either in the ContextHub developer portal or in the `VaultInfo` returned with a create/update response.

{% gist CHLibrarian/6008038d1947c45b2614 %}
<br />

### Retrieving by Matching KeyPath/Value

Retrieve a group of vault items that have match a value for a given keypath, by passing a keypath, value and tags which ContextHub should search through. You'll receive an array of responses which match the given keypath/value combination in the data key of the response.

{% gist CHLibrarian/1c46b3e99cc3842390e9 %}
<br />

### Updating

Updating a vault item requires passing back a structure similar to the one returned to you from create/retrieve calls with both your custom data and `VaultInfo`. ContextHub does an entire replacement of the vault item with your new data, so you must pass the entire structure, not a patch to an existing structure currently stored in the vault. This is to prevent errors from happening when multiple devices attempt to access the same record. ContextHub then updates the vault item, and triggers pushes to devices interested in vault item with that specific tag.

{% gist CHLibrarian/51ff5a783e00df3024d0 %}
<br />

### Deleting

Deleting a vault item simply requires passing the unique id of the item. Deleting a vault item from ContextHub triggers pushes to devices interested in vault item deletions with those specific tags.

{% gist CHLibrarian/d79579c843e532532490 %}
<br />