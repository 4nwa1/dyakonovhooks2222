import { memo } from 'react';

export const TaskItem = memo(function TaskItem({ task, onToggle, onRemove, onRename }) {
  console.log('Рисуем задачу:', task.text);
  return (
    <li className={task.done ? 'done' : ''}>
      <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
      <span>{task.text}</span>
      <button
        onClick={() => {
          const text = prompt('Новый текст', task.text);
          if (text && text.trim()) onRename(task.id, text.trim());
        }}
      >
        Редактирование
      </button>
      <button onClick={() => onRemove(task.id)}>×</button>
    </li>
  );
});
