import { useRouter } from "next/router";
import React, { useState } from "react";
import { auth } from "/firebaseConfig";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [loginError, setLoginError] = useState("");



  const router = useRouter();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleOnSubmit = (e) => {
    // console.log(error);
    e.preventDefault();
    if (user) {
      router.push("/admin");
    }
    // console.log(email, password);
  };
  return (
    <>
      <div className="flex justify-center items-center">
      <div class="w-full max-w-xs">
        <form
          onSubmit={handleOnSubmit}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
            onChange={(event) => setEmail(event.target.value)}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
            onChange={(event) => setPassword(event.target.value)}
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
            {/* <p class="text-red-500 text-xs italic">Password.</p> */}
          </div>
          {error? <h1 className="text-red-600">invalid email/password</h1> : "" }

          <div class="flex items-center justify-between">
            <button
            onClick={() => signInWithEmailAndPassword(email, password)}
            type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 Blu Lab. All rights reserved.
        </p>
      </div>
      </div>
    </>
  );
};

export default LoginPage;
