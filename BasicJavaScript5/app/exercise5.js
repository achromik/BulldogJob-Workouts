(function () {
    'use strict';

    window.exercise5 = {
        mergeObject: function (object1, object2) {

            if (typeof object1 === 'object' &&
                typeof object2 === 'object' &&
                !(Array.isArray(object1)) &&
                !(Array.isArray(object2)) &&
                object1 !== null &&
                object2 !== null) {
                for (var key in object2) {
                    if (object2.hasOwnProperty(key)) {
                        object1[key] = object2[key];
                    }
                }
                return object1;

            } else {
                return false;
            }

        },
        countLetter: function (object, letter) {
            var count = 0;
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    var propertyValue = object[key];
                    for (var i = 0; i < propertyValue.length; i++) {
                        if (propertyValue[i].toUpperCase() === letter.toUpperCase()) {
                            count++;
                        }
                    }
                }
            }
            return count;
        },
        makeObject: function (array) {
            var object = {};
            for (var i = 0; i < array.length; i++) {
                if (array[i].length !== 2) { return false; }
                object[array[i][0]] = array[i][1];
            }
            return object;
        },
        propertyNames: function (object) {
            var array = [];
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    array.push([key, object[key]]);
                }
            }
            return array;
        }
    };
})();
