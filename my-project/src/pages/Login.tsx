import {PiSignInBold} from "react-icons/pi";
import {Formik} from 'formik';
import {useLoginMutation} from "../services/apiAuthService.ts";
import {useAppSelector} from "../apps/hook.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // useEffect(() => {
    //     if (accessToken) {
    //         navigate('/')
    //     }
    // }, [accessToken, navigate])
    //
    // useEffect(() => {
    //     if (location.pathname === '/') {
    //         navigate('/auth/login')
    //     }
    // })
    const [login] = useLoginMutation()
    const {accessToken} = useAppSelector((state) => state.auth);
    console.log(accessToken)

    return (
        <div>
            <div className='bg-[rgb(11,15,41)] mx-auto my-[7%] lg:w-[40%] w-[80%] rounded-xl border-gray-600 border '>
                <div className='pb-16 mb-8'>
                    <div className='w-[20%] logo m-10 mx-auto'>
                        <img src="https://netflixo-ten.vercel.app/images/logo.png" alt=""/>
                    </div>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validate={values => {
                            const errors: any = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={async (values, {setSubmitting}) => {
                            await login(values)
                            setSubmitting(false);
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                          }) => (

                            <form onSubmit={handleSubmit}>
                                <div className="mb-6 w-[80%] mx-auto">
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Email</label>
                                    <input type="email" id="email"
                                           name="email"
                                           onChange={handleChange}
                                           value={values.email}
                                           className="bg-black p-4 border border-gray-300 text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="john.doe@company.com" required/>
                                    <div
                                        className='text-red-500 text-sm mt-2'>{errors.email && touched.email && errors.email}</div>

                                </div>
                                <div className="mb-6 w-[80%] mx-auto">
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Password</label>
                                    <input type="password"
                                           id="password"
                                           name="password"
                                           onChange={handleChange}
                                           value={values.password}
                                           className="bg-black border p-4 border-gray-300 text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="•••••••••" required/>
                                    <div
                                        className='text-red-500 text-sm mt-2'>{errors.password && touched.password && errors.password}</div>
                                </div>
                                <div className="mb-6 w-[80%] mx-auto">
                                    <button type="submit"
                                            disabled={isSubmitting}
                                            className="hover:transition-all hover:ease-in-out hover:duration-300 focus:outline-none flex items-center justify-center gap-2 w-full px-5 py-4 text-white bg-red-600 hover:bg-gray-900 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                        <PiSignInBold/>
                                        Sign In
                                    </button>
                                </div>
                                <div className='flex justify-center items-center gap-4'>
                                    <div className='text-gray-500'>
                                        Don't you have an account?
                                    </div>
                                    <div className='font-bold text-white'>
                                        <a href="">Sign Up</a>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>


                </div>
            </div>
        </div>
    )
}

export default Login;