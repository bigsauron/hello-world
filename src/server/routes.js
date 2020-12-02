const express = require('express');
const remote = require('./remote');

const router = express.Router();

router.all('/*', async (req, res) => {
  const { url, method, body } = req;
  res.set('Cache-Control', 'no-store');

  try {
    const headers = {};
    const response = await remote().request({
      method,
      url,
      data: body,
      headers,
    });

    const { status, data } = response;
    return res.status(status).json(data);

  } catch (error) {
    const { status, data } = error;
    if (status === 404) {
      return res.status(status).json({ message: 'Unknown API!' });
    }
    return res.status(status).send(data);
  }
});

module.exports = router;
