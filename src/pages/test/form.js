// App.jsx
import React from 'react';
import SimpleForm from './formConfig'; // Đảm bảo đường dẫn đúng

const Form = () => {
  const user ={
    name:"She-Hulk",
    email:"jen@hlk.com",
    website:"www.she-hulk.com",
    country:"usa"
  }
  const handeSave =(values)=>{
    console.log({values})
  }
  return (
    <div >
    <h1> React Form</h1>
      <SimpleForm onSave={handeSave} {...{user}} />
    </div>
  );
};

export default Form;
