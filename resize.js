const Resize = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "resized"
    })
  };

  callback(null, response);
};

export default Resize;
