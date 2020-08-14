import React from 'react';
import PropTypes from 'prop-types';
import './TodoForm.scss';

function TodoForm({ addItem, updateInput, todo }) {
  return (
    <form className="todo-form" onSubmit={(e) => addItem(e, todo)}>
      <label htmlFor="todo">New Item</label>
      <input
        id="todo"
        name="todo"
        onChange={updateInput}
        required
        type="text"
        value={todo}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

TodoForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired
};

export default TodoForm;
