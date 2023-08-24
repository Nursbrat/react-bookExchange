import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { useGoogleLogin } from 'react-google-login';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { loginUser, signupUser, googleSignin } from './authSlice';

const Login = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Required')
  });

  const onSubmit = async (values) => {
    try {
      const resultAction = await dispatch(loginUser(values));
      unwrapResult(resultAction);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const { signIn } = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const resultAction = await dispatch(googleSignin(response.tokenId));
        unwrapResult(resultAction);
        history.push('/');
      } catch (err) {
        setError(err.message);
      }
    },
    onFailure: (response) => {
      setError(response.error);
    },
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID
  });

  return (
    <>
      <h1>Login</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            {errors.password && touched.password && <div>{errors.password}</div>}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <button onClick={signIn}>Sign in with Google</button>
      {error && <div>{error}</div>}
    </>
  );
};

const Signup = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required')
  });

  const onSubmit = async (values) => {
    try {
      const resultAction = await dispatch(signupUser(values));
      unwrapResult(resultAction);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1>Signup</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            {errors.name && touched.name && <div>{errors.name}</div>}
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            {errors.password && touched.password && <div>{errors.password}</div>}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" type="password" />
            {errors.confirmPassword && touched.confirmPassword && (
              <div>{errors.confirmPassword}</div>
            )}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      {error && <div>{error}</div>}
    </>
  );
};

export { Login, Signup };
