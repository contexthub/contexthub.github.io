---
title: Application Services
layout: default
---
#Application Services

##Vault

Vault lets you save data to the server which all devices and context rules can access. Combined with element services, it allows beacons and geofences to have state. Here's how to use `CCHVault`:
<br />

### Creating

Creating a vault item is simple. Vault items need to be JSON-serializable `NSDictionary` items so they can be saved properly in ContextHub. In general, values stored are strings, arrays, and dictionaries, which allows for an arbitrary nesting of values.  Below is an example of creating a vault item, then processing the response to extract the metadata given to you from ContextHub:

{% gist CHLibrarian/d013c0329fe1b76c4573 %}
<br />

### Response

Once a vault item is created, a dictionary response is returned with two keys, `data` and `vault_info`. `data` contains your data which you meant to save in ContextHub. `vault_info` stores some metadata about your vault information and contains information like the `id`, `tags`, `created_at`, and `updated_at` timestamps. Here's the structure of a vault item that was created above:

{% gist CHLibrarian/84472db06d3fd5cb3301 %}
<br />

### Retrieving by Tags

Retrieve a group of vault items from ContextHub by passing a tag to `CCHVault`. Adding more tags to the same method call filters only items that have *all* tags on the same vault item.

{% gist CHLibrarian/77df801086743a8159e7 %}
<br />

### Retrieving by ID

Retrieve a specific vault item from ContextHub by passing a vault ID present either in the ContextHub developer portal or given to you as a dictionary response from the SDK at the keypath "vault_info.id".

{% gist CHLibrarian/03e46b12816e092a1f21 %}
<br />

### Retrieving by Matching KeyPath/Value

Retrieve a group of vault items that have match a value for a given keypath, by passing a keypath, value and tags which ContextHub should search through. You'll receive an array of responses which match the given keypath/value combination in the data key of the response.

{% gist CHLibrarian/beb09796768d42ce9523 %}
<br />

### Updating

Updating a vault item requires passing back a structure similar to the one returned to you from create/retrieve calls with both data and vault_info keys. ContextHub does an entire replacement of the vault item with your new data, so you must pass the entire structure, not a patch to an existing structure currently on the vault. This is to prevent errors from happening when multiple devices attempt to access the same record. ContextHub then updates the vault item, and triggers pushes to devices interested in vault item with that specific tag.

{% gist CHLibrarian/07bb9aa25f2dec34c353 %}
<br />

### Deleting

Deleting a vault item is similar to updating, and requires passing a strecture similar to one returned to you from create/retrieve calls with bot data and vault_info keys. The vault item is deleted from ContextHub, then triggers pushes to devices interested in vault item deletions with those specific tags.

{% gist CHLibrarian/593a3e39950d6ccf6d28 %}
<br />