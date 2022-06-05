const { send } = require("express/lib/response");
const Post = require("../models/Post")

const mwStudent = async (req, res) => {
    try {
        let docs = await Post.find({});
        res.render("student", { docs })
    } catch (error) {
        res.send(error)
    }
}

const mwTeacher = async (req, res) => {
    try {
        let docs = await Post.find({});
        res.render("teacher", { docs })
    } catch (error) {
        res.send(error)
    }
}

const mwNewPost = (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    let post = new Post({
        title: title,
        description: description
    })

    post.save()

    res.redirect("/teacher")
}

const mwEdit = async (req, res) => {
    let id = req.params.id;

    let title = req.body.title;
    let description = req.body.description;

    let post = {title, description}
    
    try {
        await Post.updateOne({_id: id}, post)
        res.redirect("/teacher")

    } catch(error) {
        res.send(error)
    }
}

const mwDelete = async (req, res) => {
    let id = req.params.id;

    try {
        await Post.findByIdAndDelete(id);
        res.redirect("/teacher")
    } catch(error) {
        res.send(error)
    }

}

const mwLoadPost = async (req, res) => {
    let id = req.params.id;

    try {
        let doc = await Post.findById(id);
        res.render("edit", { body: doc })
    } catch(error) {
        res.send(error)
    }
}

module.exports = { mwStudent, mwTeacher, mwNewPost, mwEdit, mwLoadPost, mwEdit, mwDelete }