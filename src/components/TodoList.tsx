import * as React from 'react';
import TodoItem from './TodoItem';

interface Props {

}

interface TodoItemData {
  id: number;
  text: string;
  done: boolean;
}

interface State {
  todoItems: TodoItemData[];
  input:string;
}

class TodoList extends React.Component<Props, State> {
  id: number = 0;
  state: State = {
    todoItems: [],
    input: '',
  };

  onToggle = (id: number):void => {
    const {todoItems} = this.state;
    const index = todoItems.findIndex(todo => todo.id === id);
    const selectedItem = todoItems[index];
    const nextItems = [ ...todoItems ];  // 복사
    
    const nextItem = {
      ...selectedItem,
      done: !selectedItem.done,
    };

    nextItems[index] = nextItem;

    this.setState({
      todoItems: nextItems
    });
  }

  onRemove = (id: number): void => {
    this.setState(
      ({todoItems}) => ({
        todoItems: todoItems.filter(todo => todo.id !== id)
      })
    );
  }

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    this.setState({
      input: value
    });
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState(
      ({ todoItems, input }) => ({
        input: '',
        todoItems: [...todoItems, {
          id: this.id++,
          text: input,
          done: false
        }]
      })
    );
  }

  render() {
    const { onChange,onRemove,onSubmit,onToggle } = this;
    const { input, todoItems } = this.state;

    const todoItemList = todoItems.map(
      (todo) => (
        <TodoItem
          key={todo.id}
          done={todo.done}
          onToggle={() => onToggle(todo.id)}
          onRemove={() => onRemove(todo.id)}
          text={todo.text}
        />
      )
    );
    // const todoItemList = [];
    
    // for (let i = 0; i < todoItems.length; i++ ) {
    //   const todo = todoItems[i];
    //   todoItemList.push(
    //     <TodoItem
    //       key={todo.id}
    //       done={todo.done}
    //       onToggle={() => onToggle(todo.id)}
    //       onRemove={() => onRemove(todo.id)}
    //       text={todo.text}/>
    //   );
    // }

    return (
      <div>
        <h1>오늘 뭐하지?</h1>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={input} />
          <button type="submit">추가하기</button>
        </form>
        <ul>
          {todoItemList}
        </ul>
      </div>
    );
  }

}
export default TodoList;
