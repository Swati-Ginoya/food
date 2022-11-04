import React from 'react';
import { useFormik ,Form ,Formik} from 'formik';
import * as yup from 'yup';


function Contact(props) {

    let schema = yup.object().shape({
        name: yup.string().required("Enter your name"),
        email: yup.string().email("Enter valid email").required("Enter your email adddress"),
        phone: yup.string().required("Enter your contact number"),
        message: yup.string().required("Enter message you would like to give us")
      });

    const formikObj = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone: '',
          message: ''
        },
        validationSchema:schema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

      const {handleBlur ,handleChange ,handleSubmit ,errors ,touched} = formikObj
    return (
        <div>
            <div>
                {/* Title Page */}
                <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15" style={{ backgroundImage: 'url(images/bg-title-page-02.jpg)' }}>
                    <h2 className="tit6 t-center">
                        Contact
                    </h2>
                </section>
                {/* Contact form */}
                <section className="section-contact bg1-pattern p-t-90 p-b-113">
                    {/* Map */}
                    <div className="container">
                        <div className="map bo8 bo-rad-10 of-hidden">
                            <div className="contact-map size37" id="google_map" data-map-x="40.704644" data-map-y="-74.011987" data-pin="images/icons/icon-position-map.png" data-scrollwhell={0} data-draggable={1} />
                            
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="tit7 t-center p-b-62 p-t-105">
                            Send us a Message
                        </h3>
                        
                        <Formik values={formikObj}>
                        <Form onSubmit={handleSubmit} className="wrap-form-reservation size22 m-l-r-auto">
                            <div className="row">
                                <div className="col-md-4">
                                    {/* Name */}
                                    <span className="txt9">
                                        Name
                                    </span>
                                    <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                        <input 
                                        className="bo-rad-10 sizefull txt10 p-l-20" 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                        {errors.name && touched.name ? <p className='text-danger'>{errors.name}</p> : ''}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    {/* Email */}
                                    <span className="txt9">
                                        Email
                                    </span>
                                    <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                        <input 
                                        className="bo-rad-10 sizefull txt10 p-l-20" 
                                        type="text" 
                                        name="email" 
                                        placeholder="Email" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                        {errors.email && touched.email ? <p className='text-danger'>{errors.email}</p> : ''}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    {/* Phone */}
                                    <span className="txt9">
                                        Phone
                                    </span>
                                    <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                                        <input 
                                        className="bo-rad-10 sizefull txt10 p-l-20" 
                                        type="text" 
                                        name="phone" 
                                        placeholder="Phone" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                        {errors.phone && touched.phone ? <p className='text-danger'>{errors.phone}</p> : ''}
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Message */}
                                    <span className="txt9">
                                        Message
                                    </span>
                                    <textarea 
                                    className="bo-rad-10 size35 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-3" 
                                    name="message" 
                                    placeholder="Message" 
                                    defaultValue={""} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    />
                                    {errors.message && touched.message ? <p className='text-danger'>{errors.message}</p> : ''}
                                </div>
                            </div>
                            <div className="wrap-btn-booking flex-c-m m-t-13">
                                {/* Button3 */}
                                <button type="submit" className="btn3 flex-c-m size36 txt11 trans-0-4">
                                    Submit
                                </button>
                            </div>
                        </Form>
                        </Formik>
                        <div className="row p-t-135">
                            <div className="col-sm-8 col-md-4 col-lg-4 m-l-r-auto p-t-30">
                                <div className="dis-flex m-l-23">
                                    <div className="p-r-40 p-t-6">
                                        <img src="images/icons/map-icon.png" alt="IMG-ICON" />
                                    </div>
                                    <div className="flex-col-l">
                                        <span className="txt5 p-b-10">
                                            Location
                                        </span>
                                        <span className="txt23 size38">
                                            8th floor, 379 Hudson St, New York, NY 10018
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-3 col-lg-4 m-l-r-auto p-t-30">
                                <div className="dis-flex m-l-23">
                                    <div className="p-r-40 p-t-6">
                                        <img src="images/icons/phone-icon.png" alt="IMG-ICON" />
                                    </div>
                                    <div className="flex-col-l">
                                        <span className="txt5 p-b-10">
                                            Call Us
                                        </span>
                                        <span className="txt23 size38">
                                            (+1) 96 716 6879
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-5 col-lg-4 m-l-r-auto p-t-30">
                                <div className="dis-flex m-l-23">
                                    <div className="p-r-40 p-t-6">
                                        <img src="images/icons/clock-icon.png" alt="IMG-ICON" />
                                    </div>
                                    <div className="flex-col-l">
                                        <span className="txt5 p-b-10">
                                            Opening Hours
                                        </span>
                                        <span className="txt23 size38">
                                            09:30 AM – 11:00 PM <br />Every Day
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;