import React from 'react';

const Student = () => {
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
        <h2>Pratyush Priyadarshan</h2>
        
        <img
          src="https://img.magnific.com/free-photo/3d-cartoon-character_23-2151021986.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Student"
          height="100px"
          width="100px"
        />
        <h3>Roll no: 831</h3>
        <h3>Class: B.Tech CSE-23</h3>
      </div>
    </div>
  );
};

export default Student;