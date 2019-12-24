import RegisterForm from '../components/RegisterForm'
import { withFormik } from 'formik'
import validateFunc from 'utils/validate'

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    fullname: '', 
    password: '',
    passwordRepeat: ''
  }), 
    validate: values => {
      let errors = {};

      validateFunc({ isAuth: false, values, errors })

      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'RegisterForm',
  })(RegisterForm);