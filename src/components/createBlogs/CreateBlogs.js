import React, { useEffect, useState } from "react";
import "./CreateBlogs.css";
import { storage, db } from "../../server/firebase";
import firebase from "firebase";
import {FaTrashAlt} from 'react-icons/fa'
import {IoMdPhotos} from 'react-icons/io'
import defaultImage from "../../assets/photos/default.jpg"



function CreateBlogs() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [data, setData] = useState([])
  const [prograss, setPrograss] = useState(0);
  const [modalShow, setmodalShow] = useState(false);
  const [uid, setuid] = useState("");
  const [loading, setLoading] = useState(false);

  modalShow? document.body.style.overflow = "hidden": document.body.style.overflow = "auto"

  useEffect(()=>{
    db.collection("blogs").orderBy("createAt").onSnapshot(item=>(
        setData(item.docs.map(i=>({
                uniqueId: i.id,
                data: i.data()
            })))
    ))
  },[])
  const uploadImage = () => {
      if(!image){
          alert("Biror rasm tanlang")
          return;
      }
      setLoading(true)
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPrograss(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            setImage("")
            setLoading(false)
          });
      }
    );
  };

  const addDate = () => {
    db.collection("blogs").add({
      title,
      desc,
      url,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTitle("");
    setDesc("");
    setUrl("");
  };
  const deleteBlog = (id)=>{
      setuid("")
      firebase.firestore().collection('blogs').doc(id).delete()
      .then(()=>{console.log("successfully deleted! ")})
      .catch((error)=>{ console.log("Error removing document:", error)})
  }

  return (
    <div className="create_blogs">
      <div className="create_blogsContainer">
        <div className="create_blogsContainerLeft">
          <div className="create_blogsItem">
            <label htmlFor="">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="create_blogsItem">
            <label htmlFor="">Description:</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className={image ? "create_blogsImages selectImage":"create_blogsImages"}>
            <input
              type="file"
              onChange={(e) => e.target.files[0] && setImage(e.target.files[0])}
            />
            <IoMdPhotos/>

          </div>

          <button className="create_blogsBtn" disabled={loading}  onClick={uploadImage}>{loading? "Loading..." : "Upload image"} </button>

          <button className="create_blogsBtn" disabled={url === ""} onClick={addDate}>Submit</button>
        </div>
        <div className="create_blogsContainerRight">
            <div className={desc.length > 1200 ? "blog_conItem long" : "blog_conItem" }>
                <div className="blog_conItemText">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="blog_conItemImage create_blogsHidden">
                    <img src={url? url : defaultImage} alt="" />
                    <div style={{left: -100 + prograss + "%", opacity: !loading && 0}} className="create_blogsImageAnime"></div>
                </div>
            </div>
        </div>
      </div>
      <h2 className="create_blogsAll">All Blogs</h2>
      <div className="create_blogsGet">
          {
            [...data].reverse()?.map((item,inx)=>(
                <div key={inx} className={item.data.desc.length > 1200 ? "blog_conItem long" : "blog_conItem" }>
                    <div onClick={()=>{
                        setmodalShow(true)
                        setuid(item.uniqueId)
                    }} className="create_blogsClose">
                        <FaTrashAlt/>
                    </div>
                    <div className="blog_conItemText">
                        <h2>{item.data.title}</h2>
                        <p>{item.data.desc}</p>
                    </div>
                    <div className="blog_conItemImage">
                        <img src={item.data.url} alt="" />
                    </div>
                  
                 </div>
            ))
          }
      </div>
      <div className={modalShow? "create_blogsModal ": "create_blogsModal modalHidden" }>
                        <div className="create_blogsModalCon">
                            <h3>Ishonchingiz komilmi ?</h3>
                            <FaTrashAlt/>
                            <div>
                                <button onClick={()=> {
                                    deleteBlog(uid)
                                    setmodalShow(false)
                                }}>Ha</button>
                                <button onClick={()=> setmodalShow(false)}>Yo'q</button>
                            </div>
                        </div>
                        <div className="create_blogsModalClose"></div>
        </div>
    
    </div>
  );
}

export default CreateBlogs;
