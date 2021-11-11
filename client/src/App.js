import "./App.css";
import DraggableList from "./components/list/draggable-list/DraggableList";
import { listData } from "./assests/listData.js";

const App = () => {
  return (
    <div>
      <h1 className="header">Drag and Drop list (rank your favorites)</h1>
      <DraggableList 
        data={listData}
      />
    </div>
  );
}

export default App;
