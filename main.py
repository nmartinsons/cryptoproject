from bottle import route, run, static_file
import json
import requests

@route('/')
def root():
  return static_file("candlestick.html", "./")

@route('/map.js')
def mapjs():
  return static_file("map.js", "./")

run(host='0.0.0.0', port=8080)
