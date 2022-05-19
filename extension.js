const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */

function createTerminal(){
	let terminal = vscode.window.createTerminal({
		name: "SHOPWARE"
	});
	terminal.show()
}

function runCommand(isOpen, command) {
	if (isOpen) {

		setTimeout(function () {
			const terminal = vscode.window.terminals[vscode.window.terminals.length - 1]
			terminal.sendText(command)
		}, 500)

	} else {

		createTerminal()
		setTimeout(function () {
			const terminal = vscode.window.activeTerminal
			terminal.sendText(command)
		}, 500)

	}
}

function checkTerminal(command) {

	if (vscode.window.terminals.length === 0) {
		// Es ist noch kein Terminal gestartet/geöffnet
		runCommand(false, command)
	} else {
		// Es ist mindestens ein Terminal gestartet/geöffnet
		runCommand(true, command)
	}
}

// this method is called when your extension is activated
function activate(context) {

	const pathConfig = vscode.workspace.getConfiguration("superConsole")
	const mainShopwareCommand = pathConfig.get("path") + " "

	// about
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.About', function () {
			let command = mainShopwareCommand + 'about'
			checkTerminal(command)
		})
	)

	// cache:clear
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.CacheClear', function () {
			let command = mainShopwareCommand + 'cache:clear'
			checkTerminal(command)
		})
	)

	// dal:refresh:index
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.DalRefreshIndex', function () {
			let command = mainShopwareCommand + 'dal:refresh:index'
			checkTerminal(command)
		})
	)
	// plugin:activate
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.PluginActivate', async function () {

			const result = await vscode.window.showInputBox({
				title: 'Activate plugin',
				prompt: 'Enter plugin name',
			})

			if ((result === undefined) || (result === "")) {
				vscode.window.showErrorMessage('Error: Plugin name is missing.')
			} else {
				let command = mainShopwareCommand + 'plugin:activate' + " " + result
				console.log(command)
				checkTerminal(command)
			}
		})
	)
	// plugin:deactivate
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.PluginDeactivate', async function () {

			const result = await vscode.window.showInputBox({
				title: 'Deactivate plugin',
				prompt: 'Enter plugin name',
			})

			if ((result === undefined) || (result === "")) {
				vscode.window.showErrorMessage('Error: Plugin name is missing.')
			} else {
				let command = mainShopwareCommand + 'plugin:deactivate' + " " + result
				console.log(command)
				checkTerminal(command)
			}
		})
	)
	// plugin:install
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.PluginInstall', async function () {

			const result = await vscode.window.showInputBox({
				title: 'Install plugin',
				prompt: 'Enter plugin name',
			})

			if ((result === undefined) || (result === "")) {
				vscode.window.showErrorMessage('Error: Plugin name is missing.')
			} else {
				let command = mainShopwareCommand + 'plugin:install' + " " + result
				console.log(command)
				checkTerminal(command)
			}
		})
	)
	// plugin:list
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.PluginList', function () {
			let command = mainShopwareCommand + 'plugin:list'
			checkTerminal(command)
		})
	)
	// plugin:refresh
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.PluginRefresh', function () {
			let command = mainShopwareCommand + 'plugin:refresh'
			checkTerminal(command)
		})
	)
	// plugin:uninstall
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.PluginUninstall', async function () {

			const result = await vscode.window.showInputBox({
				title: 'Uninstall plugin',
				prompt: 'Enter plugin name',
			})

			if ((result === undefined) || (result === "")) {
				vscode.window.showErrorMessage('Error: Plugin name is missing.')
			} else {
				let command = mainShopwareCommand + 'plugin:uninstall' + " " + result
				console.log(command)
				checkTerminal(command)
			}
		})
	)
	// plugin:update
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.PluginUpdate', async function () {

			const result = await vscode.window.showInputBox({
				title: 'Update plugin',
				prompt: 'Enter plugin name',
			})

			if ((result === undefined) || (result === "")) {
				vscode.window.showErrorMessage('Error: Plugin name is missing.')
			} else {
				let command = mainShopwareCommand + 'plugin:update' + " " + result
				console.log(command)
				checkTerminal(command)
			}
		})
	)
	// theme:compile
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.ThemeCompile', function () {
			let command = mainShopwareCommand + 'theme:compile'
			checkTerminal(command)
		})
	)

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}