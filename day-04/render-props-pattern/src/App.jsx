// import CarTracker from "./messy/CarTracker";
// import BikeTracker from "./messy/BikeTracker";

// import MouseTracker from "./with-pattern/MouseTracker";

import Toggle from "./with-pattern/Toggle";
import MouseTrackerWithChildren from "./with-pattern/using-children/MouseTrackerWithChildren";
import "./App.css";
import ToggleWithChildren from "./with-pattern/using-children/ToggleWithChildren";

function App() {
  return (
    <div className="flex flex-col items-center m-2">
      {/*<CarTracker />
      <BikeTracker />

            <MouseTracker
                render={(pos) => (
                    <p>
                        🚗 Car is at ({pos.x}, {pos.y})
                    </p>
                )}
            />

             <MouseTracker
                render={({x, y}) => (
                    <p>
                         🏍️ Bike is at ({x}, {y})
                    </p>
                )}
            />*/}

      <MouseTrackerWithChildren>
        {({ x, y }) => (
          <p>
            🚗 Car is at ({x}, {y})
          </p>
        )}
      </MouseTrackerWithChildren>

      <MouseTrackerWithChildren>
        {({ x, y }) => (
          <p>
            🏍️ Bike is at ({x}, {y})
          </p>
        )}
      </MouseTrackerWithChildren>

      <Toggle
        render={(isOpen) => (
          <span className="toggle-text">{isOpen ? "ON" : "OFF"}</span>
        )}
      />

      <ToggleWithChildren>
        {(isOpen) => (
          <span className="toggle-text">{isOpen ? "ON" : "OFF"}</span>
        )}
      </ToggleWithChildren>
    </div>
  );
}

export default App;
