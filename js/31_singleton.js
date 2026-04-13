// fileA.js
// import GlobalMap from './GlobalMap';

// const gbMap = GlobalMap.getInstance();
// gbMap.set('count', 42);

// fileB.js
// import GlobalMap from './GlobalMap';

// const gbMap = GlobalMap.getInstance();
// console.log(gbMap.get('count')); // 42

const globalMap = new Map();

export default {
    getInstance() {
        return globalMap;
    }
}