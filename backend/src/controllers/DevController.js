module.exports = {
  store(req, res) {
    console.log(req.boty.username);
    return res.json({ ok: true });
  }
};
