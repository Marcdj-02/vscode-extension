import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('what-is-my-type.copyType', () => {
		vscode.window.showInformationMessage('Hello World from What\'s my type?!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
