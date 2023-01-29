import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignUp = () => {

  const navigate = useNavigate()

 async function registerRequest() {
    // if(validateUserData()){
      delete user.passwordConfirmation;
     await axios.post("https://nourishnet-backend.onrender.com/auth/register", user).then(response => {
      if(!response.data.error) {

        navigate('/signin')
        }
      })
    // }
  }

  async function validateUserData(e) {
    e.preventDefault()
    if (!user.firstName || !user.lastName || !user.email || !user.password || !user.passwordConfirmation || !user.weight || !user.height || !user.age) {
      alert('Please fill out all fields')
      return;
    }
    if (user.password !== user.passwordConfirmation) {
      alert('Passwords do not match')
      return;
    }
  
      if ((/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/.test(user.password))) {
        alert("Password must contain atleast one uppercase character, one lowercase character, one number and one special character!")
        return;
      }

      await registerRequest()
    
  }

  const [user, setUser] = useState({ firstName: '', lastName: '', email: '', password: '', passwordConfirmation: '', weight: '', height: '', age: '' })

  return (
    <div>


      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside
            className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
          >
            <img
              alt="Pattern"
              src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className=" lg:block hidden absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">


              <h1
                className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
              >
                Welcome to StyleLease
              </h1>



              {/* SignUp form */}

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    required
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-3 py-2"
                    onChange={(e) => setUser({
                      ...user, firstName: e.target.value,
                    })}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    required
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-3 py-2"
                    onChange={(e) => setUser({
                      ...user, lastName: e.target.value,
                    })}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-3 py-2"
                    onChange={(e) => setUser({
                      ...user, email: e.target.value,
                    })}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    required
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-3 py-2"
                    onChange={(e) => setUser({
                      ...user, password: e.target.value,
                    })}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>

                  <input
                    required
                    type="password"
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-3 py-2"
                    onChange={(e) => setUser({
                      ...user, passwordConfirmation: e.target.value,
                    })}
                  />
                </div>
          


                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button onClick={validateUserData}
                    className="inline-block shrink-0 rounded-md border border-gray-600 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-800 "
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link to="/user/signin" className="text-gray-700 underline">Log in</Link>.
                  </p>
                </div>

              </form>
            </div>
          </main>
        </div>
      </section>

    </div>
  )
}

export default SignUp