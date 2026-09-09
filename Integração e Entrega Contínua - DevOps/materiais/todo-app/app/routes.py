from flask import Blueprint, jsonify, request
from app.services import TodoService

todo_bp = Blueprint("todos", __name__, url_prefix="/api/todos")
todo_service = TodoService()

@todo_bp.route("", methods=["GET"])
def get_todos():
    todos = todo_service.list_all()
    return jsonify([t.to_dict() for t in todos]), 200

@todo_bp.route("", methods=["POST"])
def create_todo():
    data = request.get_json() or {}
    title = data.get("title")
    description = data.get("description", "")

    if not title:
        return jsonify({"error": "O campo 'title' é obrigatório."}), 400

    try:
        todo = todo_service.create(title=title, description=description)
        return jsonify(todo.to_dict()), 201
    except ValueError as e:
        return jsonify({"error": str(e)}), 400

@todo_bp.route("/<int:todo_id>", methods=["GET"])
def get_todo(todo_id: int):
    todo = todo_service.get_by_id(todo_id)
    if not todo:
        return jsonify({"error": "Tarefa não encontrada."}), 404
    return jsonify(todo.to_dict()), 200

@todo_bp.route("/<int:todo_id>", methods=["PUT"])
def update_todo(todo_id: int):
    data = request.get_json() or {}
    title = data.get("title")
    description = data.get("description")
    completed = data.get("completed")

    try:
        updated = todo_service.update(
            todo_id=todo_id,
            title=title,
            description=description,
            completed=completed
        )
        if not updated:
            return jsonify({"error": "Tarefa não encontrada."}), 404
        return jsonify(updated.to_dict()), 200
    except ValueError as e:
        return jsonify({"error": str(e)}), 400

@todo_bp.route("/<int:todo_id>", methods=["DELETE"])
def delete_todo(todo_id: int):
    deleted = todo_service.delete(todo_id)
    if not deleted:
        return jsonify({"error": "Tarefa não encontrada."}), 404
    return jsonify({"message": "Tarefa removida com sucesso."}), 200
