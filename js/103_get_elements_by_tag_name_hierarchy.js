function getElementsByTagNameHierarchy (element, query) {
    let results = [];

    const tags = query.toUpperCase().trim().split(' ');
    const lastIndex = tags.length - 1;

    if (tags.length === 0) return results;


    function traversal (el, tagTokenIndex) {
        if (el === null) return;
        const currentTagToken = tags[tagTokenIndex];
        const elementMatchesCurrentTag = el.tagName === currentTagToken;
        const isLastTag = tagTokenIndex === lastIndex;

        if (elementMatchesCurrentTag && isLastTag) {
            results.push(el);
        }

        const nextIndex = elementMatchesCurrentTag ? Math.min(tagTokenIndex + 1, lastIndex) : tagTokenIndex;

        for (const child of el.children) {
            traversal(child, nextIndex);
        }
    }
    traversal(element.body, 0)
}

const doc = new DOMParser().parseFromString(
  `<div>
    <span id="foo">
      <span id="bar">Bar</span>
      Foo
    </span>
    <p>Paragraph</p>
    <span id="baz">Baz</span>
  </div>`,
  'text/html',
);

getElementsByTagNameHierarchy(doc, 'div span');
// [span#foo, span#bar, span#baz] <-- This is an array of elements.