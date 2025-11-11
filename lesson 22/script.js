var student = {
name: 'Riya',
age: '12',
Grade: '7',
hobbies: 'Drawing',
fav_sport: 'Cricket'
};
var color = ["white", "black", "red", "green", "blue"];
document.write("Student name is : " + student.name,
"<br>", "Student favorite sport is:"
+student.fav_sport);
document.write("Before Poping the colors are:"
+color.join("^"));
document.write("My favorite color is:" +color[3]);
color.pop();
document.write("After Poping the colors are: " +
color.join("*"));