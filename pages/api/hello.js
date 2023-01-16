export default async function (req, res) {
  console.log(req.query)
  res.status(200).json({ result: "hello world!. This is running on the server!" });
}
