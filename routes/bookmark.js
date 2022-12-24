
const {Router} = require('express');
const { getBookmark, postBookmark, delteBookmark } = require("../controllers/bookmarkController");

const BookMarkRouter = Router();
BookMarkRouter.get("/getbookmark",getBookmark );


BookMarkRouter.post("/bookmarkpost",postBookmark );
BookMarkRouter.post("/bookmarkpost",delteBookmark );


module.exports = {BookMarkRouter}