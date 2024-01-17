import React from "react";
import ReactDOM from "react-dom";

const person = [
  //array 
  { name: "Daniel", age: 25 }, //objects
  { name: "John", age: 24 },
  { name: "Jen", age: 31 },
];
const vehicle = [
  //array
  { name: "Audi", weight: "300 kg", color: "black" }, //objects
  { name: "Volvo", weight: "400 kg", color: "blue" },
  { name: "Toyota", weight: "250 kg", color: "green" },
  { name: "Mercedes", weight: "350 kg", color: "white" },
];
//mini components
const PersonList = ({person_name, person_age}) => {
  return (
    <ul>
      <li>
        <span>Name:{person_name}</span><br/>
        <span>Age:{person_age}</span>
      </li>
    </ul>
  );
};
const VehicleList = ({vehicle_name, vehicle_weight, vehicle_color}) => {
  return (
    <ul>
      <li>
        <span>Name:{vehicle_name}</span><br/>
        <span>Weight{vehicle_weight}</span><br/>
        <span>Color:{vehicle_color}</span><br/>
      </li>
    </ul>
  );
};

export default function List() {
  return (
    <div>
      <h2>Persons List</h2>
      <ul>
        {
            person.map((person,index)=>(
                <PersonList 
                key={`${index}`}//Keys help React identify which items have changed, are added, or are removed.
                person_name={person.name}
                person_age={person.age}
                />
            ))
        }
      </ul>
      <h2>Vehicle List</h2>
      <ul>
        {
            vehicle.map((vehicle,index)=>(
                <VehicleList
                key={`${index}`}//key can be anything
                vehicle_name={vehicle.name}
                vehicle_weight={vehicle.weight}
                vehicle_color={vehicle.color}
                />
            ))
        }
      </ul>
    </div>
  );
}
