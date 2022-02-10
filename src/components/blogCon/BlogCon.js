import React, { useState } from "react";
import "./BlogCon.css";
import firebase from "firebase";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { auth, provider } from "../../server/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function BlogCon({ blogs }) {
  // const [isLike, setIsLike] = useState(false);
  const [user] = useAuthState(auth);
  console.log(user);

  const handleIsLike = async (id, likeCount, title, desc, url) => {
    if (user) {
      if (!likeCount.includes(user.email)) {
        firebase
          .firestore()
          .collection("blogs")
          .doc(id)
          .update({
            title,
            desc,
            url,
            likeCount: [...likeCount, user.email],
          })
          .then(() => {
            console.log("successfully increased! ");
          })
          .catch((error) => {
            console.log("Error increasing document:", error);
          });
      } else {
        firebase
          .firestore()
          .collection("blogs")
          .doc(id)
          .update({
            title,
            desc,
            url,
            likeCount: [...likeCount].filter((i)=> i!==user.email),
          })
          .then(() => {
            console.log("successfully decreased! ");
          })
          .catch((error) => {
            console.log("Error increasing document:", error);
          });
      }
      // setIsLike(!isLike);
    } else {
      await auth.signInWithPopup(provider);
    }
  };

  return (
    <div className="blog_con">
      <div className="blog_conContainer">
        {blogs?.map(({ data, id }, inx) => (
          <div
            key={inx}
            className={
              data.desc.length > 1200 ? "blog_conItem long" : "blog_conItem"
            }
          >
            <div className="blog_conItemText">
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </div>
            <div className="blog_conItemImage">
              <img src={data.url} alt="" />
            </div>
            <div className="blog_heart">
              {!data?.likeCount.includes(user?.email) ? (
                <AiOutlineHeart
                  onClick={() =>
                    handleIsLike(
                      id,
                      data.likeCount,
                      data.title,
                      data.desc,
                      data.url
                    )
                  }
                />
              ) : (
                <AiFillHeart
                  onClick={() =>
                    handleIsLike(
                      id,
                      data.likeCount,
                      data.title,
                      data.desc,
                      data.url
                    )
                  }
                />
              )}
              <span>{data.likeCount.length}</span>{" "}
              <BiCommentDetail onClick={() => window.alert("Salom")} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCon;
