import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>login page</h1>
      <br></br>
      <form>
        <label>
          user name:
          <input type="text" name="user name" />
        </label>
        <br></br>
        <label>
          password:
          <input type="text" name="password"/>
        </label>
        <br></br>
        <label>
          Email id:
          <input type="text" name="password"/>
        </label>
        <br></br>
        <label>
          phone number:
          <input type="text" name="password"/>
        </label>
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
