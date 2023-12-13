import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Teams from './Components/Teams';

import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/Home.scss";
import "./Styles/Footer.scss";
import "./Styles/Contact.scss";
import "./Styles/mediaquery.scss";


function App() {
  return (

   <Router>
    <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/teams' element={<Teams/>}/>
     </Routes>
    <Footer/>
   </Router>
  );
}


export default App;






















// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./Components/Forms";
// ReactDOM.render(
//     <>
//     <App />
//     </>,
//     document.getElementById("root")
// );

// const date= new Date();
// const date1= date.getHours();
// const cssstyle={
//   };
// let greeting="";
// if(date1>=1 && date1<12){
//   greeting="Good Morning";
//   cssstyle.color="green";
// }
// else if(date1>=12 && date1<19){
//   greeting="Good afternoon";
//   cssstyle.color="red";
// }
// else{
//   greeting="Good Night";
//   cssstyle.color="black";
// }

// ReactDOM.render(
//   <>
//   <h1>Hii <span style={cssstyle}> {greeting}</span></h1>
//   </>,
//   document.getElementById("root")
// );




// import App from "./Components/Count";
// ReactDOM.render(
//     <>
//     <App />
//     </>,
//     document.getElementById("root")
// );




// import Hooks from "./Components/Hooks";

// ReactDOM.render( <>
//     <
//     Hooks / >
//     </>,document.getElementById("root")
// );












// import Heading from "./Components/Heading";
// import Para from "./Components/Para";
// ReactDOM.render(
// <>
// <Heading/>
// <Para/>
// </>,
//   document.getElementById("root")
// );



// import React from "react";
// import ReactDOM from "react-dom";

// import {Practice1} from "./Components/Practice1";

// ReactDOM.render(
//     <>
//     <h1/>
//     </>,
//     document.getElementById("root")
// );