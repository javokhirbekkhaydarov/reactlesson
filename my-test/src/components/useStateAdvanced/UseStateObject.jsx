import React, {useState} from 'react'

const UseStateObject = () => {
    const [person , setPerson] = useState({
        name: "kane",
        age:28,
        message:"random message"
    })
    console.log(person);
    const changeMessage = () => {
        setPerson({ message: "top award EPl"})
    }
  return  <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}> change message</button>
  </>
}

export default UseStateObject