import React, { Component } from "react"; // Importing React and Component from the React library

// Defining a class-based React component named 'Counter'
class Counter extends Component {
  // Constructor method initializes the component
  constructor(props) {
    super(props); // Call the parent class constructor to access 'this.props'
    this.state = {
      count: 0, // Initial state: 'count' is set to 0
    };
  }

  // Method to increment the 'count' value
  increment = () => {
    // Updating the state using setState (ensures proper state management)
    this.setState((prevState) => ({
      count: prevState.count + 1, // Incrementing the current count by 1
    }));
  };

  // Method to decrement the 'count' value
  decrement = () => {
    // Updating the state using setState
    this.setState((prevState) => ({
      count: prevState.count - 1, // Decrementing the current count by 1
    }));
  };

  // The render method determines what to display in the UI
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}> {/* Styling the container */}
        <h1>Counter</h1> {/* Displaying the heading */}
        <h2>{this.state.count}</h2> {/* Displaying the current 'count' value */}
        <button
          onClick={this.increment} // Calling the 'increment' method when clicked
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "#28a745", // Green button
            color: "#fff", // White text color
            border: "none",
            borderRadius: "5px",
            cursor: "pointer", // Changes the cursor to pointer on hover
          }}
        >
          Increment
        </button>
        <button
          onClick={this.decrement} // Calling the 'decrement' method when clicked
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "#dc3545", // Red button
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer", // Changes the cursor to pointer on hover
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter; // Exporting the Counter component so it can be used in other files
