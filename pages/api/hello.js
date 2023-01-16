export default async function (req, res) {
  console.log(req.query);
  const {a, b} = req.query;
  const chuchu = Number(process.env.CHUCHU);
  res.status(200).json({ 
    sum: Number(a)+Number(b),
    chuchu: chuchu, 
    comment: "hello world!. This is running on the server!",
    ...req.query 
  });
}
