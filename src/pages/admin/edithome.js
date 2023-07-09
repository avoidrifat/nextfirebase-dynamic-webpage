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

const editHome = () => {
  const [header1, setHeader1] = useState("");
  const [headerTitle, setHeaderTitle] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const homePageRef = collection(db, "homepage");
  const [loading, setLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  //GET DATA HERE
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getDocs(homePageRef).then((response) => {
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
      const imageRef = ref(storage, `homeimage/${image.name}`);
      await uploadBytes(imageRef, image).then(() => {
        getDownloadURL(imageRef).then((url) => {
          addDoc(homePageRef, {
            header1,
            headerTitle,
            email,
            desc,
            url,
          })
            .then(() => {
              alert("Data added");
              setHeader1("");
              setHeaderTitle("");
              setEmail("");
              setDesc("");
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
  const [deleteUrl, setDeleteUrl] = useState("");
  const [ID, setID] = useState("");
  //getting the single data onclick
  const getSingleData = (id, headerTitle, header1, email, desc, url) => {
    setID(id);
    setHeader1(header1);
    setHeaderTitle(headerTitle);
    setDesc(desc);
    setEmail(email);
    setDeleteUrl(url);
    setIsUpdate(true);
  };

  //UPDATE FUNCTION
  const updateData = async (e) => {
    e.preventDefault();
    let fieldToEdit = doc(db, "homepage", ID);

    if (image) {
      const path = deleteUrl.split("%2F")[1].split("?")[0];
      const urlRef = ref(storage, `homeimage/${path}`);
      deleteObject(urlRef).then(() => {
        const imageRef = ref(storage, `homeimage/${image.name + v4()}`);
        uploadBytes(imageRef, image).then(() => {
          getDownloadURL(imageRef).then((url) => {
            updateDoc(fieldToEdit, {
              header1: header1,
              headerTitle: headerTitle,
              email: email,
              desc: desc,
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
        header1: header1,
        headerTitle: headerTitle,
        email: email,
        desc: desc,
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
              <h2 class="w-full text-3xl font-bold leadi">Edit Home Page</h2>
              <div>
                <label for="message" class="block mb-1 ml-1">
                  Header 1 Text
                </label>
                <textarea
                  onChange={(event) => {
                    setHeader1(event.target.value);
                  }}
                  type="text"
                  value={header1}
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
                <label for="email" class="block mb-1 ml-1">
                  Email
                </label>
                <input
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  type="text"
                  value={email}
                  required=""
                  class="block w-full p-2 rounded focus:outline-none focus:ring "
                />
              </div>
              <div>
                <label for="message" class="block mb-1 ml-1">
                  Description
                </label>
                <textarea
                  onChange={(event) => {
                    setDesc(event.target.value);
                  }}
                  value={desc}
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
                    <img src={d.url} alt="image" />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">Page Title:{d.headerTitle}</h2>
                    <p>Header Info:{d.header1}</p>
                    <p>Email:{d.email}</p>
                    <p>Description:{d.desc}</p>

                    <div class="card-actions justify-end">
                      <button
                        onClick={() =>
                          getSingleData(
                            d.id,
                            d.headerTitle,
                            d.header1,
                            d.email,
                            d.desc,
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
                      <Link href="/admin" className="btn btn-success">Admin</Link>
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

export default editHome;


 {/* <div className="w-1/2" key={d.id}>
                  <h1>Title:{d.headerTitle}</h1>
                  <h1>Title:{d.header1}</h1>
                  <h1>Title:{d.email}</h1>
                  <h1>Title:{d.desc}</h1>

                  <img src={d.url} alt="image" />
                  <button
                    onClick={() =>
                      getSingleData(
                        d.id,
                        d.headerTitle,
                        d.header1,
                        d.email,
                        d.desc,
                        d.url
                      )
                    }
                  >
                    Edit
                  </button>
  </div> */}

 {/* <h2 className="">Edit Home Page</h2>
          <form onSubmit={updateData}>
            <label>
              <span>
                Header 1 <span className="required">*</span>
              </span>
              <input
                onChange={(event) => {
                  setHeader1(event.target.value);
                }}
                type="text"
                className="input-field "
                value={header1}
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
                Email <span className="required">*</span>
              </span>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="text"
                className="input-field"
                value={email}
              />
            </label>
            <label>
              <span>
                Description <span className="required">*</span>
              </span>
              <input
                onChange={(event) => {
                  setDesc(event.target.value);
                }}
                type="text"
                className="input-field"
                value={desc}
              />
            </label>
            <label>
              <span>
                Home Image <span className="required">*</span>
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
            <button onClick={() => setIsUpdate(false)}>Cancel</button>
            <Link
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/admin"
            >
              Back To Admin
            </Link>
 </form> */}