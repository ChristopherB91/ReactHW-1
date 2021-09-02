import './App.css';
import Navbar from './NavBar';
import { Box } from './Box';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <p1><Box name="Reviews" num1="450"/></p1>
        <p2><Box name="Average Rating" num1="4.0"/></p2>
        <p3><Box name="Sentiment Analysis" num1="4.0"/></p3>
        <p4><Box name="Website Visitors" num1="4.0"/></p4>
    </div>
  );
}

export default App;
