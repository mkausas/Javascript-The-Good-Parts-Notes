// Notes on Regular Expressions in Javascript 

/**
Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp, and with the match, replace, search, and split methods of String.

/ - starts a regex
^ - indicates start of a string ' or "
. - matches anything but a new line character
?: - indicates a non-capturing group (find it but don't return in results)
? (as a suffix) - indicates that the group is optional
(...) - indicates a capturing group (each capturing group is given an index in the result array) (optional)
[] - indicates character class such as [A-Z], [a-z], [A-Za-z]
{x} - how many times the previous item should be matched (ex. a{3} matches 3 a's)
{x, y} - matches x to y of the previous character (ex. a{0,3} matches 0, 1, 2, or 3 times)
[^$#] - anything except ? and # 
$ - represents end of string
x|y - matches x or y checking x first ("into".match(/in|int/) matches in) 
\d - indicates any digit character (equal to using [0-9])
\D - indicates anything but a digit character (equal to using [^0-9]) 
\x - indicates the first group that was captured
/i - at end denotes to not look for case of letter when matching
/g - at end denotes global search (looks for more then one instance)

Regex objects can be constructed with regex literals (ex. /(\d+)/) or by creating RegExp objects (ex. new RegExp("<string representation of regex object>", "<flags>"))

Use regex literals are created at compilation while RegExp objects can be set and modified during runtime. More info: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

**/

var re_number = /(\d+)/;
var re_url = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
var re_phone_number = /[(]?([0-9]{3})[)]?[-|\ {0,5}|\.]?([0-9]{3})[-|\ |\.]?([0-9]{4})/;
var re_ip = /(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})?\:(\d{1,7})/;

var re_date = /(\d{4})-(\d{2})-(\d{2}),\ ([^,]*),\ (\d*)/;

testRegex();


function testRegex() {
    parseDateTests();
    parseIPTests();
    parsePhoneNumberTests();
    parseNumberTests();   
    parseURLTests();
}

function parseDateTests() {
    prettyOutput("2015-08-15, clicks, 635", "date");
    prettyOutput("2016-03-24, app_installs, 683", "date");
    prettyOutput("2015-04-05, favorites, 763", "date");
    prettyOutput("2016-01-22, favorites, 788", "date");
}

function parseIPTests() {
    prettyOutput("198.3.12.4:2314", "ip");
}

function parseURLTests() {
    prettyOutput("https://github.com/megalord/brackets-vim", "url");
    prettyOutput("dasdasd", "url");
}

function parseNumberTests() {
    prettyOutput("3 5", "number");
    prettyOutput("abc", "number");
    prettyOutput("30 ", "number");
    prettyOutput("hgjhgj5", "number");   
}

function parsePhoneNumberTests() {
    prettyOutput("619 564 2840", "phone number");
    prettyOutput("619-564-2840", "phone number");
    prettyOutput("619.564.2840", "phone number");
    prettyOutput("(619).564.2840", "phone number");
    prettyOutput("(619) 564.2840", "phone number");
}  

function prettyOutput(str, str2) {
    var result;
    switch (str2) {
        case "number":
            result = re_number.exec(str);
            break;
        case "url":
            result = re_url.exec(str);
            break;;
        case "phone number":
            result = re_phone_number.exec(str);
            break;
        case "ip":
            result = re_ip.exec(str);
            break;
        case "date":
            result = re_date.exec(str);
            break;
    }
    
    console.log(str + ": " + (result ? result : "not a " + str2));
}