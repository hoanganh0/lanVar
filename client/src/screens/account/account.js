import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import "./account.scss";
import { useEffect, useState } from "react";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Account, RequestLogin } from "../../redux/actions/account";
import { useSelector } from "react-redux";
import { ViewOrder } from "../../redux/actions/orders";
import { URL } from "../../ global-variable/variable";

const FormAccount = () => {
  const [userExist, setUserExist] = useState();
  const [notification, setNotification] = useState(false);
  const [iconLoading, setIconLoading] = useState(false);
  const [statusForm, setStatusForm] = useState("signIn");
  const [validateUser, setValidateUser] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.account.username);
  const statusLogin = useSelector((state) => state.account.statusLogin);

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    if (statusLogin && statusForm === 'signIn') {
      dispatch(RequestLogin(false));
    }

    try {
      await setIconLoading(true);

      if (statusForm === "signIn") {
        const res = await axios.get(
          `${URL}/api/account/signIn?username=${data.username}&password=${data.password}`
        );
        setIconLoading(false);

        if (res.data) {
          dispatch(Account(data.username));
          localStorage.setItem('user', JSON.stringify({username: data.username}));
          dispatch(ViewOrder(data.username));
          setValidateUser(data.username);
        } else {
          setNotification(true);
          setValidateUser(false);
        }
      } else {
        const res = await axios.get(
          `${URL}/api/account/signUp?username=${data.username}&password=${data.password}`
        );
        setIconLoading(false);
        setNotification(true);

        if (res.data) {
          setUserExist(true);
        } else {
          setUserExist(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const hideNotification = () => {
    setNotification(false);
  };

  const changeSignUp = () => {
    if (statusForm === "signIn") {
      setStatusForm("signUp");
    } else {
      setStatusForm("signIn");
    }
  };

  const handleLogout = () => {
    setValidateUser(false);
    dispatch(Account(false));
    dispatch(ViewOrder(false));
    localStorage.removeItem('user');
  };

  useEffect(() => {}, [userExist, notification]);

  return (
    <div className="account">
      {statusLogin ? (
        <div className="account__request-login">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-10">
                <p>
                  <FontAwesomeIcon icon={faTimesCircle} /> Please login to
                  continute
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {user ? (
        <div className="account__details">
          <div className="container">
            <h1>My account</h1>
            <div className="account__wrap">
              <div className="account__left">
                <ul>
                  <li><Link to='/order'>Orders</Link></li>
                  <li>Account details</li>
                  <li onClick={handleLogout}>Logout</li>
                </ul>
              </div>
              <div className="account__right">
                <h4>
                  Hello, <span>{user}</span>
                </h4>
                <p>
                  <Link to="/shop">Continute shopping lan var</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="form-account">
          {notification ? (
            <div
              className={`form-account__notification ${
                notification ? "is-show" : false
              }`}
            >
              {statusForm === "signUp" ? (
                userExist ? (
                  <div>
                    <FontAwesomeIcon icon={faCheckCircle} />{" "}
                    <p>Create account success</p>
                  </div>
                ) : (
                  <div>
                    <FontAwesomeIcon icon={faTimesCircle} />
                    <p>Account has exist</p>
                  </div>
                )
              ) : (
                false
              )}

              {!validateUser && statusForm === "signIn" ? (
                <div>
                  <FontAwesomeIcon icon={faTimesCircle} />
                  <p>User name or password fail</p>
                </div>
              ) : (
                false
              )}
              <div
                className="form-account__try-again"
                onClick={hideNotification}
              >
                {userExist ? (
                  <div onClick={changeSignUp}>Sign in</div>
                ) : (
                  "Try again"
                )}
              </div>
            </div>
          ) : (
            false
          )}
          {notification ? (
            <div className="form-account__bg" onClick={hideNotification}></div>
          ) : (
            false
          )}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="wrap d-md-flex">
                  <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                    <div className="text w-100">
                      <h2>
                        Welcome to{" "}
                        {statusForm === "signIn" ? "Login" : "Sign Up"}
                      </h2>
                      <p>
                        {statusForm === "signIn"
                          ? "Don't have an account?"
                          : null}
                      </p>
                      <Link
                        onClick={changeSignUp}
                        className="btn btn-white btn-outline-white"
                      >
                        {statusForm === "signUp" ? "Sign In" : "Sign Up"}
                      </Link>
                    </div>
                  </div>
                  <div className="login-wrap p-4 p-lg-5">
                    <div className="d-flex">
                      <div className="w-100">
                        <h3 className="mb-4">
                          {statusForm === "signIn" ? "Sign In" : "Sign Up"}
                        </h3>
                      </div>
                      <div className="w-100">
                        <p className="social-media d-flex justify-content-end">
                          <Link
                            to="#"
                            className="social-icon d-flex align-items-center justify-content-center"
                          >
                            <FontAwesomeIcon
                              icon={faFacebookF}
                              className="fa fa-facebook"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="social-icon d-flex align-items-center justify-content-center"
                          >
                            <FontAwesomeIcon
                              icon={faGoogle}
                              className="fa fa-twitter"
                            />
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="__form">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="signin-form"
                      >
                        <div className="form-group mb-3">
                          <label className="label" for="name">
                            Username
                          </label>
                          <input
                            className="form-control"
                            placeholder="Username"
                            required
                            defaultValue=""
                            {...register("username", { required: true })}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label className="label" for="name">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            required
                            placeholder="Password"
                            {...register("password", { required: true })}
                          />
                        </div>
                        <div
                          className={`form-group form-btnSubbmit ${
                            iconLoading ? "is-show" : false
                          }`}
                        >
                          <button type="submit" className="form-control btn btn-primary submit px-3">
                            {statusForm === "signIn" ? "Sign In" : "Sign Up"}
                          </button>
                          <img src="/images/loading.gif" alt="" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormAccount;
