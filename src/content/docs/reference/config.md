---
title: Configuring AnyCode
description: How to configure AnyCode
---

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
        "enable_paid": true
        "runtime": ""
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

`name`: The name of the given worker

**Usage**
```json
"name": "MyWorker"
```

`main`: Your main program file

**Usage**
```json
"main": "test.py"