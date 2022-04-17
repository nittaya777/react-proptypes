import React from "react";

export default function Employees(props) {
  let {
    name,
    salary,
    commission,
    hobbies,
    activeStatus,
    address,
    role,
    emergencyContact,
    image
  } = props;
  return (
    <div>
      <h2>Employee</h2>
      <img src={image} alt="image" />
      <p>
        Name : {name}, Salary is {salary}, Commission is {commission}
      </p>
      <p>
        Status :
        {activeStatus ? (
          <span className="active">Active</span>
        ) : (
          <span className="inactive">Inactive</span>
        )}
      </p>
      <p>
        Role :<span className="role">{role}</span>
      </p>
      <p>
        Address : {address.city}, {address.country}
      </p>
      <div>
        <label>Hobbies</label>
        <ul>
          {hobbies
            ? hobbies.map((item, index) => {
                return <li key={index}>{item}</li>;
              })
            : "no data"}
        </ul>
      </div>
      <br />
      <div>
        <label className="pb2">Emergency Contact</label>
        <p>Relation Ship : {emergencyContact.relationShip}</p>
        <p>
          Name: {emergencyContact.name}, Tel. {emergencyContact.tel}
        </p>
        <p>
          Address : {emergencyContact.address.city}, {emergencyContact.address.country}
        </p>
      </div>
    </div>
  );
}
