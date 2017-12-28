(function ()
{
    'use strict';

    window.exercise3 = {

        doAdult: function (array)
        {
            array.map(function(item){
                if(item.age < 18) {
                    item.age = 18;
                }
                return item;
            });
        },
        findTheBiggestBox: function (x, y, z)
        {
            if(isNaN(parseInt(x)) || isNaN(parseInt(y)) || isNaN(parseInt(z)) ) { 
                return false;
            }
        
            var boxX = 3 * x * y * z;
            var boxY = x * y * y * z;
            var boxZ = x * y * (y + z);
            
            var max = Math.max(boxX, boxY, boxZ);
            if( max === boxX) { return 1; }
            if (max === boxY) { return 2; }
            if (max === boxZ) { return 3; }

        },
        reverseText: function (text)
        {
            if(typeof(text) !== 'string') { return false; }
            return text.split('').reverse().join('');
        },
        factorial: function (N)
        {
            var resultArray = [1];
            var result = 1;
            for(var i = 1 ; i <= N; i++){
                result *= i;
                resultArray.push(result);
            }
            return resultArray;
        },
        sumProperties: function (object)
        {
            var result = 0;
            Object.getOwnPropertyNames(object).forEach(function(name){
                result += object[name];
            })    ;
            return result;
        }
    };

})();
