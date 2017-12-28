(function () {
    'use strict';

    window.exercise2 = {
        reverseNumber: function (number) {
            if (isNaN(number)) {
                return false;
            } else {
                return parseInt(number.toString().split('').reverse().join(''));
            }
        },
        squareOrCube: function (array) {
            return array.map(function (item) {
                if (item % 2 === 0) {
                    return item * item * item;
                } else {
                    return item * item;
                }
            });
        },
        replaceString: function (list, string, newString) {
            if (list.find(function (item) {
                return item === string;
            }) === undefined) {
                return false;
            } else {
                var result = list.map(function (item) {
                    return (item === string) ? newString : item;
                });
                return result;
            }
        },
        maxArray: function (array) {
            var max = array[0], isWrongType = false;
            array.forEach(function (item) {
                if (isNaN(item)) {
                    isWrongType = true;
                }
                if (item > max) {
                    max = item;
                }
            });
            if (isWrongType) {
                return !isWrongType;
            }
            return max;
        },
        getObject: function (list, name) {
            var result = list.find(function (item) {
                if (item.name === name) {
                    return item;
                }
            }); 
            if (result) {
                return result;
            }
            return false;
        }
    };
})();
