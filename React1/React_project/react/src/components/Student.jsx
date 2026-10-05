import React from 'react';

const Student = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: 'yellowgreen',
          border: '2px solid red',
          height: '400px',
          width: '300px',
        }}
      >
        <h2>{props.name}</h2>
        
        <img
          src="https://img.magnific.com/free-photo/3d-cartoon-character_23-2151021986.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Student"
          height="100px"
          width="100px"
        />
        <h3>{props.roll}</h3>
        <h3>{props.class}</h3>
      
      </div>
    </div>
  );
};

export default Student;