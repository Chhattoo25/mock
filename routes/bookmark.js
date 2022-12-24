
const {Router} = require('express');
const { getBookmark, postBookmark, delteBookmark } = require("../controllers/bookmarkController");
const { authentication } = require('../middleware/authentication');

const BookMarkRouter = Router();
BookMarkRouter.get("/getbookmark",getBookmark );


BookMarkRouter.post("/bookmarkpost",authentication,postBookmark );
BookMarkRouter.delete("/bookmarkpost",authentication,delteBookmark );


module.exports = {BookMarkRouter}