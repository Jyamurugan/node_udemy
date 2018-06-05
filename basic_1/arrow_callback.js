const person = {
    name: 'yser',
    //undefined
    sayName: () => {
        console.log(this.name);
    },
    //will print yser
    sayNameArrow() {
        console.log(this.name);
    }
};

person.sayName();
person.sayNameArrow();

//callback example

const getUser = (id, callback) => {
    const user = {
        id,
        name: 'Jey'
    };
    callback(user);
}

getUser(1, (user) => {
    console.log(user);
});