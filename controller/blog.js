const blog = require("../models/blog");
const uploadImage = require("../utils/uploadImage");

exports.createBlog = async (req, res) => {
  try {
    const { title, tags, content } = req.body;

    const image = req.files.image;

    if (!title || !tags || !content) {
      return res.status(401).json({
        success: false,
        message: "please fill all the fields",
      });
    }

    let NewTags = JSON.parse(tags);

    const imageResponce = await uploadImage(image, process.env.CLOUD_FOLDER);

    const newBlogResponce = await blog.create({
      title,
      tags: NewTags,
      content,
      image: imageResponce.secure_url,
    });

    return res.status(200).json({
      success: true,
      message: "blog created",
      newBlogResponce,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: error.message,
      message: "Blog not created successfully",
    });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    console.log("Req params",req.params);
    const responce = await blog.find();
    return res.status(200).json({
      success: true,
      data: responce,
      message: "Blog get successfully",
    });
  } catch (error) {
    return res.status(401).json({
      success:false,
      data:error.message,
      message:"blog not get successfully",
    })
  }
};
