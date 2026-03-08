function Header() {
  return (
    <header>
      <div className="header-title">Six Shooter</div>
      <nav className="header-nav">
        <button className="nav-btn">New Game</button>
        <button className="nav-btn">How to Play</button>
        <button className="nav-btn">Settings</button>
        <button className="nav-btn">Statistics</button>
        <button className="nav-btn">Exit</button>
      </nav>
    </header>
  );
}

export default Header;
