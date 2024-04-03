import NewTaskForm from "./NewTaskForm";
import CountSection from "./CountSection";
import Heading from "./Heading";
import ListGroup from "./ListGroup";

const App = () => {
  return (
    <div className="w-96 min-h-96 mx-auto p-5 mt-5 bg-zinc-100">
      <Heading />
      <NewTaskForm />
      <ListGroup />
    </div>
  );
};

export default App;
