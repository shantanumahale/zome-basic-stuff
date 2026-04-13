const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

function getFirstName(user) {
  return user.profile.name.firstName;
}

function get (obj, str) { 
    let ptr = obj;
    const nestedKeys = str.split('.');
    for (let i=0; i<nestedKeys.length; i++) {
        if (ptr[nestedKeys[i]]) {
            ptr = ptr[nestedKeys[i]]
        } else {
            return undefined;
        }
    }
    return ptr;
}

console.log(get(john, 'profile.name.firstName')); // 'John'
console.log(get(john, 'profile.gender')); // 'Male'
console.log(get(john, 'profile..gender')); // 'Male'
console.log(get(jane, 'profile.name.firstName')); // undefined
console.log(get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c')); // 3