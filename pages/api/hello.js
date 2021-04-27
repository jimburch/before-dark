const hello = (req, res) => {
  res.status(200).json({ greeting: 'hello' });
};

export default hello;