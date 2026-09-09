from flask import Flask

def create_app(test_config=None) -> Flask:
    app = Flask(__name__)

    if test_config:
        app.config.update(test_config)

    from app.routes import todo_bp
    app.register_blueprint(todo_bp)

    @app.route("/health", methods=["GET"])
    def health_check():
        return {"status": "ok"}, 200

    return app
