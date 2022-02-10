import React, { useState, useEffect } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import "./Comments.css";
import { auth } from "../../server/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";

function Comments({ close, uId, blogs }) {
  const [user] = useAuthState(auth);
  const [dataComments, setDataComments] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setDataComments(blogs?.filter((item) => item.id === uId));
  }, [blogs, uId]);




  const ctrlPlusEnter = (e) => {
    if(e.ctrlKey && e.keyCode === 13){
        handleAddComments(dataComments[0]?.data.comments)
    }
}

//   console.log(dataComments[0]?.data.comments.reverse())
  const handleAddComments = async (comments) => {
      if(!msg){
          alert("Please write your comments...");
          return;
      }
    firebase
      .firestore()
      .collection("blogs")
      .doc(uId)
      .update({
        comments: [
          ...comments,
          {
            email: user.email,
            url: user.photoURL,
            time: `${
              new Date().getMonth() + 1
            }.${new Date().getDate()}.${new Date().getFullYear()}`,
            message: msg,
          },
        ],
      })
      .then(() => {
        console.log("successfully sent! ");
        setMsg("");
      })
      .catch((error) => {
        console.log("Error message:", error);
      });
  };

  return (
    <div className="comments_main">
      <div className="comments_container">
          <div onClick={() => close(false)} className="comments_close_btn">
          <FiX />
          </div>
        <div className="commonts_send">
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e)=> ctrlPlusEnter(e)}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="leave your comments..."
          ></textarea>
          <button
            onClick={() => handleAddComments(dataComments[0]?.data.comments)}
          >
            <RiSendPlaneFill />
          </button>
        </div>
        <div className="comments_items">
          {dataComments[0]?.data.comments ? [...dataComments[0]?.data.comments].reverse().map(
            ({ email, url, message, time }, inx) => (
              <div key={inx} className="comments_item">
                <div className="comments_user_img">
                  <img src={url} alt={email} />
                </div>
                <div className="comments_user_msg">
                  <p>{message}</p>
                  <div className="comments_user_email_time">
                    <p>{email}</p>
                    <p>{time}</p>
                  </div>
                </div>
              </div>
            )
          ) : <></>}
        </div>
      </div>
      <div onClick={() => close(false)} className="comments_shadow"></div>
    </div>
  );
}

export default Comments;
