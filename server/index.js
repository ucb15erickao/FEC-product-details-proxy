const express = require('express');
const axios = require('axios');

const server = express();
server.use(express.static(`${__dirname}/../client`));

server.get('/:pid/getGalleries', (req, res) => {
  axios.get(`http://localhost:1420/${req.params.pid}/getGalleries`)
    .then((galleries) => {
      res.status(200).send(galleries.data)
    })
    .catch(() => {
      res.status(404).send('galleries error');
    });
});

server.get('/:pid/product-details', (req, res) => {
    axios.get(`http://localhost:8080/${req.params.pid}/product-details`)
    .then((details) => {
      res.status(200).send(details.data)
    })
    .catch((error) => {
      res.status(404).send('details error');
      console.log('/:pid/product-details error');
    });
});

server.put('/:pid/product-details/wishlist', (req, res) => {
  axios.put(`http://localhost:8080/${req.params.pid}/product-details/wishlist`)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      res.status(404).send('details wishlist error');
      console.log('/:pid/product-details/wishlist error');
    });
});

server.get('/:pid/recommendation/getInfo', (req, res) => {
  axios.get(`http://localhost:1234/${req.params.pid}/recommendation/getInfo`)
    .then((recommendations) => {
      res.status(200).send(recommendations.data)
    })
    .catch((error) => {
      res.status(404).send('rec error');
      console.log('/:pid/recommendation/getInfo error');
    });
});

server.get('/:pid/reviews', (req, res) => {
  axios.get(`http://localhost:3000/${req.params.pid}/reviews`)
    .then((reviewData) => {
      res.status(200).send(reviewData.data)
    })
    .catch((error) => {
      res.status(404).send('reviews error');
      console.log('/:pid/reviews error');
    });
});

server.put('/:pid/reviews/vote/:voteType/:id/:toggle', (req, res) => {
  axios.put(`http://localhost:3000/${req.params.pid}/reviews/vote/:voteType/:id/:toggle`)
    .then((reviewVote) => {
      res.status(200).send(reviewVote.data)
    })
    .catch((error) => {
      res.status(404).send('reviewVote error');
      console.log('/:pid/reviews/vote/:voteType/:id/:toggle error');
    });
});

const PORT = 8000;
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
