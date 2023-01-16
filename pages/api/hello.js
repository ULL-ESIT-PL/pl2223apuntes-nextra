export default async function (req, res) {
  console.log(req.query);
  const {a, b} = req.query;
  res.status(200).json({ 
    sum: Number(a)+Number(b), 
    comment: "hello world!. This is running on the server!",
    ...req.query 
  });
}
