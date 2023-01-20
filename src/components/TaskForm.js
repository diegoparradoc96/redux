import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="title"
      ></input>
      <textarea
        onChange={handleChange}
        name="description"
        placeholder="description"
      ></textarea>

      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
