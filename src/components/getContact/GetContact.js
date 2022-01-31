import React, { useState, useEffect } from 'react';
import "./GetContact.css"
import { db } from "../../server/firebase"
import {FaTrashAlt} from "react-icons/fa"
import firebase from 'firebase';

function GetContact() {
  const [data, setData] = useState([])

  const [modalShow, setmodalShow] = useState(false);
  const [uid, setuid] = useState("");

  modalShow? document.body.style.overflow = "hidden": document.body.style.overflow = "auto"

  useEffect(()=>{
    db.collection("message").orderBy("createAt").onSnapshot(item=>(
      setData(item.docs.map(i=>({
        uniqueId: i.id,
        data: i.data()
      })))
    ))
  },[])

  const deleteBlog = (id)=>{
    setuid("")
    firebase.firestore().collection('message').doc(id).delete()
    .then(()=>{console.log("successfully deleted! ")})
    .catch((error)=>{ console.log("Error removing document:", error)})
}


  return <div className='get_contact'>
        <div className="get_contactContainer">
          <h1 className="get_contactTitle">
            Contact Me
          </h1>
          {
            [...data].reverse()?.map((item, inx)=>(
              <div key={inx} className="get_contactItem">
                <p className='get_contactItemName'>Name: <b>{item.data.name}</b></p>
                <p className='get_contactItemMesTitle'>Message:</p>
                <p className='get_contactItemMes'>{item.data.message}</p>
                <p className='get_contactItemEmail'>Email: <a rel="noreferrer" target="_blank" href={`https://${item.data.email}`}>{item.data.email}</a></p>
                <div onClick={()=>{   
                       setmodalShow(true)
                       setuid(item.uniqueId)  
                    }} className="create_blogsClose">
                        <FaTrashAlt/>
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
  </div>;
}

export default GetContact;
