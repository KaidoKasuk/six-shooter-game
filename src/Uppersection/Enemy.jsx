function Enemy() {
  return (
    <div className="player-panel enemy">
      <div className="profile-pic">
        <img
          className="profile-pic"
          src="assets/profile-svgrepo-com.svg"
          alt=""
        />
      </div>

      <div className="player-name">Enemy</div>

      <div className="health-section">
        <div>
          <span>Health</span>
          <span>3 / 5</span>
        </div>
        <div className="health-track">
          <div className="health-fill enemy-fill"></div>
        </div>
      </div>
    </div>
  );
}
export default Enemy;
