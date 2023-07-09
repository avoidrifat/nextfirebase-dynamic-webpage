/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { db, storage } from "../../../firebaseConfig";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";


const editWork = () => {
  const [header1, setHeader1] = useState("");
  const [headerTitle, setHeaderTitle] = useState("");

  const workPageRef = collection(db, "workpage");
  const [loading, setLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  //GET DATA HERE
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getDocs(workPageRef).then((response) => {
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
          addDoc(workPageRef, {
            header1,
            headerTitle,
          })
            .then(() => {
              alert("Data added");
              setHeader1("");
              setHeaderTitle("");
            })
            .catch((err) => {
              console.error;
            });
      };


  //UPDATE DATA HERE
  const [deleteUrl, setDeleteUrl] = useState("");
  const [ID, setID] = useState("");
  //getting the single data onclick
  const getSingleData = (id, headerTitle, header1) => {
    setID(id);
    setHeader1(header1);
    setHeaderTitle(headerTitle);

    setIsUpdate(true);
  };

  //UPDATE FUNCTION
  const updateData = async (e) => {
    e.preventDefault();
    let fieldToEdit = doc(db, "workpage", ID);

    updateDoc(fieldToEdit, {
      header1: header1,
      headerTitle: headerTitle,

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
              <h2 class="w-full text-3xl font-bold leadi">Edit Work Page</h2>
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
                  Back
                </Link>
              </div>
            </form>
          </section>

          {/* <form onSubmit={updateData}>
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
        </div>
      ) : (
        <div>
          {data.map((d) => {
            return (

                <div
                  key={d.id}
                  className="mt-20 text-gray-900 shadow-xl card lg:card-side bg-base-100"
                >
                  {/* <figure>
                    <img src={d.url} alt="image" />
                  </figure> */}
                  <div class="card-body">
                    <h2 class="card-title">Page Title:{d.headerTitle}</h2>
                    <p>Header Info:{d.header1}</p>

                    <div class="card-actions justify-end">
                      <button
                        onClick={() =>
                          getSingleData(
                            d.id,
                            d.headerTitle,
                            d.header1,
                          )
                        }
                        class="btn btn-primary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteData(d.id)}
                        className="btn btn-error"
                      >
                        Delete
                      </button>
                      <Link href="/admin" className="btn btn-success">Admin</Link>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default editWork;
