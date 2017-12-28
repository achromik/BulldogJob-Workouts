(function () {
    'use strict';

    // You can extend prototypes here.
    window.excercise4 = {

    };
    String.prototype.countVowels = function () {
        var count = 0;
        var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        this.split('').forEach(function (char) {
            if (vowels.some(function (vowel) {
                return vowel.toUpperCase() === char.toUpperCase();
            }
            )) {
                count++;
            }
        });
        return count;
    };

    Array.prototype.arrayToString = function () {
        return this.join(' ');
    };

    Number.prototype.add = function (number) {
        return this + number;
    };

    Number.prototype.isInTheRange = function (a, b) {
        if (a > b) {
            return undefined;
        }
        if (this > a && this < b) {
            return true;
        } else {
            return false;
        }
    };
})();
