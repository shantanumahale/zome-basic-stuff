function getElementsByStyle (element, property, value) {
    const elements = [];
    function traversal (el) {
        if (el === null) return;
        const computedStyles = getComputedStyle(el);
        if (computedStyles.getPropertyValue(property) === value) elements.push(el);
        for (const child of el) traversal(child);
    }
    for (const child of element.children) traversal(child);
    return elements;
}

const doc = new DOMParser().parseFromString(
  `<div>
    <span style="font-size: 12px">Span</span>
    <p style="font-size: 12px">Paragraph</p>
    <blockquote style="font-size: 14px">Blockquote</blockquote>
  </div>`,
  'text/html',
);

getElementsByStyle(doc.body, 'font-size', '12px');
// [span, p] <-- This is an array of elements.