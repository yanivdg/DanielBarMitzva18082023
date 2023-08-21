# app.py
from flask import Flask, render_template
import requests
from bs4 import BeautifulSoup
import os.path
app=Flask(__name__, template_folder='template')

SHARED_LINK = "https://photos.app.goo.gl/WCbCechDWLS9EpPGA"


@app.route("/")
def main():
     return render_template("index.html")

def get_image_data(link):
    response = requests.get(link)
    soup = BeautifulSoup(response.content, "html.parser")
    image_data = []
    # Extract image URLs and descriptions from the HTML
    # Populate the image_data list with dictionaries containing URL and description
    return image_data

# Read index.html content into memory
index_html_path = os.path.join(os.path.dirname(__file__), "./template/index.html")
with open(index_html_path, "r") as file:
    index_html_content = file.read()


if __name__ == "__main__":
    check_file = os.path.isfile("index.html")
    print(check_file)
    directory = os.getcwd()    
    print(f"current directory:{directory}")
    app.run(debug=True)
