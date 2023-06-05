const { WebUser } = require("../models/WebUSer");

const WebUserController = {
  getAll: (req, res) => {
    WebUser.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        json.status(500).json(err);
      });
  },
  getById: (req, res) => {
    const id = req.params.id;
    WebUser.findById(id)
      .then((data) => {
        if (data) {
          res.json(data);
        } else {
          res.status(404).json({ msg: "Not found!" });
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  add: (req,res) =>{
    const user = new WebUser({
        name:req.body.name,
        surname:req.body.surname,
        email:req.body.email,
        password:req.body.password,
    })
    user.save();
    res.json(user)
  },
  deleteById: (req,res) =>{
    const id = req.params.id;
    WebUser.findByIdAndDelete(id)
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
  },
  update: (req,res)=>{
    const id = req.params.id
    WebUser.findById(id)
    .then((data)=>{
        data.name=req.body.name,
        data.surname=req.body.surname,
        data.email=req.body.email,
        data.password=req.body.password,

        data.save();
        res.json(data)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
  }
};

module.exports = {
    WebUserController
}