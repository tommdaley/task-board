export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item${task.completed ? ' task-item--completed' : ''}`}>
      <label className="task-item__label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
      </label>
      <button
        type="button"
        className="task-item__delete"
        onClick={() => onDelete(task.id)}
      >
        削除
      </button>
    </li>
  )
}
