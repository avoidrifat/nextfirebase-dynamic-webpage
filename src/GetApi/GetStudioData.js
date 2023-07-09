/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
//GET DATA HERE
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const getStudioData = () => {
  const [data, setData] = useState([]);
  const studioPageRef = collection(db, "studiopage");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getDocs(studioPageRef).then((response) => {
      setLoading(false);
      if (response.docs.length > 0) {
        setData(response.docs[0].data());
      }
    });
  };
  return [data, setData];
};

export default getStudioData;
