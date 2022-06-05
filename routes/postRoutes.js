const express = require("express")
const router = express.Router()
const postController = require("../middlewares/postController")
const methodOverride = require("method-override")

router.use(methodOverride('_method'))

router.get("/", postController.mwStudent);
router.get("/student", postController.mwStudent);
router.get("/teacher", postController.mwTeacher);
router.get("/edit/:id", postController.mwLoadPost);

router.post("/new",express.urlencoded({ extended: true}), postController.mwNewPost);
router.post("/edit/:id", express.urlencoded({ extended: true}), postController.mwEdit);

router.delete("/delete/:id", express.urlencoded({ extended: true}), postController.mwDelete);
router.delete("/", express.json, postController.mwDelete)

module.exports = router