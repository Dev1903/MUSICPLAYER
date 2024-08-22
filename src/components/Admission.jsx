import React from "react";

const Admission = () => {
    return (
        <div>
            <form>
                <h2>PERSONAL DETAILS</h2>
                <label>Name: </label>
                <input type="text" placeholder="Enter Your Name" name="name"></input><br></br>

                <label>Father's Name: </label>
                <input type="text" placeholder="Enter Your Father's Name" name="fname"></input><br></br>

                <label>Mother's Name: </label>
                <input type="text" placeholder="Enter Your Mother's Name" name="mname"></input><br></br>

                <label>Mobile No.: </label>
                <input type="tel" placeholder="Enter Your Mobile Number" name="mobile"></input><br></br>

                <label>Email ID: </label>
                <input type="email" placeholder="Enter Your Email ID" name="email"></input><br></br>

                <label>Date of Birth: </label>
                <input type="date" placeholder="Enter your BirthDate" name="dob"></input><br></br>

                <label>Blood Group: </label>
                <input type="radio" name="blood" value={"a"}></input>A
                <input type="radio" name="blood" value={"b"}></input>B
                <input type="radio" name="blood" value={"ab"}></input>AB
                <input type="radio" name="blood" value={"o"}></input>O
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="gender" value={"positive"}></input>Positive(+)
                <input type="radio" name="gender" value={"negative"}></input>Negative(-)
                <br></br>

                <label>Aadhar Number: </label>
                <input type="text" name="aadhar" placeholder="Enter your Aadhar Number"></input><br></br>

                <label>Upload your Image: </label>
                <input type="file" name="image"></input><br></br>
                <h2>ADDRESS</h2>
                <ul>
                    <li><input type="text" name="village" placeholder="Enter your Village Name"></input></li>
                    <li><input type="text" name="post" placeholder="Enter your Post Office"></input></li>
                    <li><input type="text" name="post" placeholder="Enter your Post Office"></input></li>
                    <li><input type="text" name="district" placeholder="Enter your District"></input></li>
                    <li><input type="text" name="state" placeholder="Enter your State"></input></li>
                    <li><input type="number" name="pin" placeholder="Enter your Pincode"></input></li>

                </ul>

                <h2>ADMISSION DETAILS</h2>
                <label>Class: </label>
                <input type="number" name="class" placeholder="Enter your Class"></input><br></br>

                <label>Department: </label>
                <input type="text" name="dept" placeholder="Enter your Course Department"></input><br></br>

                <label>Session: </label>
                <input type="text" name="session" placeholder="Enter your Session"></input><br></br>

                <label>Upload your Image: </label>
                <input type="file" name="image"></input><br></br>
            </form>
        </div>
    );
}

export default Admission;