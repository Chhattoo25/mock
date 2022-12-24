const { BookmarkModel } = require("../Models/Bookmark");

const getBookmark = async (req, res) => {
  const data = await BookmarkModel.find();
  res.send({ data: data, msg: "hi" });
};

const postBookmark = async (req, res) => {
  const { id } = req.body;
  const data = await ProductModel.findOne({ _id: id });
  if (data) {
    const new_bookmark = new BookmarkModel({
     category:data.category,
      title: data.title,
      message: data.message,
  
    });
    console.log(new_bookmark);
    await new_bookmark.save();
    res.send({ msg: "product is add to bookmark", data: data });
  } else {
    res.send({ msg: "product not exist more" });
  }

  // console.log(data)
};

const delteBookmark = async (req, res) => {
                     const { id } = req.params;
                     const data = await BookmarkModel.findOne({ _id: id });
                     if (data) {
                       await BookmarkModel.deleteOne({ _id: id });
                       res.send({ msg: "product is deleted", data: data });
                     } else {
                       res.send({ msg: "product not exist more" });
                     }
                     console.log(data);
                   }
module.exports = {
  getBookmark,postBookmark,delteBookmark
};
