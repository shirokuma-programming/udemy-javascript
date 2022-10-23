const person = {
    name: ['shirokuma', 'code'],
    age: 1,
    interests: {
        foods: 'fish',
    },
    getFullName: function() {
        console.log(this.name[0] + this.name[1]) 
    }
};

// const ageKey = 'age';
// person[ageKey] = 2;
console.log(person.name);
console.log(person.age);
console.log(person.interests);
person.getFullName();
