const fetch = require('node-fetch');

export default function handler(req, res) {
  const feed = 'https://rsshub.app/picuki/profile/filmkitnet'
  fetch(feed)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      console.log(data);
      res.status(200).json({
        body: data,
      });
    });
}