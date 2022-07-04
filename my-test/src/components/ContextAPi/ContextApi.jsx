import React, { useState, useContext } from "react";
import { data } from "../../Data";

const PersonContext = React.createContext();
//!note have a two component 1) provider 2) consumer

const ContextApi = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Props Dtilling</h3>
      <List people={people} removePerson={removePerson} />
    </PersonContext.Provider>
  );
};
const List = ({removePerson}) => {
  const MainData = useContext(PersonContext);
  return (
    <>
      {MainData.people.map((person) => {
        return (
          <SinglePerson
            removePerson={removePerson}
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextApi;
