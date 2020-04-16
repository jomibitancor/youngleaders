# import os
# import sys


# sys.path.insert(0, os.path.dirname(__file__))


# def application(environ, start_response):
#     start_response('200 OK', [('Content-Type', 'text/plain')])
#     message = 'It works!\n'
#     version = 'Python %s\n' % sys.version.split()[0]
#     response = '\n'.join([message, version])
#     return [response.encode()]

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('page01_main.html')

@app.route('/about')
def about():
    return render_template('page02_about.html')

@app.route('/speakers')
def speakers():
    return render_template('page03_speakers.html')

@app.route('/events')
def events():
    return render_template('page04_events.html')

@app.route('/video-resources')
def videoresources():
    return render_template('page05_videoresources.html')

@app.route('/ways-to-give')
def waystogive():
    return render_template('page06_waystogive.html')

@app.route('/opportunities')
def opportunities():
    return render_template('page07_opportunities.html')

@app.route('/contact')
def contact():
    return render_template('page08_contact.html')

if __name__ == '__main__':
 app.run(debug=True)