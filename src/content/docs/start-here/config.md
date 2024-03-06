---
title: Configuring AnyCode
description: How to configure AnyCode
---

# File Configuration
AnyCode is quick and easy when it comes to configuration.

Here is a simple example of how a config file should look

```json
{
	"name": "MyWorker",
	"main": "index.js",
	"key": "myAccountKey",
	"subdomain": "cool.example.com",
	"domain": "example.com",
	"config": "config.example.json",
	"extras": {
		"enable_paid": true,
		"runtime": "node",
		"build": "npm i"
	}
}
```

:::caution
Do not use the example above for your config!
Instead, please build off of it since the information
provided is NOT usable.
:::

## Keys & Values

### Name

`name`: The name of the given worker

### Main

`main`: Your main program file

### Key

`key`: Your account's key

### Subdomain

`subdomain`: Your instance's subdomain

### Domain

`domain`: Your instance's domain

### Config

`config`: Your program's config file

### Extras

Additional details (to be documented)
