/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
//GET DATA HERE
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const getProjectData = () =>{
    const [data, setData] = useState([]);
    const ProjectPageRef = collection(db, "projects");

    useEffect(()=>{
         getDocs(ProjectPageRef).then((response) => {
            setData(
              response.docs.map((data) => {
                return { ...data.data(), id: data.id };
              })
            );
          });
    },[])
    return [data,setData]
}

export default getProjectData;