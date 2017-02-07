(function () {
    'use strict';

    var testString = 'This is Data Visualization class in George Washington University';

    console.log(testString.length); // 64

    console.log(testString.split(' ')); // ["This", "is", "Data", "Visualization", "class", "in", "George", "Washington", "University"]
    console.log(testString.indexOf('D', 1)); // 8
    console.log(testString.lastIndexOf('V')); // 13

    console.log('To upper case', testString.toUpperCase()); // THIS IS DATA VISUALIZATION CLASS IN GEORGE WASHINGTON UNIVERSITY

    console.log('substring:', testString.substring(12)); // Visualization class in George Washington University
    console.log('substring 0 to 4:', testString.substring(0, 4)); // This

    console.log('slice 5:',testString.slice(5)); // is Data Visualization class in George Washington University
    console.log('slice 0 to 4:', testString.slice(0, 4)); // This
    console.log('slice -10:', testString.slice(-10)); // University
 

    console.log('     This is Data Visualization     '.trim()); // This is Data Visualization
}());