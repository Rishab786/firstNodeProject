exports.getData = (req, res, next) => {
  const Name = req.body.userName;
  const email = req.body.id;
  res.send(
    `<h2> Your Name is: ${Name}</h2> <br> <h2> Your Email is:  ${email}</h2>`
  );
};
