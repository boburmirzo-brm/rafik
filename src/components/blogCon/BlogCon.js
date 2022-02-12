import React, {useState} from "react";
import "./BlogCon.css";
import firebase from "firebase";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { auth, provider } from "../../server/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Comments from "../comments/Comments";


function BlogCon({ blogs, func }) {
  const [commentShow, setCommentShow] = useState(false)
  const [uId, setUId] = useState(null)
  const [user] = useAuthState(auth);

  document.body.style.overflow = commentShow ? "hidden" : "auto"


  const handleIsLike = async (id, likeCount) => {
    if (user) {
      if (!likeCount.includes(user.email)) {
        firebase
          .firestore()
          .collection("blogs")
          .doc(id)
          .update({
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
            likeCount: [...likeCount].filter((i) => i !== user.email),
          })
          .then(() => {
            console.log("successfully decreased! ");
          })
          .catch((error) => {
            console.log("Error increasing document:", error);
          });
      }
    } else {
      await auth.signInWithPopup(provider);
    }
  };


  return (
    <div className="blog_con">
      <div className="blog_conContainer">
        {blogs?.map(({ data, id, uniqueId }, inx) => (
          <div
            key={inx}
            onDoubleClick={()=> handleIsLike(
              id || uniqueId,
              data.likeCount,
            )}
            className={
              data.desc.length > 1200 ? "blog_conItem long" : "blog_conItem"
            }
          >
            {
              func.admin && <div onClick={()=>{
                  func.setmodalShow(true)
                  func.setuid(uniqueId)
                }} className="create_blogsClose">
                    <FaTrashAlt/>
                </div>
            }
              
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
                      id || uniqueId,
                      data.likeCount,
                    )
                  }
                />
              ) : (
                <AiFillHeart
                  onClick={() =>
                    handleIsLike(
                      id || uniqueId,
                      data.likeCount,
                    )
                  }
                />
              )}
              <span>{data.likeCount.length}</span>{" "}
              <BiCommentDetail className="blog_commnetSvg" onClick={async () =>{
                if(user){
                  setCommentShow(true)
                  setUId(id || uniqueId)
                } else {
                  await auth.signInWithPopup(provider)
                }
                  
                  }} />
                <span>{data.comments.length}</span>
            </div>
          </div>
        ))}

      </div>
      {
          commentShow &&   <Comments blogs={blogs} uId={uId} close={setCommentShow}/>
      }
    
    </div>
  );
}

export default BlogCon;
