exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  return {
    statusCode: 200,
    body: "pong!"
  };
}
