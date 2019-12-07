const request = require("request");
const darkskyKey = process.env.DARKSKY_SECRET_KEY;

module.export = (latitude, longitude) => {
  const darkskyBaseUrl = `https://api.darksky.net/forecast/${darkskyKey}/${latitude},${longitude}`;
};
