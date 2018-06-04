const _ = require('lodash');

//using third party modules

function print(arg) {
    console.log(arg);
}

print(_.isString(false));
print(_.isString(0987098));
print(_.isString('tesdsd'));

print(_.uniq([2, 3, 4, 5, 3, 22, 2, 3, 4, 5]));