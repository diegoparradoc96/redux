import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteTask } from "../features/task/taskSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  console.log(tasks);

  return (
    <div>
      <header>
        <h1>{tasks.length}</h1>
        <Link to={"/create-task"}></Link>
      </header>

      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
