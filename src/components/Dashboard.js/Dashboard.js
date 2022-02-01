import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import jose from "node-jose";
import PreApproval from "./PreApproval";
import PaymentOption from "./PaymentOption";
import PaymentBreakdown from "./PaymentBreakdown";
import { FormTitles } from "../constants/data";
import "./dashboard.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state);
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    accommodation_status: "",
    rent_request: "",
    monthly_salary: "",
    monthly_plan: "",
    pre_approved_amount: "",
    monthly_payment: "",
    tenor: "",
  });

  const submit = async () => {
    const response = await fetch(
      "https://kwaba-project.herokuapp.com/api/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ formData }),
      }
    );
    const data = await response.json();
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.success);
      setFormData({
        accommodation_status: "",
        rent_request: "",
        monthly_salary: "",
        monthly_plan: "",
        pre_approved_amount: "",
        monthly_payment: "",
        tenor: "",
      });
    }
  };
  const check = () => {
    if (formData.rent_request === "") {
      toast("Please enter a valid rent amount");
    } else if (formData.monthly_salary === "") {
      toast("Please enter a valid salary");
    } else if (formData.monthly_plan === "") {
      toast("Please select your preferred monthly plan");
    }
  };
  //   console.log(formData);

  const PageDisplay = () => {
    if (page === 0) {
      return <PaymentOption formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PaymentBreakdown formData={formData} setFormData={setFormData} />;
    } else {
      return <PreApproval formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-3">
        <div className="col-lg-6 col-md-10 col-sm-12">
          <h5>My Rent</h5>

          <div className="form p-4 shadow">
            <div className="progressbar w-100">
              <div
                style={{
                  width: page === 0 ? "50%" : page === 1 ? "100%" : "100%",
                }}
              ></div>
              <small>{page + 1 + " of " + FormTitles.length}</small>
            </div>

            <div className="form-container">
              <div className="form-header">
                <h4>{FormTitles[page]}</h4>
              </div>
              <hr />
              <div className="form-body">{PageDisplay()}</div>

              <div className="form-footer text-center mt-2">
                {page === 0 ? null : (
                  <button
                    onClick={() => {
                      setPage((currPage) => currPage - 1);
                    }}
                  >
                    Prev
                  </button>
                )}

                <button
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      //   submit data
                      //  console.log(formData);
                      submit();
                    } else {
                      setPage((currPage) => currPage + 1);
                      check();
                    }
                  }}
                >
                  {page === FormTitles.length - 1 ? "Accept" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
