const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */

function runcommand(isOpen, command) {
	if (isOpen) {
		setTimeout(function () {
			const terminal = vscode.window.terminals[vscode.window.terminals.length - 1]
			terminal.sendText(command)
		}, 500)
	} else {
		vscode.commands.executeCommand('workbench.action.terminal.new')
		setTimeout(function () {
			const termo = vscode.window.activeTerminal
			termo.sendText(command)
		}, 500)
	}
}

function checkTerminal(command) {

	//let anzahl = vscode.window.terminals.length;

	if (vscode.window.terminals.length === 0) {
		// keine Terminals geöffnet
		//console.log('Anzahl=0: ' + anzahl);
		runcommand(false, command)
	} else {
		// mindestens ein Terminal geöffnet
		//console.log('Anzahl>0: ' + anzahl);
		runcommand(true, command)
	}
}

function activate(context) {

	const pathConfig = vscode.workspace.getConfiguration("superConsole")
	const mainShopwareCommand = pathConfig.get("path") + " "

	/* 
	 * Most important shopware CLI commands - related to symfony
	 */

	// about
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.DisplayAbout', function () {
			let command = mainShopwareCommand + 'about'
			checkTerminal(command)
		})
	)

	// cache:clear
	context.subscriptions.push(
		vscode.commands.registerCommand('shopware.CacheClear', async function () {

			const result = await vscode.window.showInputBox({
				title: 'Activate plugin',
				prompt: 'Enter plugin name',
			})
			//vscode.window.showInformationMessage(`Resultat: ${result}`)
			let command = mainShopwareCommand + 'cache:clear' + " " + result
			console.log(command)
			//checkTerminal(command)
		})
	)
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}