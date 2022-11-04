import React, { useContext, useState } from 'react';
import * as yup from 'yup';
import { useFormik, Form, Formik } from "formik"
import { useDispatch } from 'react-redux';
import { forgotPassWordAction, googleSignInAction, signInAction, signUpAction } from '../../redux/action/AuthAction';

function Login(props) {
    const [user, setUser] = useState('login')
    const [reset, setReset] = useState(false)

    const handleLogin = (values) => {
        localStorage.setItem("user", '123');
        dispatch(signInAction(values))

    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInAction())
    }

    let schemaObj, initialVal;
    if (user === 'login' && reset === false) {
        schemaObj = {
            email: yup.string().email("Enter your email").required("Enter valid email address"),
            password: yup.string().required("Enter your password")
        }
        initialVal = {
            email: '',
            password: ''
        }
    } else if (user === 'signup' && reset === false) {
        schemaObj = {
            name: yup.string().required("Enter your name"),
            email: yup.string().email("Enter valid  email address").required("Enter your email address"),
            password: yup.string().required("Enter your password")
        }
        initialVal = {
            name: '',
            email: '',
            password: ''
        }
    } else if (reset === true) {
        schemaObj = {
            email: yup.string().email("Enter valid  email address").required("Enter your email address"),
        }
        initialVal = {

            email: '',
        }
    }
    let schema = yup.object().shape(schemaObj);


    const insertData = (values) => {
        // let LocalData = JSON.parse(localStorage.getItem("user"));
        console.log(values);

        // if (LocalData === null) {
        //     localStorage.setItem("user", JSON.stringify([values]));
        // } else {
        //     LocalData.push(values);
        //     localStorage.setItem("user", JSON.stringify(LocalData));
        // }
        dispatch(signUpAction(values))
    }


    const dispatch = useDispatch()
    const formikObj = useFormik({
        initialValues: initialVal,
        validationSchema: schema,
        onSubmit: values => {
            if (user === 'login' && reset == false) {
                handleLogin(values);
                // dispatch(signInAction(values))
            } else if (user === 'signup' && reset == false) {
                insertData(values);
                // dispatch(signUpAction(values))
            } else if (reset === true) {
                dispatch(forgotPassWordAction(values))
            }


        },
        enableReinitialize: true
    });

    const { handleChange, errors, handleSubmit, handleBlur, touched } = formikObj

    // console.log(errors);
    return (
        <div>
            <div>
                {/* Title Page */}
                <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{ backgroundImage: 'url(images/bg-title-page-02.jpg)' }}>

                    {
                        reset ?
                            <h2 className="tit6 t-center">Forget password</h2>
                            :
                            user === 'login' ?
                                <h2 className="tit6 t-center">Login</h2>
                                :
                                <h2 className="tit6 t-center">Signup</h2>
                    }

                </section>

                <section>
                    <div className='text-center'>
                        <Formik values={formikObj}>
                            <Form onSubmit={handleSubmit}>
                                <div>
                                    <div>
                                        {
                                            reset ?
                                                null :
                                                user === 'login' ?
                                                    null
                                                    :
                                                    <>
                                                        <input
                                                         className='userinput'
                                                            type='text'
                                                            name='text'
                                                            placeholder='Enter your name'
                                                        />
                                                    </>
                                        }
                                    </div>
                                </div>
                                <div >
                                    <div >
                                        <input
                                        className='userinput'
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email Address"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.email && touched.email ? <p className='text-danger'>{errors.email}</p> : ''}
                                        <div className="validate" />
                                    </div>
                                </div>
                                {
                                    reset ?
                                        null
                                        :
                                        <div>
                                            <div>
                                                <input 
                                                 className='userinput'
                                                type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                {errors.password && touched.password ? <p className='text-danger'>{errors.password}</p> : ''}
                                                <div className="validate" />
                                            </div>
                                        </div>
                                }


                                <div className='text-start'>
                                    {
                                        reset ?
                                            <>
                                                <button className='pt-4 text-uppercase'  type='submit' onClick={() => setReset(false)}>login .. </button>
                                            </>
                                            :
                                            user === 'login' ?
                                                <>
                                                    <p className='d-inline-block pe-4 text-dark mt-5'>Create new account..</p><a href='#' className='pl-4 text-uppercase' onClick={() => setUser('signup')}>Signup</a>
                                                    <a type='submit' href='#' className='d-block text-uppercase  text-danger m-3' onClick={() => setReset(true)}>Forget Password !</a>
                                                </>
                                                :
                                                <>
                                                    <p className='d-inline-block pe-4 text-dark mt-5'>Already have an account ?</p><a href='#' className='pl-4 text-uppercase'  onClick={() => setUser('login')}>Login</a>
                                                </>
                                    }
                                </div>
                                <div className="text-center">
                                    {
                                        reset ?
                                            <button type="submit" className='bg-success text-white py-2 px-5 rounded mt-5'>Submit</button>
                                            :
                                            user === 'login' ?
                                                <button type="submit" className='bg-success text-white py-2 px-5 rounded mt-5'>Submit</button>
                                                :
                                                <button type="submit" className='bg-success text-white py-2 px-5 rounded mt-5'>Submit</button>
                                    }
                                    <h5 className='py-4'>or</h5>
                                    <button type='submit' className='bg-success text-white py-2 px-5 rounded mt-1 mb-5' onClick={() => handleGoogleSignIn()}>Sign In with Google</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </section>

            </div>
        </div>

    );
}

export default Login;

