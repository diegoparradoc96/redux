import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  /* State */
  const tasks = useSelector((state) => state.tasks);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
      console.log(task);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="title"
        value={task.title}
      ></input>
      <textarea
        onChange={handleChange}
        name="description"
        placeholder="description"
        value={task.description}
      ></textarea>

      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
