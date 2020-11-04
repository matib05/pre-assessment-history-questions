export const decodeHTML = (encodedHtml) => {
	let text = document.createElement('textarea');
	text.innerHTML = encodedHtml;
	return text.value;
};

export const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}