import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorExists, setErrorExists] = useState(undefined);

  const [loadingEffect, setLoadingEffect] = useState(false);

  const navigate = useNavigate();

  async function signUp(event) {
    event.preventDefault();

    setLoadingEffect(true);

    if (!validateEmail(formData.email)) {
      setErrorExists(
        "Please check that you have entered a valid email address and try again."
      );
      return setLoadingEffect(false);
    } else {
      if (formData.password !== formData.confirmPassword) {
        setErrorExists("Passwords do not match, please try again.")
        return setLoadingEffect(false)
      }
      try {
        const promisse = await axios.post(
          process.env.REACT_APP_API_URL + "/signup",
          formData
        );
        console.log(promisse);
        setLoadingEffect(false);
        return navigate("/");
      } catch (err) {
        if (err.response.status === 409) {
          setErrorExists(
            "The email you entered is already in use. Please try another email address or log in to your existing account."
          );
          return setLoadingEffect(false);
        }
      }
    }
  }

  console.log(formData);

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;

    return emailRegex.test(email);
  };

  return (
    <>
      <ErrorContainer errorExists={errorExists}>
        <h2>{errorExists}</h2>
      </ErrorContainer>

      <Form onSubmit={signUp} loadingEffect={loadingEffect}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          required
        />
        <button type="submit">Sign Up!</button>
        <button id="loading"  disabled>
          <ThreeDots
            height="25.969"
            width="80"
            radius="9"
            color="#54c764"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </button>
      </Form>
    </>
  );
}

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;

  input {
    border-radius: 0.2rem;
    border-style: none;
    height: 3rem;
    padding: 0rem 1rem;
    margin-bottom: 1rem;
  }

  button {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem;
    border: 1px;
    border-radius: 1rem;
    padding: 1rem;
    background-color: #215228;
    color: #54c764;
    display: ${({ loadingEffect }) => (loadingEffect ? "none" : "flex")};
    justify-content: center;
    align-items: center;
    height: 3.5rem;
  }

  button#loading {
    display: ${({ loadingEffect }) => (loadingEffect ? "flex" : "none")};
    justify-content: center;
    align-items: center;
  }
`;

const ErrorContainer = styled.div`
  /* background-color: yellow; */
  width: 70%;
  display: ${({ errorExists }) => (errorExists ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.2rem;
`;
