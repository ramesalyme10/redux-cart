import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, taskProductSlice } from "../../redux/slice/postSlice";

const Post = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const create = useSelector((state) => state.create);
  const { tasks, loading, success, message, error } = create;

  const handleFile = (e) => {
    e.preventDefault();
    let imageFile = e.target.files[0]
    setImage(imageFile)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const formData = new FormData()
    formData.append('name', name)
    formData.append('gallery', image)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('rating', rating)
    formData.append('category', category)

    dispatch(taskProductSlice(formData));
  };
  
  useEffect(() => {
    if(tasks && success){
      
      navigate("/shop");
    }
    dispatch(reset())
  },[tasks,success,navigate,dispatch])

  return (
    <header className="create-products">
      <div className="container">
        <div className="create-products-content text-center my-5">
          <h2>Create Products</h2>
          <p className="create-text">Details to details is what makes Hexashop different from the other themes.</p>
        </div>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center ">{message}</p>
        ) : (
          <>
            <form className="w-50 mx-auto my-5" encType="multipart/form-data" onSubmit={handleSubmit}  >
              <div className=" mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  aria-describedby="emailHelp"
                  placeholder="Enter New Name"
                />
              </div>
              <div className=" mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  name="gallery"
                  id="gallery"
                  onChange={handleFile}
                  placeholder="Enter New Image"
                />
              </div>
              <div className=" mb-3">
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ height: "200px" }}
                  className="form-control "
                  name="description"
                  id="description"
                ></textarea>
              </div>
              <div className=" mb-3">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter New Price"
                />
              </div>
              <div className=" mb-3">
                <label className="form-label">Rating</label>
                <input
                  type="text"
                  className="form-control"
                  name="rating"
                  id="rating"
                  onChange={(e) => setRating(e.target.value)}
                  aria-describedby="emailHelp"
                  placeholder="Enter New Rating"
                />
              </div>
              <div className=" mb-3">
                <label className="form-label">category</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter New category"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </header>
  );
};

export default Post;
