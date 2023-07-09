/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
//GET DATA HERE
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const getHomeData = () => {
  const [homedata, setHomeData] = useState([]);
  const homePageRef = collection(db, "homepage");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getDocs(homePageRef).then((response) => {
      setLoading(false);
      if (response.docs.length > 0) {
        setHomeData(response.docs[0].data());
      }
    });
  };

  return [homedata, setHomeData];
};

export default getHomeData;
