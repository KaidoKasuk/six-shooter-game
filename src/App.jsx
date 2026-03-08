import "./App.css";
import Player from "./Uppersection/Player";
import Center from "./Uppersection/Center";
import Enemy from "./Uppersection/Enemy";
import Header from "./Header";
import PlayerControls from "./MiddleSection/PlayerControls";
import Table from "./MiddleSection/Table";
function App() {
  return (
    <>
      <Header></Header>
      <div className="upper-section">
        <Player></Player>
        <Center></Center>
        <Enemy></Enemy>
      </div>
      <div className="bottom-section">
        <PlayerControls></PlayerControls>
        <Table></Table>
      </div>
    </>
  );
}

export default App;
