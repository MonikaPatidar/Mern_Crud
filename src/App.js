import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ExercisesList from "./ExercisesList";
import EditExercise from "./EditExercise";
import CreateExercise from "./CreateExercise";
import CreateUser from "./CreateUser";


function App() {
return (
<BrowserRouter>
<Navbar />
<br />
<Route exact path="/" component={ExercisesList} />
<Route path="/edit/:id" component={EditExercise} />
<Route path="/create" component={CreateExercise} />
<Route path="/user" component={CreateUser} />
</BrowserRouter>
);
}
export default App;