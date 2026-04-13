const buttonEl = document.querySelector('button');
buttonEl.style.color = 'red';
buttonEl.style.backgroundColor = 'tomato';
buttonEl.style.fontSize = '16px';

const buttonEl = $('button');
buttonEl.css('color', 'red');
buttonEl.css('backgroundColor', 'tomato');
buttonEl.css('fontSize', '16px');

$('button')
  .css('color', 'red')
  .css('backgroundColor', 'tomato')
  .css('fontSize', '16px');

// <button style="color: red">Submit</button>
$('button').css('color'); // 'red'

export default function $(selector) {
    const element = document.querySelector(selector);

    return {
        css: function (prop, value) {
            if (value === undefined) {
                if (element == null) {
                    return undefined
                }
                const value = element.style[prop];
                return value === '' ? undefined : value
            }

            if (element !== null) {
                element.style[prop] = value;
            }

            return this;
        }
    }
}