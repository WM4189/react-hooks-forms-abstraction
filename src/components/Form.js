import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName : "John",
    lastName : "Henry",
    admin : false
  })

  function handleChange (e){
    const name = e.target.name;
    let value = e.target.value;

    if(e.target.type === "checkbox"){
      value = e.target.checked
    }
    setFormData({...formData, [name] : value})
  
  }

  return (
    <form>
      <input name="firstName" type="text" onChange={handleChange} value={formData.firstName} />
      <input name="lastName" type="text" onChange={handleChange} value={formData.lastName} />
      <input name="admin" type="checkbox" onChange={handleChange} value={formData.admin} />   
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
