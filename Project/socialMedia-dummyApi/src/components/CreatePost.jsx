/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
  const {addPost} = useContext(PostList)

  const userIdEmt = useRef();
  const titleEmt = useRef();
  const bodyEmt = useRef();
  const reactionEmt = useRef();
  const tagsEmt = useRef();
 
  const handlePost = () => {
  const userId=userIdEmt.current.value;
  const title=titleEmt.current.value;
  const body=bodyEmt.current.value;
  const reaction=reactionEmt.current.value;
  const tags=tagsEmt.current.value.split(" ");
  addPost(userId,title,body,reaction,tags)
  userIdEmt.current.value='';
  titleEmt.current.value='';
  bodyEmt.current.value='';
  reactionEmt.current.value='';
  tagsEmt.current.value='';
  }

  return (
    <>
      <form className="create-post" onSubmit={handlePost}>
        <div className="mb-3 ">
          <label
            htmlFor="userId"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            User Id :
          </label>
          <input
            ref={userIdEmt}
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
            ref={titleEmt}
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
            ref={bodyEmt}
            type="text"
            className="form-control"
            id="body"
            placeholder="tell us more about it"
            rows={4}
          />
        </div>

        <div className="mb-3 ">
          <label
            htmlFor="reaction"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            No of reaction :
          </label>
          <input
            ref={reactionEmt}
            type="text"
            className="form-control"
            id="reaction"
            placeholder="Enter your no of recation ..."
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
            ref={tagsEmt}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter your  content related tags using space..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreatePost;
