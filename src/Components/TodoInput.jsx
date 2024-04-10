import { useRef } from "react";

export default function TodoInput({ addTodo }) {
  const todo = useRef();

  const handleTodoValue = () => {
    const result = validate();
    console.log(result);
    if (!result) {
      document.getElementById("error").innerHTML = "Empty field not required";
      return;
    }
    else {
      document.getElementById("error").innerHTML = "";
    }
    addTodo(todo.current.value);
    todo.current.value = "";
  };

  const validate = () => {
    console.log(todo.current.value);
    if (todo.current.value === "") {
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="inputContainer">
        <textarea name="" id="" cols="40" rows="5" className="form form-control" ref={todo}></textarea>
        <span id="error" className="text-danger"></span>
        <div className="addTodoContainer">
          <button className="btn btn-primary cust-btn" onClick={handleTodoValue}>Add task</button>
        </div>
      </div>
    </>
  );
}