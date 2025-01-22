//Javascript JSON
var str = '{"names" : [' +                          // create JSON object
    '{"first" :  "Hakuna", "last" : "Matata"},' +
    '{"first" :  "Jane", "last" : "Doe"},' +
    '{"first" :  "Air", "last" : "Jordan"}]}';

myObj = JSON.parse(str);                            // parse
document.write(myObj.name[1].first);                // access
var myJSON = JSON.stringify(myObj);                 // stringify
localStorage.setItem("testJSON", myJSON);           // storying data
text = localStorage.getItem("testJSON");            // retrieving data


//Javascript object
var student = {                 // object name
    firstName: "Jane",          // list of proprieties and values
    lastName: "Doe",
    age: 18,
    height: 170,
    fullName: function() {      // object function
        return this.firstName + " " + this.lastName;
    }
};
student.age = 19;               // setting value
student["height"]++;            // incrementing
Name = student.fullName();      // call object function
