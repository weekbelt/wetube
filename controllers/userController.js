import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
}

export const postJoin = (req, res) => {
  const {
    body: {name, email, password, paassword2}
  } = req;
  if(password !== paassword2) {
    res.status(400)
    res.render("join", { pageTitle: "Join" });
  } else {
    // TODO: Register User
    // TODO: Log User in
    res.redirect(routes.home)
  }
}

export const login = (req, res) => 
  res.render("login", { pageTitle: "Log In" });

export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Log Out" });

export const userDetail = (req, res) =>
  res.redner("userDetail", { pageTitle: "User Detail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
