function Center() {
  return (
    <div className="table-panel">
      <p className="round-counter">Round 1/3 · Turn 3</p>
      <div className="cylinder-wrap">
        <div className="cylinder-outer">
          <div className="chamber empty"></div>
          <div className="chamber loaded active"></div>
          <div className="chamber empty"></div>
          <div className="chamber empty"></div>
          <div className="chamber loaded"></div>
          <div className="chamber empty"></div>
          <div className="cylinder-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Center;
