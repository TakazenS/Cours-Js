//Javascript JSON
var str = '{"names" : [' +
    '{"first" :  "Hakuna", "last" : "Matata"},' +
    '{"first" :  "Jane", "last" : "Doe"},' +
    '{"first" :  "Air", "last" : "Jordan"}]}';

myObj = JSON.parse(str);
document.write(myObj.name[1].first);
var myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);
text = localStorage.getItem("testJSON");


//Javascript object
var student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 18,
    height: 170,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
student.age = 19;
student["height"]++;
name = student.fullName();
