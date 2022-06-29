import React, { useState, useEffect } from "react";

const ControlledInput = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email){
    const person = { id: new Date().getTime().toString(), firstName, email };
    console.log(person);
    setPeople((people) => {
      return [...people, person];
    });
    setFirstName("");
    setEmail("");}
    else{
        console.log("Ozab issiqqu");
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <br />
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="btn" type="submit">
          Add Person
        </button>
      </form>
      {people.map((person, index) => {
        const { id, firstName, email } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInput;
