function inRange (value, start, end = 0) {
    return Math.min(start, end) <= value && value < Math.max(start, end);
}

inRange(3, 2, 4); // => true
inRange(4, 8); // => true
inRange(4, 2); // => false
inRange(2, 2); // => false
inRange(1.2, 2); // => true
inRange(5.2, 4); // => false
inRange(-3, -2, -6); // => true