/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
//GET DATA HERE
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const getContactData = () =>{
    const [data, setData] = useState([]);
    const contactPageRef = collection(db, "contactpage");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      getData();
    },[])

    const getData = async () => {
      await getDocs(contactPageRef).then((response) => {
        setLoading(false);
        if (response.docs.length > 0) {
          setData(response.docs[0].data());
        }
      });
    }

    return [data,setData]
}

export default getContactData;