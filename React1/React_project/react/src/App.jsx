import React from 'react'    //import React from react module
import Student from './components/Student'


const App = () => {
  return (
    <div>
        <div>
           <h1>STUDENT RECORD</h1>
        </div>
        <div style={{display: 'flex',gap: '15px'}}>
          <Student name="Rohit" roll="201" class="cse23"/>
          <br />
          <Student name="pratyush" roll="831" class="cse24"/>
        </div>
    </div>   
  )
}

export default App            // to attaced the file with another