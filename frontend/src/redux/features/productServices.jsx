import axios from "axios";
const getProductSlice = async () => {
  const response = await axios.get("/api/products/all");

  if (response.data) {
    localStorage.setItem("posts", JSON.stringify(response.data));
    return response.data;
  }
};

// create post
const taskProductSlice = async (task) => {
  const response = await axios.post("/api/products/", task);
  if (response.data) {
    localStorage.setItem("items", JSON.stringify(response.data));
    return response.data;
  }
};


// delete post
const DeleteProductSlice = async (id) => {
  
  const response = await axios.delete(`/api/products/delete/${id}`);
  if (response.data) {
    localStorage.setItem("ports", JSON.stringify(response.data));
    
  }
  return response.data;
  
};

// details products
const detailsProductSlice = async (id) => {
  const response = await axios.get(`/api/products/details/${id}`);
  if (response.data) {
    localStorage.setItem("post", JSON.stringify(response.data));
    return response.data;
  }
};

const productService = {
  getProductSlice,
  taskProductSlice,
  DeleteProductSlice,
  detailsProductSlice,
 
};

export default productService;
