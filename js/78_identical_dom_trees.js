class MyNode {
    constructor ({nodeType, tagName = null, textContent = null }) {
        this.nodeType = nodeType;
        this.tagName = tagName;
        this.textContent = textContent;
        this.childNodes = [];
        this.attributes = {};
    }

    appendChild (child) {
        this.childNodes.appendChild(child);
    }
    setAttribute (name, value) {
        this.attributes[name] = value;
    }
    getAttribute (name) {
        return this.attributes[name] ?? null;
    }
    getAttributeNames () {
        return Object.keys(this.attributes);
    }
}

MyNode.TEXT_NODE = 3;
MyNode.ELEMENT_NODE = 1;

global.Node = MyNode;

function identicalDOMTrees (nodeA, nodeB) {
    if (nodeA.nodeType !== nodeB.nodeType) return false;
    if (nodeA.nodeType === Node.TEXT_NODE) return nodeA.textContent === nodeB.textContent;
    if (nodeA.tagName !== nodeB.tagName) return false;
    if (nodeA.childNodes.length !== nodeB.childNodes.length) return false;
    if (nodeA.attributes.length !== nodeB.attributes.length) return false;
    const hasSameAttributes = nodeA.getAttributeNames().every((attrName) => nodeA.getAttribute(attrName) === nodeB.getAttribute(attrName));
    if (!hasSameAttributes) return false;
    return Array.prototype.every.call(nodeA.childNodes, (childA, index) => identicalDOMTrees(childA, nodeB.childNodes[index]));
}