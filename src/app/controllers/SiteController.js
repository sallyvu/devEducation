class SiteController {
  //[GET] /home
  index(req, res) {
    res.render("home");
  }
  //[GET] /search
  search(req, res) {
    res.render("search");
  }
  //[GET] /contact
  contact(req, res) {
    res.render("contact");
  }
}
export default SiteController;
