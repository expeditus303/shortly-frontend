import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { UserContext } from "../../contexts/UserContext";

export default function SignInPage() {
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorExists, setErrorExists] = useState(undefined);

  const [loadingEffect, setLoadingEffect] = useState(false);

  async function signIn(event) {
    event.preventDefault();

    setLoadingEffect(true);

    if (!validateEmail(formData.email)) {
      setErrorExists(
        "Please check that you have entered a valid email address and try again."
      );
      return setLoadingEffect(false);
    } else {
      try {
        const promisse = await axios.post(
          process.env.REACT_APP_API_URL + "/signin",
          formData
        );
        console.log(promisse);
        setLoadingEffect(false);
        sessionStorage.setItem("localToken", (promisse.data.token))
        setUser(promisse.data.token)
        return navigate("/");
      } catch (err) {
        console.log(err);
        if (err.response.status === 401) {
          setErrorExists(
            "The email or password you entered is incorrect. Please try again."
          );
          return setLoadingEffect(false);
        }
      }
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;

    return emailRegex.test(email);
  };

  return (
    <>
      <ErrorContainer errorExists={errorExists}>
        <h2>{errorExists}</h2>
      </ErrorContainer>

      <Form onSubmit={signIn} loadingEffect={loadingEffect}>
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

        <button type="submit">Sign In!</button>
        <button id="loading" disabled>
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
  width: 70%;
  display: ${({ errorExists }) => (errorExists ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.2rem;
`;
