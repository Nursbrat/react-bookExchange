import React from 'react';
import { useForm } from 'react-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { useGoogleLogin } from 'react-google-login';
import { login, signup } from './authSlice';

const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { Form, meta: { isSubmitting, canSubmit } } = useForm({
    onSubmit: async (values) => {
      try {
        const resultAction = await dispatch(
          type === 'login' ? login(values) : signup(values)
        );
        unwrapResult(resultAction);
        history.push('/');
      } catch (err) {
        console.error(err);
      }
    },
  });

  const { signIn } = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const resultAction = await dispatch(login(response));
        unwrapResult(resultAction);
        history.push('/');
      } catch (err) {
        console.error(err);
      }
    },
    onFailure: (response) => {
      console.error(response);
    },
  });

  return (
    <Form>
      <h2>{type === 'login' ? 'Login' : 'Signup'}</h2>
      {type === 'signup' && (
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
      )}
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      {type === 'signup' && (
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>
      )}
      <button type="submit" disabled={!canSubmit || isSubmitting}>
        Submit
      </button>
      <button type="button" onClick={signIn}>
        Sign in with Google
      </button>
    </Form>
  );
};

export default AuthForm;
