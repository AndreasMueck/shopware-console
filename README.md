# Shopware Console
## How Can You Use This Extension:
- (Windows,Linux) *CTRL+SHIFT+P* and select the command you want
- (Mac) *CMD+SHIFT+P* and select the command you want
## Set the Console Path in your settings.json file
```
    "shopwareConsole.path": "your console path default is php bin/console"
```
## List Of Availables Commands

| Command                        | Description                                                 |
| :---                           | :---                                                        |
| `shopware: about`              | Display information about the current project               |
| `shopware: cache:clear`        | Clear the cache                                             |
| `shopware: dal:refresh:index`  | Refresh the shop indices                                    |
| `shopware: plugin:activate`    | Activate given plugins                                      |
| `shopware: plugin:deactivate`  | Deactivate given plugins                                    |
| `shopware: plugin:install`     | Install given plugins                                       |
| `shopware: plugin:list`        | Show a list of available plugins                            |
| `shopware: plugin:refresh`     | Refresh the plugins list in the storage from the file system|
| `shopware: plugin:uninstall`   | Uninstall given plugins                                     |
| `shopware: plugin:update`      | Update given plugins                                        |
| `shopware: theme:compile`      | Compile current theme                                       |