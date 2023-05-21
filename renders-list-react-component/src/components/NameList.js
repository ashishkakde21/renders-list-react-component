import React from 'react'

function NameList() {
    const person = [
        {
            id: 1,
            name: 'Ashish',
            age: 22,
            skill: 'React'
        },
        {
            id: 2,
            name: 'piyush',
            age: 25,
            skill: 'js'
        },
        {
            id: 3,
            name: 'John',
            age: 26,
            skill: 'Java'
        },
        {
            id: 4,
            name: 'vedanshu',
            age: 25,
            skill: 'Python'
        },
        {
            id: 5,
            name: 'rohan',
            age: 24,
            skill: 'python'
        },
        {
            id: 6,
            name: 'Shrikant',
            age: 22,
            skill: 'DSA'
        },
        {
            id: 7,
            name: 'Manthan',
            age: 23,
            skill: 'javascript',
        }
    ]
    
    const personList = person.map(person => (
        <h2>
         {person.name}. is a {person.age}. years old. He know {person.skill}
        </h2>
        ))
  return <div>{personList}</div>
  
}

export default NameList
