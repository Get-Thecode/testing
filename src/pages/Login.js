import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const Login = () => {
  return (
    <>
      <Meta title={"title"} />
      <BreadCrumb title="Login" />

      <div className="login-wrapper py-5 home-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <div className="d-felx justify-content-center gap-15 align-items-center">
                <Link to="/loginasemployee" className="button signup">
                  Welcome Employee!!
                </Link>
                <Link to="/loginascustomer" className="button signup">
                  Welcome Customer!!
                </Link>
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
