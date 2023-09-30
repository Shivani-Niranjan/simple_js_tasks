class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getType(value) {
        if (Array.isArray(value)) {
            return 'Array';
        } else if (value instanceof Object) {
            return 'Object';
        } else {
            return typeof value;
        }
    }

    display() {
        const props = Object.entries(this);

        for (const [prop, value] of props) {
            const propType = this.getType(value);

            if (propType === 'Object') {
                console.log(`${prop}:`);
                this.displayAgain(value, '    ');
            } else {
                console.log(`${prop} (${propType}): ${value}`);
            }
        }
    }

    displayAgain(obj, indent) {
        const props = Object.entries(obj);

        for (const [prop, value] of props) {
            const propType = this.getType(value);

            if (propType === 'Object') {
                console.log(`${indent}${prop}:`);
                this.displayAgain(value, indent + '    ');
            } else {
                console.log(`${indent}${prop} (${propType}): ${value}`);
            }
        }
    }
}

const People = [];

for (let i = 1; i <= 5; i++) {
    const address = {
        street: `street_${i}`,
        city: `city_${i}`,
        state: `state_${i}`,
        country: `country_${i}`
    };
    People.push(new Person(`person_${i}`, 30 + i, address));
}

console.log('Array of People:');
for (const i of People) {
    i.display();
}
