class NewsControllers {
  //lấy ra trang chủ thì thường đặt là index
  //[GET] /news
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.send("Ellie Sunshine");
  }
}
export default NewsControllers;
