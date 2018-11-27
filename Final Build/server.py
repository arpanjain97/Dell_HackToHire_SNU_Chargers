from flask import Flask, request, send_from_directory

app = Flask(__name__, static_url_path='')

@app.route("/")
def sendIndex():
    return send_from_directory('static', 'index.html')

@app.route("/<path:filename>")
def sendFiles(filename):
    return send_from_directory('static', filename)

if __name__ == "__main__":
    app.run()