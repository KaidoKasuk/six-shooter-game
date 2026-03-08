import "./PlayerControls.css";

function PlayerControls() {
  return (
    <>
      <div className="bottom-left">
        <div className="flex">
          <div>
            Action Console
            <p className="turn">— Your Turn</p>
          </div>
          <div>
            Console log
            <p className="terminal">game@username:~$</p>
          </div>
        </div>
        <div className="bottom-navbar">
          <button className="bottom-button">Shoot Self</button>
          <button className="bottom-button">Shoot Enemy</button>
          <button className="bottom-button">Spin Chamber</button>
          <button className="bottom-button">Reload</button>
        </div>
      </div>
    </>
  );
}

export default PlayerControls;
