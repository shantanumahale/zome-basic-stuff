const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;
const NUMBER_OF_CARDINAL_DIRECTIONS = 4;

class Turtle {
    constructor () {
        this.x = 0;
        this.y = 0;
        this.direction = NORTH;
    }

    _move (distance) {
        switch (this.direction) {
            case NORTH:
                this.y += distance;
                break;
            case EAST:
                this.x += distance;
                break;
            case SOUTH:
                this.y -= distance;
                break;
            case WEST:
                this.x -= distance;
                break;
        }
        return this;
    }

    position () {
        return [this.x, this.y];
    }
    forward (val) {
        this._move(val);
        return this;
    }
    backward (val) {
        this._move(-val);
        return this;
    }
    left () {
        this.direction = (this.direction - 1 + NUMBER_OF_CARDINAL_DIRECTIONS) % NUMBER_OF_CARDINAL_DIRECTIONS;
        return this;
    }
    right () {
        this.direction = (this.direction + 1 + NUMBER_OF_CARDINAL_DIRECTIONS) % NUMBER_OF_CARDINAL_DIRECTIONS;
        return this;
    }
    
}

const turtle = new Turtle();
turtle.position(); // [0, 0]
turtle.forward(1); // Position: [0, 1]
turtle.backward(1); // Position: [0, 0]
turtle.right(); // Position remains unchanged
turtle.forward(2); // Position: [2, 0] because it moved 2 units to the right.

// Methods can also be chained.
turtle.right().right().forward(5); // Position: [-3, 0] because it turned 180 degrees and moved 5 units forward (towards the left).