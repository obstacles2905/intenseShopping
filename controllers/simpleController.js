
class SimpleController {
  constructor() {

  };

  index(req, res) {
    console.log("simple class yaiks")
    res.render("simple");
  }

}

module.exports = SimpleController;