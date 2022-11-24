export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
    const email = req.body.email;
    //then save email to your db
  }