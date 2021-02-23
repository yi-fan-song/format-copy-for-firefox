
function init_state() {
	window.format_copy_format = '-q $$';
}

function copy_url_format(tab) {
	let formatted_string = window.format_copy_format.replace('$$', tab.url);

	navigator.clipboard.writeText(formatted_string)
		.then(() => {
			// TODO: display some sort of feedback
		}, () => {
			// TODO: display feedback for failure
		})
		.catch(console.error);
}

browser.browserAction.onClicked.addListener((tab) => {
	copy_url_format(tab);
});

init_state();
