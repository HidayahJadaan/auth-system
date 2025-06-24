const getMe = (req, res) => {
  res.json(req.user);
};

const getAdminData = (req, res) => {
  res.json({ message: "Welcome, admin!" });
};

module.exports = { getMe, getAdminData };
