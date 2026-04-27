function serialize (object) {
  if (!object.children) {
    return object;
  }
  if (Array.isArray(object)) {
    let res = '';
    object.forEach((el) => {
      res += serialize(el);
      res += '\n';
    });
    return res;
  }
  let res = '';
  res += '<' + object.tag + '>\n';
  object.children.forEach((item) => {
    res += serialize(item);
    res += '\n';
  });
  res += '</' + object.tag + '>\n';
  return res;
}

const tree = {
  tag: 'body',
  children: [
    { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },
    { tag: 'div', children: ['baz'] },
  ],
};

console.log(serialize(tree));
// Output:
`<body>
  <div>
    <span>
      foo
      bar
    </span>
  </div>
  <div>
    baz
  </div>
</body>`;
