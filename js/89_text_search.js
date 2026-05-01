function textSearch (text, query) {
    if (text.trim() === '' || query.trim() === '') return text;
    const boldChars = Array.from({ length: text.length }, () => 0);
    
    for (let i=0; i<text.length;) {
        const substr = text.slice(i, i + query.length);
        if (substr.toLowerCase() === query.toLowerCase()) {
            boldChars.fill(1, i, i + query.length);
            i = i + query.length;
        } else {
            i += 1;
        }
    }

    let highlightedString = '';

    for (let i=0; i<text.length; i++) {
        const shouldAddOpeningTag = boldChars[i] === 1 && boldChars[i-1] !== 1;
        const shouldAddClosingTag = boldChars[i] === 1 && boldChars[i+1] !== 1;
        let char = text[i];
        if (shouldAddOpeningTag) char = `<b>` + char;
        if (shouldAddClosingTag) char = char + `<br>`;
        highlightedString += char;
    }
    return highlightedString;
}

console.log(textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox'));
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
console.log(textSearch('The hardworking Dog overtakes the lazy dog', 'dog'));
// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'
console.log(textSearch('aaaa', 'aa'));
// Correct: '<b>aaaa</b>'
// Wrong: '<b>aa</b><b>aa</b>'