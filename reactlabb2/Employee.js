import "./styling.css";


function EmployeesData({titelName,email,phone,skills,imgSrc}){
    return (<div className ="EmployeeDiv">
        <img className = "avatar" src = {imgSrc} /> <br></br>
        <ul>
        <h3>{titelName}</h3><br></br>
        <p><strong>Email:</strong> {email}</p><br></br>
        <p><strong>Phone:</strong> {phone}</p><br></br>
        <p><strong>skills:</strong> {skills}</p><br></br>
        </ul>


    </div>
    );
}

export default EmployeesData;