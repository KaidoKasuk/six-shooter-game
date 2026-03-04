function Player() {
  return (
    <div class="main-section">
      <div class="player-panel">
        <div class="profile-pic">
          <img
            class="profile-pic"
            src="assets/profile-svgrepo-com.svg"
            alt="your profile picture"
          />
        </div>
        <div class="player-name">V. Kangur</div>

        <div class="health-section">
          <div>
            <span>Health</span>
            <span>4 / 5</span>
          </div>
          <div class="health-track">
            <div class="health-fill player-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
