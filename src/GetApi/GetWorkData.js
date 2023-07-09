/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
//GET DATA HERE
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const getWorkData = () =>{
    const [datatext, setDataText] = useState([]);
  const [loading, setLoading] = useState(true);

    const workPageRef = collection(db, "workpage");

    useEffect(()=>{
         getData();
    },[])
    const getData = async () => {
      await getDocs(workPageRef).then((response) => {
        setLoading(false);
        if (response.docs.length > 0) {
          setDataText(response.docs[0].data());
        }
      });
    };
    return [datatext,setDataText]
}

export default getWorkData;