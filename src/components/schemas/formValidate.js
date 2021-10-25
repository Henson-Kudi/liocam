import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const formSchema = yup.object().shape({
    name : yup.string().required('This field is required').min(6, 'This field should be at least 6 characters long').max(255, 'This field must not exceed 255 characters'),

    email : yup.string().required('This field is required').trim('This field cannot be empty').email('Please enter valid email address').min(6, 'This field should be at least 6 characters long').max(255, 'This field must not exceed 255 characters'),

    contact : yup.string().required('This field is required').trim('This field cannot be empty').matches(phoneRegExp, 'Please enter valide contact number').max(255, 'This field must not exceed 255 characters'),

    address : yup.string().trim('This field cannot be empty').max(255, 'This field must not exceed 255 characters'),

    message : yup.string().required('This field is required').trim('This field cannot be empty').min(6, 'This field should be at least 6 characters long'),
})

export const orderSchema = yup.object().shape({
    name : yup.string().required('This field is required').trim('This field cannot be empty').min(6, 'This field should be at least 6 characters long').max(255, 'This field must not exceed 255 characters'),

    email : yup.string().required('This field is required').trim('This field cannot be empty').email('Please enter valid email address').min(6, 'This field should be at least 6 characters long').max(255, 'This field must not exceed 255 characters'),

    contact : yup.string().required('This field is required').trim('This field cannot be empty').matches(phoneRegExp, 'Please enter valide contact number').max(255, 'This field must not exceed 255 characters'),

    address : yup.string().required('This field is required').trim('This field cannot be empty').max(255, 'This field must not exceed 255 characters'),
})