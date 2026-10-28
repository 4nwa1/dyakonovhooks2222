import { useId, useRef, useState } from 'react';

export function AddTaskForm({ onAdd, inputRef }) {
  const [text, setText] = useState('');
  const ownRef = useRef(null);
  const ref = inputRef || ownRef;
  const inputId = useId();

  function handleSubmit(e) {
    e.preventDefault();
    const clean = text.trim();
    if (!clean) return;
    onAdd(clean);
    setText('');
    ref.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId} className="sr">Новая задача</label>
      <input
        id={inputId}
        ref={ref}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача"
      />
      <button>Добавить</button>
    </form>
  );
}