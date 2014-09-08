---
title: Vault Object
layout: default
---
#Context Rules

##Vault Object

Vaults are pre-defined areas of interest that allow your application to be notified when a device has entered or exited that region. Here's how to use the `vault` object to interact with vault:
<br />
<br />

### Creating

Creating a vault item is simple. Vault items need to be JSON-serializable `NSDictionary` items so they can be saved properly in ContextHub. In general, values stored are numbers, strings, arrays, and dictionaries, which allows for an arbitrary nesting of values. Below is an example of creating a vault item:

{% gist CHLibrarian/a098fd2a92e835982b20 %}
<br />

### Response

Once a vault item is created, a hash response is returned with the following keys: 

- `data` - A hash containing your stored data
- `vault_info` - A hash containing metadata about the vault item
	- `id` - A 32-hexadecimal character string displayed in five groups separated by hyphens, in standardized UUID/GUID format (`8-4-4-4-12`), uniquely identifying a vault item
	- `created_at` - An ISO 8601 timestamp representing when a vault item was created 
	- `updated_at` - An ISO 8601 timestamp representing when a vault item was last updated
	- `tags` - An array of strings representing the tags for the vault item
	- `tag_string` - An auto-generated read-only string representation of the tags used by Keen.io for analysis  

Here's the structure of a vault item that was created above:

{% gist CHLibrarian/f03d82ad1e2e1c4b5d0c %}
<br />

### Retrieving by Tag

Retrieve a group of vault items from ContextHub by passing a tag to `vault`. Adding more tags seperated by commas to the same function call filters only beacons that have *all* tags on the same vault items.

{% gist CHLibrarian/f95de5fabe8af80431ce %}
<br />

### Retrieving by ID

Retrieve a specific vault item from ContextHub by passing a vault ID present either in the ContextHub developer portal or given to you as a hash response at the key `id` in a context rule.

{% gist CHLibrarian/08e7a097a018ae13b8b2 %}
<br />

### Retrieving by Value

Contains allows you to search inside a vault item for a particular value.

{% gist CHLibrarian/ccd10b6bf887a37037fc %}
<br />

### Retrieving by Matching KeyPath/Value

KeyPath search allows you to get all items which a matching value for a specific keypath. 

{% gist CHLibrarian/833335fce9bb9e522407 %}
<br />

### Updating

Updating a vault item is similar to creating one. ContextHub first updates the vault item on the server, then triggers pushes to devices interested in vault items with those specific tags.

{% gist CHLibrarian/cd7dc04e6624ebbc35e2 %}
<br />


### Deleting

Deleting a vault items only requires passing the id to the `vault` object. The vault item is deleted from ContextHub, then triggers pushes to devices interested in vault item deletions with those specific tags.

{% gist CHLibrarian/a55f094872efed65ad3b %}
<br />

