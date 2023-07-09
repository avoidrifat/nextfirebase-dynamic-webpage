import React from "react";
import LoginPage from "../../Components/Loginpage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";
import Link from "next/link";
import { signOut } from "firebase/auth";
import AdminForm from "../../Components/Formpage";

const Index = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="flex items-center justify-center mt-20 ">
      {user ? (
        <div>
          <div className="grid grid-flow-col grid-rows-2 gap-4 ">
            <Link
              className="px-4 mt-5 font-semibold text-2xl py-[.45rem] text-black bg-white  border-solid border-[0.1rem] hover:bg-transparent hover:border-[0.1rem] hover:border-gray-800 transition duration-300 hover:text-white"
              href="/admin/edithome"
            >
              Edit Home Page
            </Link>
            <Link
              className="px-4 mt-5 font-semibold text-2xl py-[.45rem] text-black bg-white  border-solid border-[0.1rem] hover:bg-transparent hover:border-[0.1rem] hover:border-gray-800 transition duration-300 hover:text-white"
              href="/admin/editwork"
            >
              Edit Work Page
            </Link>

            <Link
              className="px-4 mt-5 font-semibold text-2xl py-[.45rem] text-black bg-white  border-solid border-[0.1rem] hover:bg-transparent hover:border-[0.1rem] hover:border-gray-800 transition duration-300 hover:text-white"
              href="/admin/editstudio"
            >
              Edit Studio Page
            </Link>
            <Link
              className="px-4 mt-5 font-semibold text-2xl py-[.45rem] text-black bg-white  border-solid border-[0.1rem] hover:bg-transparent hover:border-[0.1rem] hover:border-gray-800 transition duration-300 hover:text-white"
              href="/admin/editcontact"
            >
              Edit Contact Page
            </Link>
            <Link
              className="px-4 mt-5 font-semibold text-2xl py-[.45rem] text-black bg-white  border-solid border-[0.1rem] hover:bg-transparent hover:border-[0.1rem] hover:border-gray-800 transition duration-300 hover:text-white"
              href="/admin/editproject"
            >
              Edit Project Page
            </Link>
          </div>
          <div className="mt-10">
          <Link
            className="py-2 px-4 text-black bg-white rounded-full border-solid border-[0.1rem] hover:bg-transparent hover:border-[0.1rem] hover:border-gray-800 transition duration-300 hover:text-white"
            href="/"
            onClick={() => signOut(auth)}
          >
            Signout
          </Link>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default Index;
