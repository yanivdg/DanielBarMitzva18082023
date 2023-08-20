from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

# Replace with your Google Photos API endpoint
GOOGLE_PHOTOS_API_URL = "YOUR_GOOGLE_PHOTOS_API_ENDPOINT"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/photos")
def get_photos():
    try:
        response = requests.get(GOOGLE_PHOTOS_API_URL)
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)