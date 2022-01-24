var no_of_students=[]
function submit()
{
 var student_1=document.getElementById("Name_of_the_student_1").value;
 var student_2=document.getElementById("Name_of_the_student_2").value;
 var student_3=document.getElementById("Name_of_the_student_3").value;
 var student_4=document.getElementById("Name_of_the_student_4").value;
 no_of_students.push(student_1);
 no_of_students.push(student_2);
 no_of_students.push(student_3);
 no_of_students.push(student_4);
 console.log(no_of_students);
 document.getElementById("displayname").innerHTML=no_of_students;
 document.getElementById("Results").style.display="none";
 document.getElementById("sort").style.display="inline-block";
}
function sorting()
{
    no_of_students.sort();
    console.log(no_of_students);
    document.getElementById("displayname").innerHTML=no_of_students;
}