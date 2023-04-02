// api routes
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
    // res.status(200).json(req.body)
  }