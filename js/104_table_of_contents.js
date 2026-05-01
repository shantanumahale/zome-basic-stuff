
function stringify (contents) {
    function stringifyNode(node) {
        return `<li>${node.text}${stringifyChildren(node.children)}</li>`;
    }
    function stringifyChildren (children) {
        return children.length > 0 ? `<ul>${children.map(stringifyNode).join('')}</ul>` : ``;
    }
    return stringifyChildren(contents.children);
}

const headingTags = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

function tableOfContents (document) {
    const rootNode = {
        text: null,
        children: []
    }
    const stack = [rootNode];
    let currentLevel = 0;

    function traverse(element) {
        if (element === null || element.tagName === null) return;
        if (headingTags.has(element.tagName.toLowerCase())) {
            const level = parseInt(element.tagName[1], 10);
            const node = {
                text: element.textContent,
                children: []
            };
            for (let i=level; i<currentLevel + 1; i++) {
                stack.pop();
            }
            stack[stack.length - 1].children.push(node);
            stack.push(node);
            currentLevel = level;
        }
        for (const child of element.children) {
            traverse(child);
        }
    }

    traverse(document.body);
    return stringify(stack[0]);
};

const doc = new DOMParser().parseFromString(
  `<!DOCTYPE html>
  <body>
    <h1>Heading1</h1>
    <h2>Heading2a</h2>
    <h2>Heading2b</h2>
    <h3>Heading3a</h3>
    <h3>Heading3b</h3>
    <h4>Heading4</h4>
    <h2>Heading2c</h2>
  </body>`,
  'text/html',
);

const htmlString = tableOfContents(doc);
console.log(htmlString);
// Pretty-printed for readability.
`<ul>
  <li>
    Heading1
    <ul>
      <li>Heading2a</li>
      <li>
        Heading2b
        <ul>
          <li>Heading3a</li>
          <li>
            Heading3b
            <ul>
              <li>Heading4</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Heading2c</li>
    </ul>
  </li>
</ul>`;