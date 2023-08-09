import {PiSignInBold} from "react-icons/pi";
import {Formik} from 'formik';
import {useLoginMutation} from "../services/apiAuthService.ts";
import {Link, useNavigate} from "react-router-dom";
import {useAppSelector} from "../apps/hook.ts";
import {useEffect} from "react";


const Login = () => {
    const [login] = useLoginMutation()
    const {accessToken} = useAppSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (accessToken) {
            navigate('/home/movies')
        }
    }, [accessToken, navigate])

    const initialValues = {
        email: "",
        password: ""
    };
    const validate = (values: any) => {
        let errors: any = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid Email";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password too short";
        }
        return errors;
    };

    return (
        <div>
            <div
                className='bg-[rgb(11,15,41)] mx-auto my-[7%] 2xl:w-[40%] lg:w-[60%] w-[80%] rounded-xl border-gray-600 border '>
                <div className='pb-16 mb-8'>
                    <div className='w-[20%] logo m-10 mx-auto'>
                        <img src="https://netflixo-ten.vercel.app/images/logo.png" alt=""/>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={async (values, {setSubmitting}) => {
                            await login(values)
                            setSubmitting(false);
                        }}
                    >
                        {(formik) => {
                            const {
                                values,
                                handleChange,
                                handleSubmit,
                                errors,
                                touched,
                                handleBlur,
                                isValid,
                                dirty
                            } = formik;
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6 w-[80%] mx-auto">
                                        <label htmlFor="email"
                                               className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Email</label>
                                        <input type="email"
                                               id="email"
                                               name="email"
                                               onChange={handleChange}
                                               value={values.email}
                                               onBlur={handleBlur}
                                               className="bg-black p-4 border border-gray-300 text-white text-sm rounded focus:ring-blue-500
                                               focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="john.doe@company.com" required/>
                                        {errors.email && touched.email && (
                                            <span className="text-red-500 text-sm mt-3 error">{errors.email}</span>)}
                                    </div>
                                    <div className="mb-6 w-[80%] mx-auto">
                                        <label htmlFor="password"
                                               className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Password</label>
                                        <input type="password"
                                               id="password"
                                               name="password"
                                               onChange={handleChange}
                                               value={values.password}
                                               onBlur={handleBlur}
                                               className="bg-black border p-4 border-gray-300 text-white text-sm rounded
                                               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                                               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                               dark:focus:border-blue-500"
                                               placeholder="•••••••••" required/>
                                        {errors.password && touched.password && (
                                            <span className="text-red-500 text-sm error">{errors.password}</span>)}
                                    </div>
                                    <div className="mb-6 w-[80%] mx-auto">
                                        <button type="submit"
                                                disabled={!(dirty && isValid)}
                                                className="hover:transition-all hover:ease-in-out hover:duration-300
                                        focus:outline-none flex items-center justify-center gap-2 w-full px-5 py-4
                                        text-white bg-red-600 hover:bg-gray-900 focus:ring-4 focus:ring-red-300
                                        font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700
                                        dark:focus:ring-red-900">
                                            <PiSignInBold/>
                                            Sign In
                                        </button>
                                    </div>
                                    <div className='w-[80%] mx-auto'>
                                        <div className='flex justify-center items-center gap-4'>
                                            <div className='text-gray-500'>
                                                Don't you have an account?
                                            </div>
                                            <div className='font-bold text-white'>
                                                <Link to="/auth/register">Sign Up</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login;