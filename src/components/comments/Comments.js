import React, {useState, useEffect} from 'react'
import "./Comments.css"
import { auth } from "../../server/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";

function Comments({close, uId, blogs}) {
    const [user] = useAuthState(auth);
    const [dataComments, setDataComments] = useState([])
    const [msg, setMsg] = useState("")

    useEffect(()=>{
        setDataComments( blogs?.filter(item=> item.id === uId) )
    },[blogs, uId])

    const handleAddComments = async (comments)=>{
        firebase
        .firestore()
        .collection("blogs")
        .doc(uId)
        .update({
            comments: [...comments, {
                email: user.email,
                url: user.photoURL,
                time: new Date().getDate(),
                message: msg
            }]
        })
        .then(() => {
          console.log("successfully sent! ");
          setMsg("")
        })
        .catch((error) => {
          console.log("Error message:", error);
        });
    } 
    
    
  return (
    <div className='comments_main'>
        <div className="comments_container">
            <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={()=>handleAddComments(dataComments[0]?.data.comments)}>Submit</button>
            <div>
                {
                    dataComments[0]?.data.comments.map(({email, url,message, time}, inx)=>(
                        <div key={inx}>
                            <p>{message}</p>
                            <img src={url} alt={email} />
                            <p>{email}</p>
                            <p>{time}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div onClick={()=>close(false)} className="comments_shadow"></div>
    </div>
  )
}

export default Comments