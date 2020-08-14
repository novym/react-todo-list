import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';
import './Todo.scss';

function Todo({ name }) {
  const [todo, setTodo] = useState('');
  const [items, setItems] = useState([
    {
      name: 'take out trash',
      complete: false
    },
    {
      name: 'sweep floor',
      complete: false
    }
  ]);

  function addItem(e, value) {
    e.preventDefault();

    if (value !== '') {
      setItems([...items, { name: value, complete: false }]);
      setTodo('');
    }
  }

  function updateInput(e) {
    setTodo(e.target.value);
  }

  function removeItem(index) {
    const newList = [...items];

    newList.splice(index, 1);
    setItems(newList);
  }

  function updateStatus(item, index) {
    const newItem = {
      ...item,
      complete: !item.complete
    };

    const newList = [...items];

    newList[index] = newItem;
    setItems(newList);
  }

  return (
    <div className="todo-container">
      <h1>{name}</h1>
      <hr />
      <h5>(click to complete)</h5>
      <ul>
        {items.map((item, index) => (
          <li key={index + item}>
            <div
              className={`name ${item.complete ? 'complete' : ''}`}
              onClick={() => updateStatus(item, index)}
            >
              {item.name}
            </div>
            <button className="remove-button" onClick={() => removeItem(index)}>
              <span className="material-icons">delete_outline</span>
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <TodoForm addItem={addItem} updateInput={updateInput} todo={todo} />
    </div>
  );
}

Todo.defaultProps = {
  name: 'My Todo list'
};

Todo.propTypes = {
  name: PropTypes.string.isRequired
};

export default Todo;
