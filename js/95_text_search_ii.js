function textSearch (text, queries) {
    if (queries.length === 0) return text;

    if (text.trim() === '') return text;

    const boldChars = Array.from({ length: text.length }, () => 0);

    for (const query of queries) {
        if (query.trim() === '') continue;
        for (let i=0; i<text.length;) {
            const substr = text.slice(i , i + query.length);
            if (substr.toLowerCase() === query.toLowerCase()) {
                boldChars.fill(1, i, i + query.length);
                i = i + query.length
            } else {
                i = i + 1
            }
        } 
    }

    let highlightedString = '';
    for (let i=0; i<text.length; i++) {
        const shouldAddOpeningTag = boldChars[i] === 1 && boldChars[i-1] !== 1;
        const shouldAddClosingTag = boldChars[i] === 1 && boldChars[i+1] !== 1;
        let char = text[i];
        if (shouldAddOpeningTag) char = `<b>` + char;
        if (shouldAddClosingTag) char = char + `<b>`;
        highlightedString += char;
    }
    return highlightedString;
}

console.log(textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', ['fox']));
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
console.log(textSearch('The quick brown fox jumps over the lazy dog', ['fox', 'dog']));
// 'The quick brown <b>fox</b> jumps over the lazy <b>dog</b>'
console.log(textSearch('This is Uncopyrightable!', ['copy', 'right']));
// 'This is Un<b>copyright</b>able!'
console.log(textSearch('This is Uncopyrightable!', ['copy', 'right', 'table']));
// 'This is Un<b>copyrightable</b>!'
console.log(textSearch('aaa', ['aa']));
// '<b>aa</b>a'
// This is because the second character cannot be used as a match again.
console.log(textSearch('aaaa', ['aa']));
// '<b>aaaa</b>'