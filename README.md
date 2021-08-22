A proyect made in the course The Complete Web Developer in 2021

Notes on what I learned

How to make a proyect using CRA. CRA files structure. Using classes (and the difference with hooks).

The use of javascript inside jsx, using brackets. For example, this map function: const CardList = ({robots}) => { return (

{robots.map((user, i) => { return ( ); }) }
) }
Props and State How to comunicate between components (through the parent). For example the CardList with the SearchBox State is an object that's describe the application class App extends Component { constructor() { super() this.state = { robots: [], searchfield: "" } }

class ErrorBoundry to check errors and no break the app