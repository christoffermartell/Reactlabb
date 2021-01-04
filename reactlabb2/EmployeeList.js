import {useState} from "react";
import Employee from "./Employee";
function Employeelist(){
let [employess, setEmployess] = useState(
    [
      
      {
        titelName: " Yazeen Jasim",
        email: "test@mail.com",
        phone: "0700000000",
        skills: "React, Javascript, C++, Java, Python, GCP",
        imgSrc: "https://i.imgur.com/t9HFQvX.png",
      },
      {
       titelName: " Geralt Of Rivia",
       email: "test@mail.com",
       phone: "0700000000",
       skills: "Angular, CSS, HTML, Javascript",
       imgSrc: "https://i.imgur.com/Q9qFt3m.png",
     },
     {
       titelName: "Yennefer Of Vengerberg",
       email: "test@mail.com",
       phone: "0700000000",
       skills: "Go, Python, Node.js",
       imgSrc: "https://i.imgur.com/ebHfuth.png",
     },
 
 
    ]); 
    function addEmployee (){
        setEmployess(function(prevState){
          return [
            ...prevState,
            {
              titelName: "Triss Merigold",
              email: "Yazeenj@outlook.com",
              phone: "0700000000",
              skills: "Vue, Firebase, Git, c#",
              imgSrc: "https://i.imgur.com/TUhCrsY.png",
            }
          ]
        });
      }
      return (
          <> 
          <h2>Employee List</h2>
          <button className = "button" onClick = {addEmployee}>Add Employee</button>
          {employess.map(function({titelName,email,phone,skills,imgSrc}){
           return ( 
           <Employee
     key={titelName}
     titelName={titelName}
     imgSrc={imgSrc}
     email={email}
     phone={phone}
     skills={skills} />
           );
 })}
          
          
          
          
  </>        
      );

}
      export default Employeelist;