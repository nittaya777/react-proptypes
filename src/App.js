import logo from "./logo.svg";
import "./App.css";
import Employees from "./components/Employees";
import PropTypes from "prop-types";
Employees.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  salary: PropTypes.number.isRequired,
  commission: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  hobbies: PropTypes.array,
  activeStatus: PropTypes.bool.isRequired,
  address: PropTypes.shape({
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
  role: PropTypes.oneOf(["ADMIN", "USER"]),
  emergencyContact: PropTypes.shape({
    relationShip: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    address: PropTypes.shape({
      country: PropTypes.string.isRequired,
      city: PropTypes.string,
    }),
  }),
};

function App() {
  let name = "John";
  let commission = "11000";
  let salary = Number("50000");
  let hobbies = ["Gaming", "Design", "Art"];
  let activeStatus = false;
  let address = {
    country: "Thailand",
    city: "Bangkok",
  };
  let role = "ADMIN";
  let emergencyContact = {
    relationShip: "Friend",
    name: "Linda Flower",
    tel: "071-000-9871",
    address: {
      country: "Thailand",
      city: "Bangkok",
    },
  };
  Employees.defaultProps = {
    image:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1584&q=80",
  };

  return (
    <div className="container">
      <h1>PropTypes</h1>
      <div className="box">
        <Employees
          name={name}
          commission={commission}
          salary={salary}
          hobbies={hobbies}
          activeStatus={activeStatus}
          address={address}
          role={role}
          emergencyContact={emergencyContact}
        />
      </div>
    </div>
  );
}

export default App;
