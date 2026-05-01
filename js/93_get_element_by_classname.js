function isSubset (a, b) {
    return Array.from(a).every((value) => b.contains(value));
}

function getElementsByClassName (element, classnames) {
    const elements = [];
    const classNamesSet = new Set(classnames.trim().split(' '));

    function traversal (el) {
        if (el === null) return;
        if (isSubset(classNamesSet, el.classList)) {
            elements.push(el);
        }
        for (const child of el.children) {
            traversal(child);
        }
    }

    for (const child of element.children) {
        traversal(child);
    }

    return elements;
}

const doc = new DOMParser().parseFromString(
  `<div class="foo bar baz">
    <span class="bar baz">Span</span>
    <p class="foo baz">Paragraph</p>
    <div class="foo bar"></div>
  </div>`,
  'text/html',
);

getElementsByClassName(doc.body, 'foo bar');
// [div.foo.bar.baz, div.foo.bar] <-- This is an array of elements.