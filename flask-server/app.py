from flask import Flask, request, jsonify
import pymysql

conn = pymysql.connect(
    host='1.117.249.165',
    user='chatbot',
    password='EDsRCsMJ7eRxRWpe',
    database='chatbot')

cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)

app = Flask(__name__)


@app.route("/getTrackNum")
def getTrackNum():
  order_number=request.args.get('order_number')
  sql=f"select tracking_number from my_order where order_number='{order_number}'"
  cursor.execute(sql)   # execute sql statement
  res=cursor.fetchone()
  if res is None:
    msg="Sorry, I couldn't find the order number. Please enter the correct one!"
  else:
    msg="The tracking number for your order is: "+res.get("tracking_number") + ". It's currently on board with NZ Post, and estimated to be delivered within 2-3 days."

  response={
    'code': 200,
    'msg': msg,
    'date': "27 May 2022"
  }

  return jsonify(response)

if __name__ == "__main__":
  app.run(debug=True)