import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  

  function handleFirstNameChange(e) {
    setContact({
      ...contact,
      fName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setContact({
      ...contact,
      lName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setContact({
      ...contact,
      email: e.target.value
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    alert('submite')
  }

  

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input value={contact.fName} onChange={handleFirstNameChange} name="fName" placeholder="First Name" />
        <input name="lName"  value={contact.lName} onChange={handleLastNameChange} placeholder="Last Name" />
        <input name="email" value={contact.email} onChange={handleEmailChange} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
