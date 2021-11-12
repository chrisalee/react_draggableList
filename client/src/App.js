import "./App.css";
import DraggableList from "./components/list/draggable-list/DraggableList";
import Card from "./components/list/card/Card";
import { listData } from "./assests/listData.js";

const App = () => {
  return (
    <div>
      <h1 className="header">Drag and Drop list (rank your favorites)</h1>
      <DraggableList 
        data={listData}
        renderItemContent={(item) => LessonCard(item)}
      />
    </div>
  );
}

const LessonCard = item => <Card item={item} />

export default App;
