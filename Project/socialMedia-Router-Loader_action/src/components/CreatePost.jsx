/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import { Form, redirect } from "react-router-dom";


function CreatePost() {

 

  const handlePost = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Form method="POST" className="create-post" >
        <div className="mb-3 ">
          <label
            htmlFor="userId"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            User Id :
          </label>
          <input
           name="userId"
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your user Id..."
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="title"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            Post Title :
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            placeholder="how are you feelings today.................."
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="body"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            Post Content :
          </label>
          <textarea
            name="body"
            type="text"
            className="form-control"
            id="body"
            placeholder="tell us more about it"
            rows={4}
          />
        </div>


        <div className="mb-3 ">
          <label
            htmlFor="likes"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            No of likes :
          </label>
          <input
           name="likes"
            type="text"
            className="form-control"
            id="likes"
            placeholder="Enter your no of  likes ..."
          />
        </div>

        <div className="mb-3 ">
          <label
            htmlFor="dislikes"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            No of dislikes :
          </label>
          <input
           name="dislikes"
            type="text"
            className="form-control"
            id="dislikes"
            placeholder="Enter your no of dislikes ..."
          />
        </div>



        <div className="mb-3 ">
          <label
            htmlFor="tags"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            Enter your tags :
          </label>
          <input
           name="tags"
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter your  content related tags using space..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
}
export const createPostAction= async (data,addPost) =>{


  const formData=await data.request.formData();
  const postData=Object.fromEntries(formData);
  postData.reactions={
    likes:postData.likes,
    dislikes:postData.dislikes
  }
  postData.tags=postData.tags.split(" ");

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data => {
    //  console.log(data)
    addPost(data)
    }
    );
   return redirect('/')
}
export default CreatePost;
