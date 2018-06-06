var person = {
    name: 'jet',
    age: 45
};
person.occupation = 'SDXSAAAX';

debugger;

person.age = 433;
person.name = 'c';
console.log(person.age);


/*
Run using node inspect-brk filename - chrom debugging
Run using node inspect filename for commandline debug
line(10)

c

*/