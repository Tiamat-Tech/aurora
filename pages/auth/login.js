import Head from "next/head";
import { useState } from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import { TextField } from "../../components/TextField";
import { Alert } from "../../components/Alert";
import { Show } from "../../components/Show";
import { Button } from "../../components/Button";
import { client } from "../../utils/api";

const Login = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);

  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, { setSubmitting }) =>
    client
      .post("/v2/auth/login", values)
      .then(() => router.push("/"))
      .catch(() => setErrors(["Invalid credentials."]))
      .finally(() => setSubmitting(false));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Aurora | Login</title>
      </Head>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-16 w-auto" src="/logos/aurora_mini_gradient.svg" alt="Aurora" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          <a
            href="https://docs.useaurora.app"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Or go to the Official Documentation!
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <div className="space-y-6">
                  <Show when={errors.length}>
                    <Alert title="Something goes wrong!" messages={errors} />
                  </Show>

                  <TextField type="text" name="email" label="Email Address" />

                  <TextField type="password" name="password" label="Password" />

                  {/** TODO: Implement The Remember Me. */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    {/*
                    <div className="text-sm">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password? (WIP)
                      </a>
                    </div>
                    */}
                  </div>

                  <div>
                    <Button type="submit" isLoading={isSubmitting} value="Sign In" />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
