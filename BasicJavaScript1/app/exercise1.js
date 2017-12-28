(function ()
{
    'use strict';

    window.exercise1 = {
        getDescendingNumbers: function (numberFrom, numberTo)
        {
            if(numberFrom < numberTo ||  typeof(numberFrom) !== 'number' || isNaN(numberFrom) || typeof(numberTo) !== 'number' || isNaN(numberTo)) {
                return false;
            }
            var result = '';
            for(var i = numberFrom; i >= numberTo; i--){
                result += i + ' ';
            }
            return result.trim();
        },

        deleteString: function (string, array)
        {
            return array.filter(function(item){
                return item !== string;
            });
        },

        stringCounter: function (array)
        {
            return array.filter(function(item){
                return typeof(item) === 'string';
            }).length;
        },

        squareOdd: function (array)
        {
            return array.map(function(item){
                if(item % 2 === 1){
                    return item*item;
                } 
                return item;
            });
        },

        areaOfTrapezoid: function (a, b, h)
        {
            var result = 0.5 * ( a + b ) * h;
            if( (a < 0) || (b < 0) || (h < 0) || isNaN( result)) {
                return false;
            }
            return result;
        }
    };
})();
