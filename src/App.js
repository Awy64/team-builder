import React, { useState } from 'react';
import './App.css';
import Form from "./components/form";
import Members from "./components/members"

function App() {
  const [teamMembers, setTeamMembers] = useState([{name: "", email: "", role: ""}])
  console.log(teamMembers)

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamMembers([...teamMembers, newMember])
  }
  return (
    <div className="App">
      <Form addNewMember={addNewMember}/>
      <Members members={teamMembers}/>
    </div>
  );
}

export default App;
