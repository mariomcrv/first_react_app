import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn JavaScript" />
      <Todo text="Master React" />
      <Todo text="Explore the world" />
    </div> 
  );
}

// the code above might look like html but it is not
// it is jsx, it is transformed to JS, that is why
// assigning a class is different

export default App; // I undertand that this makes this class accesible to others
// similar to public in java

// IMPORTANT //
// React compoents work this way. They are basically functions that when
// called, return jsx (java script code with html) and they dictate what should
// appear on screen
