import "./App.css";
import Player from "./Uppersection/Player";
import Login from "./login/Login";
import Center from "./Uppersection/Center";
import Enemy from "./Uppersection/Enemy";
import Header from "./Header";
function App() {
  return (
    <>
      <Header></Header>
      <div className="upper-section">
        <Player></Player>
        <Center></Center>
        <Enemy></Enemy>
      </div>
    </>
  );
}

export default App;
