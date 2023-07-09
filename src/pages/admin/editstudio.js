/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { db, storage } from "../../../firebaseConfig";
import { v4 } from "uuid";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";

const editStudio = () => {
  const [paragraph, setParagraph] = useState("");
  const [headerTitle, setHeaderTitle] = useState("");
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [image, setImage] = useState("");

  const studioPageRef = collection(db, "studiopage");
  const [loading, setLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  //GET DATA HERE
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getDocs(studioPageRef).then((response) => {
      setLoading(false);
      setData(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };

  //Upload file
  const uploadHandler = async (e) => {
    e.preventDefault();

    if (image) {
      const imageRef = ref(storage, `studioimage/${image.name}`);
      await uploadBytes(imageRef, image).then(() => {
        getDownloadURL(imageRef).then((url) => {
          addDoc(studioPageRef, {
            paragraph,
            headerTitle,
            desc1,
            desc2,
            url,
          })
            .then(() => {
              alert("Data added");
              setParagraph("");
              setHeaderTitle("");
              setDesc1("");
              setDesc2("");
              setImage("");
            })
            .catch((err) => {
              console.error;
            });
        });
      });
    }
  };

  //UPDATE DATA HERE
  //getting the single data onclick
  const [deleteUrl, setDeleteUrl] = useState("");
  const [ID, setID] = useState("");

  const getSingleData = (id, headerTitle, paragraph, desc1, desc2, url) => {
    setID(id);
    setParagraph(paragraph);
    setHeaderTitle(headerTitle);
    setDesc1(desc1);
    setDesc2(desc2);
    setDeleteUrl(url);
    setIsUpdate(true);
  };

  //UPDATE FUNCTION
  const updateData = async (e) => {
    e.preventDefault();
    let fieldToEdit = doc(db, "studiopage", ID);

    if (image) {
      const path = deleteUrl.split("%2F")[1].split("?")[0];
      const urlRef = ref(storage, `studioimage/${path}`);
      deleteObject(urlRef).then(() => {
        const imageRef = ref(storage, `studioimage/${image.name + v4()}`);
        uploadBytes(imageRef, image).then(() => {
          getDownloadURL(imageRef).then((url) => {
            updateDoc(fieldToEdit, {
              paragraph: paragraph,
              headerTitle: headerTitle,
              desc1: desc1,
              desc2: desc2,
              url: url,
              Timestamp: serverTimestamp(),
            })
              .then(() => {
                alert("Data Updated");
                getData();
                setIsUpdate(false);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      });
    } else {
      updateDoc(fieldToEdit, {
        paragraph: paragraph,
        headerTitle: headerTitle,
        desc1: desc1,
        desc2: desc2,
        Timestamp: serverTimestamp(),
      })
        .then(() => {
          alert("Data Updated");
          getData();
          setIsUpdate(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //Delete data
  const deleteData = (id) => {
    const docRef = doc(db, "studiopage", id);
    deleteDoc(docRef)
      .then(() => {
        alert("Data deleted");
        getData();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      {isUpdate ? (
        <div>
          <section class="p-6 ">
            <form
              onSubmit={updateData}
              novalidate=""
              class="bg-gray-900 container w-full max-w-xl p-8 mx-auto space-y-6"
            >
              <h2 class="w-full text-3xl font-bold leadi">Edit Studio Page</h2>
              <div>
                <label for="message" class="block mb-1 ml-1">
                  Header Paragraph
                </label>
                <textarea
                  onChange={(event) => {
                    setParagraph(event.target.value);
                  }}
                  type="text"
                  value={paragraph}
                  class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring text-gray-900 "
                  data-gramm="false"
                  wt-ignore-input="true"
                ></textarea>
              </div>
              <div>
                <label for="headerTitle" class="block mb-1 ml-1">
                  Header Title
                </label>
                <input
                  onChange={(event) => {
                    setHeaderTitle(event.target.value);
                  }}
                  type="text"
                  value={headerTitle}
                  required=""
                  class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:text-gray-900 "
                />
              </div>

              <div>
                <label for="message" class="block mb-1 ml-1">
                  Description 1
                </label>
                <textarea
                  onChange={(event) => {
                    setDesc1(event.target.value);
                  }}
                  value={desc1}
                  id="message"
                  type="text"
                  class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring text-gray-900"
                  data-gramm="false"
                  wt-ignore-input="true"
                ></textarea>
              </div>
              <div>
                <label for="message" class="block mb-1 ml-1">
                  Description 2
                </label>
                <textarea
                  onChange={(event) => {
                    setDesc2(event.target.value);
                  }}
                  value={desc2}
                  id="message"
                  type="text"
                  class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring text-gray-900"
                  data-gramm="false"
                  wt-ignore-input="true"
                ></textarea>
              </div>
              <div>
                <label for="message" class="block mb-1 ml-1">
                  Studio Image
                </label>
                <input
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  accept="image/*"
                  type="file"
                  className="w-full max-w-xs file-input"
                />
              </div>
              <div>
                <button type="submit" class="btn btn-block">
                  Submit
                </button>
              </div>
              <div href="/" className="flex flex-row justify-between ">
                <button
                  onClick={() => setIsUpdate(false)}
                  className="btn btn-circle btn-outline "
                >
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

                <Link href="/admin" className="btn btn-link">
                  Admin
                </Link>
              </div>
            </form>
          </section>
          {/* <h2 className="form-style-2-heading">Edit Studio Page</h2>
          <form onSubmit={updateData}>
            <label>
              <span>
                Paragraph <span className="required">*</span>
              </span>
              <input
                onChange={(event) => {
                  setParagraph(event.target.value);
                }}
                type="text"
                className="input-field "
                value={paragraph}
              />
            </label>
            <label>
              <span>
                Header Title <span className="required">*</span>
              </span>
              <input
                onChange={(event) => {
                  setHeaderTitle(event.target.value);
                }}
                type="text"
                className="input-field"
                value={headerTitle}
              />
            </label>
            <label>
              <span>
                Desc1ription 1<span className="required">*</span>
              </span>
              <input
                onChange={(event) => {
                  setDesc1(event.target.value);
                }}
                type="text"
                className="input-field"
                value={desc1}
              />
            </label>
            <label>
              <span>
                Description 2<span className="required">*</span>
              </span>
              <input
                onChange={(event) => {
                  setDesc2(event.target.value);
                }}
                type="text"
                className="input-field"
                value={desc2}
              />
            </label>

            <label>
              <span>
                Studio Image <span className="required">*</span>
              </span>
              <input
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                accept="image/*"
                type="file"
                className="input-field"
              />
            </label>

            <label>
              <span> </span>
              <input type="submit" value="Update" />
            </label>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 border border-blue-700 rounded hover:bg-blue-700" onClick={() => setIsUpdate(false)}>Cancel</button>
            <Link
              className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
              href="/admin"
            >
              Back To Admin
            </Link>
          </form> */}
        </div>
      ) : (
        <div>
          {data.map((d) => {
            return (
              <>
                <div
                  key={d.id}
                  className="mt-20 text-gray-900 shadow-xl card lg:card-side bg-base-100"
                >
                  <figure>
                    <img src={d.url} alt="image" className="ml-2"/>
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">Page Title:{d.headerTitle}</h2>
                    <p>Header Info:{d.paragraph}</p>
                    <p>Description 1:{d.desc1}</p>
                    <p>Description 2:{d.desc2}</p>

                    <div class="card-actions justify-end">
                      <button
                        onClick={() =>
                          getSingleData(
                            d.id,
                            d.headerTitle,
                            d.paragraph,
                            d.desc1,
                            d.desc2,
                            d.url
                          )
                        }
                        class="btn btn-primary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteData(d.id, d.allImages)}
                        className="btn btn-error"
                      >
                        Delete
                      </button>
                      <Link href="/admin" className="btn btn-success">
                        Admin
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default editStudio;
