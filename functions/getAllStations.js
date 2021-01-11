const connectToDB = require('./config/db');
let conn = null;

const Station = require('./models/stations');

exports.handler = async function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    conn = await connectToDB(conn);
    const S = conn.model('stations', Station.schema);

    const stations = await S.find({});

    return {
      statusCode: 200,
      body: JSON.stringify(stations)
    };
  } catch (err) {
    callback(err);
  }
}
