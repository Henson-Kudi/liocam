import React, {useRef, useState} from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailJs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { formSchema } from '../schemas/formValidate';
import './ContactForm.css'

function ContactForm({cancel, showCan}) {
    const formRef = useRef(null)
    const [errorMessage, setErrorMessage] = useState('')
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
    const onSubmit = async(data, e) => {
        try {
            emailJs.send('service_ypi7l5l', 'template_e9azcro', data, 'user_LhB6BmKHXG6o83l1skINd')
            .then((result) => {
                    toast.success('Thank you for your message. We\'ll get back to you.', {
                        position : 'top-right',
                        autoClose : 5000,
                        theme : 'light'
                    })
                    e.target.reset()
            }, (error) => {
                toast.error('Thank you for your message. We\'ll get back to you.', {
                    position : 'top-right',
                    autoClose : 5000,
                    theme : 'light'
                })
            });
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data);
            };
            if (error.request) {
                console.log(error.request.response);
            };
            if (error.message) {
                console.log(error.message);
            };
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        resolver : yupResolver(formSchema)
    })


    return (
        <div className="contact-us">
            <h2>Reach To Us</h2>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                {
                    errorMessage && <p className="error">{errorMessage}</p>
                }
                <div className="reach-to-us-form-container">
                    <div className="name-cont form-control">
                        <label htmlFor="name">Name:</label>
                        <div>
                            <input type="text" {...register('name', {required : true})} id="name" placeholder="Enter Full Name" />
                            {
                                errors?.name && <p className="error">{errors.name.message}</p>
                            }
                        </div>
                    </div>

                    <div className="email-cont form-control">
                        <label htmlFor="email">Email Address:</label>
                        <div>
                            <input type="email" {...register('email', {required : 'Email is required', pattern:{value : '\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b', message: 'Invalid Email'}})} placeholder='Enter Email Address' id='email' />
                            {
                                errors?.email && <p className='error'>
                                    {errors?.email?.message}
                                </p>
                            }
                        </div>
                    </div>

                    <div className="contact-cont form-control">
                        <label htmlFor="contact">Contact:</label>
                        <div>
                            <input type="tel" {...register('contact', {
                                required : 'This field is required', pattern : {
                                    value : phoneRegExp,
                                    message : 'Please enter valide phone number'
                                }
                            })} id="contact" placeholder="Enter Contact Number" />
                            {
                                errors?.contact && <p className="error">{errors.contact.message}</p>
                            }
                        </div>
                    </div>

                    <div className="address-cont form-control">
                        <label htmlFor="address">Address:</label>
                        <div>
                            <input type="text" {...register('address', {required : false})} id="address" placeholder='Enter Address' />
                            {
                                errors?.address && <p className="error">{errors.address.message}</p>
                            }
                        </div>
                    </div>

                    <div className="message-cont">
                        <textarea rows='5' {...register('message', {required : 'Please add a message'})} placeholder='Message' />
                        {
                            errors?.message && <p className="error">{errors.message.message}</p>
                        }
                    </div>

                    <div className="btnSub-cont">
                        {
                            showCan && <input type="button" value='Cancel' className='btnCan' onClick={cancel} />
                        }
                        <input type="submit" value='Submit' className='btnSub' />
                    </div>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default ContactForm
