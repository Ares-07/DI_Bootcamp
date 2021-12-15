#app.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:soulreaver0704@localhost/sampledb'
app.debug = True

db = SQLAlchemy(app)

class Student(db.Model):
  __tablename__='students'
  id=db.Column(db.Integer,primary_key=True)
  fname=db.Column(db.String(40))
  lname=db.Column(db.String(40))
  email=db.Column(db.String(40))

  def __init__(self,fname,lname,email):
    self.fname=fname
    self.lname=lname
    self.email=email

if __name__ == "__main__":
    app.run(debug=True)
