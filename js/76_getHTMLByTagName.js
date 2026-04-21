function getElementsByTagName (element, tag) {
    let result = [];
    const tagName = String(tag).toUpperCase();
    function traversal (el) {
        if (el === null) return;
        if (el.tagName === tagName) result.push(el);
        for (const child of el) traversal(child);
    }
    for (const child of element.children) traversal(child);
    return result;
}

const doc = new DOMParser().parseFromString(
  `<div id="foo">
    <span>Span</span>
    <p>Paragraph</p>
    <div id="bar">Div</div>
  </div>`,
  'text/html',
);

getElementsByTagName(doc.body, 'div');
// [div#foo, div#bar] <-- This is an array of elements.