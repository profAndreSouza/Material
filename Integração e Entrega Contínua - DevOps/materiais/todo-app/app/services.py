from typing import List, Optional
from app.models import Todo

class TodoService:
    def __init__(self):
        self._todos: dict[int, Todo] = {}
        self._next_id: int = 1

    def create(self, title: str, description: str = "") -> Todo:
        todo = Todo(id=self._next_id, title=title, description=description, completed=False)
        self._todos[todo.id] = todo
        self._next_id += 1
        return todo

    def list_all(self) -> List[Todo]:
        return list(self._todos.values())

    def get_by_id(self, todo_id: int) -> Optional[Todo]:
        return self._todos.get(todo_id)

    def update(self, todo_id: int, title: Optional[str] = None, description: Optional[str] = None, completed: Optional[bool] = None) -> Optional[Todo]:
        todo = self.get_by_id(todo_id)
        if not todo:
            return None

        if title is not None:
            if not title.strip():
                raise ValueError("O título da tarefa não pode ser vazio.")
            todo.title = title.strip()
            
        if description is not None:
            todo.description = description.strip()

        if completed is not None:
            todo.completed = completed

        return todo

    def delete(self, todo_id: int) -> bool:
        if todo_id in self._todos:
            del self._todos[todo_id]
            return True
        return False

    def clear(self) -> None:
        self._todos.clear()
        self._next_id = 1
