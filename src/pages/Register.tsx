import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Üye Ol</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Ad gerekli'),
          lastName: Yup.string().required('Soyad gerekli'),
          email: Yup.string().email('Geçerli bir email girin').required('Email gerekli'),
          password: Yup.string().min(6, 'Şifre en az 6 karakter olmalı').required('Şifre gerekli'),
        })}
        onSubmit={(values) => {
          console.log('Kayıt verisi:', values);
          alert('Kayıt başarılı!');
        }}
      >
        <Form className="flex flex-col gap-4">
          <div>
            <label>Ad</label>
            <Field name="firstName" className="w-full border p-2 rounded" />
            <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label>Soyad</label>
            <Field name="lastName" className="w-full border p-2 rounded" />
            <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label>Email</label>
            <Field name="email" type="email" className="w-full border p-2 rounded" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label>Şifre</label>
            <Field name="password" type="password" className="w-full border p-2 rounded" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>
          <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Üye Ol
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
