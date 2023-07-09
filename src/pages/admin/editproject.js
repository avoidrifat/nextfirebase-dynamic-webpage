/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { db, storage } from "../../../firebaseConfig";
import { v4 } from "uuid";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

const editworks = () => {
  const [headerTitle, setHeaderTitle] = useState("");
  const [title2, setTitle2] = useState("");
  const [paraTop, setParaTop] = useState("");
  const [paraMid, setParaMid] = useState("");
  const [row, setRow] = useState("");
  const [paraBot, setParaBot] = useState("");
  const [images, setImages] = useState("");

  const [isUpdate, setIsUpdate] = useState(false);
  const [loading, setLoading] = useState(true);

  //select Multiple Images
  const handleMultipleImages = (e) => {
    const selectedFiles = e.target.files;

    if (selectedFiles.length !== 3) {
      // Display an error message or take appropriate action
      alert("Please select exactly Three images.");
      return;
    }

    for (let i = 0; i < selectedFiles.length; i++) {
      const newImage = selectedFiles[i];
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  //Upload new project
  const handleUpload = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      // Handle the case where no images are selected
      alert("Please select at least three images.");
      return;
    }

    try {
      const databaseRef = await addDoc(collection(db, "projects"), {
        headerTitle: headerTitle,
        title2: title2,
        paraTop: paraTop,
        paraMid: paraMid,
        paraBot: paraBot,
        row: row,
        Timestamp: serverTimestamp(),
      });

      await Promise.all(
        images.map(async (img) => {
          const imgRef = ref(storage, `projectimages/${img.name + v4()}`);

          try {
            await uploadBytes(imgRef, img, "data_url");
            const downloadURL = await getDownloadURL(imgRef);

            await updateDoc(doc(db, "projects", databaseRef.id), {
              allImages: arrayUnion(downloadURL),
            });
          } catch (error) {
            console.error("Error uploading image:", error);
            // Handle or log the error as needed
          }
        })
      );
    } catch (error) {
      console.error("Error saving data in Firestore:", error);
      // Handle or log the error as needed
    }
    setHeaderTitle("");
    setTitle2("");
    setParaTop("");
    setParaMid("");
    setParaBot("");
    setRow("");
    setImages([]);
    alert("Data Added");
  };

  //GET DATA HERE
  const [data, setData] = useState([]);
  const databaseRef = collection(db, "projects");

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setLoading(false);
      setData(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };

  //UPDATE DATA HERE
  const [deleteUrl, setDeleteUrl] = useState("");
  const [ID, setID] = useState("");
  //getting the single data onclick
  const getSingleData = (
    id,
    headerTitle,
    title2,
    row,
    paraTop,
    paraMid,
    paraBot,
    allImages
  ) => {
    setID(id);
    setHeaderTitle(headerTitle);
    setTitle2(title2);
    setParaTop(paraTop);
    setParaMid(paraMid);
    setParaBot(paraBot);
    setRow(row);
    setDeleteUrl(allImages);
    setIsUpdate(true);
  };

  //UPDATE FUNCTION
  const updateData = async (e) => {
    e.preventDefault();
    let fieldToEdit = doc(db, "projects", ID);
    if (images) {
      await deleteUrl.forEach((url) => {
        const path = url.split("%2F")[1].split("?")[0];
        const urlRef = ref(storage, `projectimages/${path}`);
        deleteObject(urlRef);
      });

      //deleting allimages field here
      const data = { allImages: deleteField() };
      await updateDoc(fieldToEdit, data)
        .then(() => {
          console.log("allImages field has been deleted successfully");
        })
        .catch((error) => {
          console.log(error);
        });

      await updateDoc(fieldToEdit, {
        headerTitle: headerTitle,
        title2: title2,
        paraTop: paraTop,
        paraMid: paraMid,
        paraBot: paraBot,
        row: row,
        Timestamp: serverTimestamp(),
      });

      // Add new images to the allImages field
      await Promise.all(
        images.map(async (img) => {
          const imgRef = ref(storage, `projectimages/${img.name + v4()}`);
          await uploadBytes(imgRef, img, "data_url");
          const downloadURL = await getDownloadURL(imgRef);
          await updateDoc(fieldToEdit, {
            allImages: arrayUnion(downloadURL),
          });
        })
      );
    } else {
      await updateDoc(fieldToEdit, {
        headerTitle: headerTitle,
        title2: title2,
        paraTop: paraTop,
        paraMid: paraMid,
        paraBot: paraBot,
        row: row,
        Timestamp: serverTimestamp(),
      });
      alert("Data Added");
    }
  };

  //DELETE DATA
  const deleteData = async (id, allImages) => {
    allImages.forEach((url) => {
      const path = url.split("%2F")[1].split("?")[0];
      const urlRef = ref(storage, `projectimages/${path}`);
      deleteObject(urlRef);
    });

    let fieldToEdit = doc(db, "projects", id);
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
    <div>
      <section class="p-6 ">
            <form
               onSubmit={isUpdate ? updateData : handleUpload}
              novalidate=""
              class="bg-gray-900 container w-full max-w-xl p-8 mx-auto space-y-6"
            >
              <h2 class="w-full text-3xl font-bold leadi">Edit Work Page</h2>
              <div>
                <label for="message" class="block mb-1 ml-1">
                  Header Title
                </label>
                <input
                  onChange={(event) => {
                    setHeaderTitle(event.target.value);
                  }}
                  type="text"
                  value={headerTitle}
                  class="block w-full p-2 rounded focus:outline-none focus:ring "
                  data-gramm="false"
                  wt-ignore-input="true"
                ></input>
              </div>
              <div>
                <label for="headerTitle" class="block mb-1 ml-1">
                  Header Title 2
                </label>
                <input
                   onChange={(event) => {
                    setTitle2(event.target.value);
                  }}
                  type="text"
                  value={title2}
                  required=""
                  class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:text-gray-900 "
                />
              </div>
              <div>
                <label for="email" class="block mb-1 ml-1">
                  Paragraph Top
                </label>
                <textarea
                  onChange={(event) => {
                    setParaTop(event.target.value);
                  }}
                  type="text"
                  value={paraTop}
                  required=""
                  class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring text-gray-900 "

                ></textarea>
              </div>
              <div>
                <label for="message" class="block mb-1 ml-1">
                  Row
                </label>
                <textarea
                   onChange={(event) => {
                    setRow(event.target.value);
                  }}
                  value={row}
                  id="message"
                  type="text"
                  class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring text-gray-900"
                  data-gramm="false"
                  wt-ignore-input="true"
                ></textarea>
              </div>
              <div>
                <label for="message" class="block mb-1 ml-1">
                  Paragraph Mid
                </label>
                <textarea
                    onChange={(event) => {
                      setParaMid(event.target.value);
                    }}
                    value={paraMid}
                  id="message"
                  type="text"
                  class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring text-gray-900"
                  data-gramm="false"
                  wt-ignore-input="true"
                ></textarea>
              </div>
              <div>
                <label for="message" class="block mb-1 ml-1">
                  Paragraph Bottom
                </label>
                <textarea
                    onChange={(event) => {
                      setParaBot(event.target.value);
                    }}
                    value={paraBot}
                  id="message"
                  type="text"
                  class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring text-gray-900"
                  data-gramm="false"
                  wt-ignore-input="true"
                ></textarea>
              </div>
              <div>
                <label for="message" class="block mb-1 ml-1">
                  Homepage Image
                </label>
                <input
                   onChange={handleMultipleImages}
                   accept="image/*"
                   type="file"
                   multiple
                  className="w-full max-w-xs file-input"
                />
              </div>
              <div>
                <button
            value="Update" type="submit" class="btn btn-block">
                  Submit
                </button>
              </div>
              <div href="/" className="flex flex-row justify-between ">
                <button
           onClick={() => setIsUpdate(false)}
                className="btn btn-circle btn-outline ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>


                <Link href="/admin" className="btn btn-link">Admin</Link>
              </div>
            </form>
          </section>

      <div className="grid grid-cols-1 gap-12 mt-20">
        {data.map((d) => {
          return (
            <>
              <div
                  key={d.id}
                  className="mt-20 text-gray-900 shadow-xl card lg:card-side bg-base-100"
                >
                  <figure>
                    <img src={d.allImages} alt="image" className=" max-w-[500px] max-h-[500px]" />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">Page Title:{d.headerTitle}</h2>
                    <p>Second Title: {d.title2}</p>
                    <p>Paragraph Top: {d.paraTop}</p>
                    <p>Row: {d.row}</p>

                    <p>Paragraph Mid: {d.paraMid}</p>
                    <p>Paragraph Bottom: {d.paraBot}</p>

                    <div class="card-actions justify-end">
                      <button
                        onClick={() =>
                          getSingleData(
                            d.id,
                            d.headerTitle,
                            d.title2,
                            d.paraTop,
                            d.row,
                            d.paraMid,
                            d.paraBot,
                            d.allImages
                          )
                        }
                        class="btn btn-primary"
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteData(d.id,d.allImages)} className='btn btn-error'>Delete</button>
                    </div>
                  </div>
                </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default editworks;
