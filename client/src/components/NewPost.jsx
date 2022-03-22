import React, { useState, useEffect } from 'react';
import useForm from "../customHooks/useForm";

function NewPost(props) {

    

    const newPost = () => {
        props.setPosts({...props.Posts,name: values.name, text: values.text});
    }

    const {
        values,
        handleChange,
        handleSubmit
    } = useForm(newPost);

    return ( 
        <div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input name="name" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Post</label>
                    <input name="text" type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
     );
}

export default NewPost;