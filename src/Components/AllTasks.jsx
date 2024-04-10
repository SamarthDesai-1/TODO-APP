export default function AllTasks({ todo, deleteTodo }) {

  const handleDelete = (idx) => {
    deleteTodo(idx);
  };

  return (
    <>
      <div className="allTaskContainer">
        {todo.map((item, idx) => <div className="todoSection">
          <span className="display-task">{item}</span>
          <button className="btn btn-danger" onClick={() => handleDelete(idx)}>Done</button>
        </div>)}
      </div>
    </>
  );
}