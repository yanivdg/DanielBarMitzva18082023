# app.py
from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

SHARED_LINK = "https://photos.app.goo.gl/WCbCechDWLS9EpPGA"

@app.route("/")
def index():
    image_data = get_image_data(SHARED_LINK)
    return render_template("index.html", images=image_data)

def get_image_data(link):
    response = requests.get(link)
    soup = BeautifulSoup(response.content, "html.parser")
    
    image_data = []
    
    # Extract image URLs and descriptions from the HTML
    # Populate the image_data list with dictionaries containing URL and description
    
    return image_data

if __name__ == "__main__":
    app.run(debug=True)
