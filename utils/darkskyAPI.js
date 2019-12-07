const request = require("request");
require("dotenv").config();
const darkskyKey = process.env.DARKSKY_SECRET_KEY;

module.exports = (latitude, longitude) => {
  const darkskyBaseUrl = `https://api.darksky.net/forecast/${darkskyKey}/${latitude},${longitude}`;

  let resBody = {};
  request(darkskyBaseUrl, function(error, response, body) {
    if (error) throw new Error(error);
    if (response.statusCode === 403) {
      const newError = {};
      newError.message = "not registered";
      throw new Error(newError.message);
    }
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
    resBody = { ...body };
  });
  return resBody;
  // try {
  //   const res = await request(darkskyBaseUrl);
  //   console.log("res :", res);
  // } catch (err) {
  //   throw new Error(err);
};
