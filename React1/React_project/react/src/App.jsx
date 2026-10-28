// import React from 'react'    //import React from react module
// import Student from './components/Student'


// const App = () => {
//   return (
//     <div>
//         <div>
//            <h1>STUDENT RECORD</h1>
//         </div>
//         <div style={{display: 'flex',gap: '15px'}}>
//           <Student name="Rohit" roll="201" class="cse23"/>
//           <br />
//           <Student name="pratyush" roll="831" class="cse24"/>
//         </div>
//     </div>   
//   )
// }

// export default App            // to attaced the file with another

// export default Student;



import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
function Home(){
  return <h1>This is my Home page</h1>
}
function About(){
  return <h1>This is my about us page </h1>
}
function phone(){
  return <h1> This is my phone page </h1>
}
const App = () => {
  return(
    <BrowserRouter>
      <nav>
        <link to="/" >HOME</link> | {" "}
        <link to="/about">ABOUT </link>| {" "}
        <link to="/Phone">PHONE </link>

      </nav>
      <Routers>
        <route path="/" element={<Home/>}/>
        <route path="/about" element={<About/>}/>
        <route path="/phone" element={<Phone/>}/>
      </Routers>
    
    
    </BrowserRouter>
  )
}



export default App 