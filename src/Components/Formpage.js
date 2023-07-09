/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { db, storage } from "/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "@firebase/firestore";
import Image from "next/image";

const FormPage = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const userCollectionRef = collection(db, "users");

  const handleSubmit = async (event) => {
    console.log(text, image);
    event.preventDefault();
    if (image) {
      const imageRef = ref(storage, `homeimage/${image.name}`);
      await uploadBytes(imageRef, image).then(() => {
        getDownloadURL(imageRef).then((url) => {
          addDoc(userCollectionRef, {
            text,
            url,
          })
            .then(() => {
              alert("Data added");
              setText("");
              setImage("");
            })
            .catch((err) => {
              console.error;
            });
        });
      });
    }
  };

  //GET DATA HERE
  const [data, setData] = useState([]);

  useEffect(
    () => {
      getData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const getData = async () => {
    await getDocs(userCollectionRef).then((response) => {
      setData(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };
  console.log(data);

  //Update data
  const [deleteUrl, setDeleteUrl] = useState("");
  const [ID, setID] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const getSingleData = (id, text, url) => {
    setDeleteUrl(url);
    setID(id);
    setText(text);
    setIsUpdate(true);
  };
  const handleUpdate = async (event) => {
    event.preventDefault();
    let fieldToEdit = doc(db, "users", ID);
    if (deleteUrl) {
      const path = deleteUrl.split("%2F")[1].split("?")[0];
      const urlRef = ref(storage, `homeimage/${path}`);
      deleteObject(urlRef);
    } else {
      return console.log("couldn delete");
    }

    if (image) {
      const imageRef = ref(storage, `homeimage/${image.name}`);
      await uploadBytes(imageRef, image).then(() => {
        getDownloadURL(imageRef).then((url) => {
          updateDoc(fieldToEdit, {
            text: text,
            url: url,
          })
            .then(() => {
              alert("Data Updated");
              getData();
              setText("");
              setImage("");
              setIsUpdate(false);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
    }
  };
  //Delete data
  const deleteSingleData = (id, url) => {
    //delete photo from fire storage first
    const path = url.split("%2F")[1].split("?")[0];
    const urlRef = ref(storage, `homeimage/${path}`);
    deleteObject(urlRef);

    let fieldToEdit = doc(db, "users", id);
    deleteDoc(fieldToEdit)
      .then(() => {
        alert("Data Deleted");
        getData();
      })
      .catch((err) => {
        alert("Cannot Delete that field..");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <form onSubmit={isUpdate ? handleUpdate : handleSubmit}>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="textInput">Text Input:</label>
          <input
            onChange={(event) => setText(event.target.value)}
            required
            type="text"
            id="textInput"
            name="textInput"
            value={text}
          />
        </div>

        {/* <div style={{ paddingTop: "30px" }}>
          <label htmlFor="textInput">Text Input:</label>
          <input required type="text" id="textInput" name="textInput" />
        </div>

        <div style={{ paddingTop: "30px" }}>
          <label htmlFor="textInput">Text Input:</label>
          <input required type="text" id="textInput" name="textInput" />
        </div>
        <div style={{ paddingTop: "30px" }}>
          <label htmlFor="textInput">Text Input:</label>
          <input required type="text" id="textInput" name="textInput" />
        </div>
        <div style={{ paddingTop: "30px" }}>
          <label htmlFor="textInput">Text Input:</label>
          <input required type="text" id="textInput" name="textInput" />
        </div> */}

        <div style={{ paddingTop: "10px" }}>
          <label htmlFor="fileInput">File Upload:</label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            required
            style={{ width: "250px", marginTop: "10px" }}
            type="file"
            id="fileInput"
            name="fileInput"
            accept="image/*"
          />
        </div>

        {isUpdate ? (
          <input required value="Update" type="submit" />
        ) : (
          <input required value="Upload" type="submit" />
        )}
      </form>
      <div>
        {data.map((d) => {
          return (
            <div key={d.id} style={{ border: "1px solid red" }}>
              <h1>name:{d.text}</h1>
              <img
                style={{ width: "200px", height: "200px" }}
                src={d.url}
                alt="image"
              />
              <button onClick={() => getSingleData(d.id, d.text, d.url)}>
                Update
              </button>
              <button onClick={() => deleteSingleData(d.id, d.url)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormPage;
