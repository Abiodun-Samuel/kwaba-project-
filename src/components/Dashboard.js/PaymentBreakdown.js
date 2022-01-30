import React, { useEffect } from "react";
import { monthlyPlan, getInt } from "../constants/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const PaymentBreakdown = ({ formData, setFormData }) => {
  // const abort = new AbortController();
  const calc = () => {
    const value =
      (Number(formData.rent_request) + 0.02 * Number(formData.rent_request)) /
      getInt(formData.monthly_plan);
    setFormData({ ...formData, monthly_payment: value });

    // const response = await fetch("http://localhost:5000/api/calc", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ formData }),
    // });
    // const data = await response.json();
    // toast.error(data.error);
    // setFormData({ ...formData, monthly_payment: data.value });
    // console.log(data);
  };
  // return () => abort.abort();
  useEffect(() => {
    calc();
  }, [formData.rent_request, formData.monthly_plan]);

  //  const token = localStorage.getItem("token");
  //  if (token) {
  //    const user = jose.util.base64url.decode(token);
  //    if (!user) {
  //      localStorage.removeItem("token");
  //      navigate("/login");
  //    } else {
  //      //   populateQuote();
  //    }
  //  }

  // const notify = () => toast("Wow so easy!");

  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <div className="form-group my-3">
        <label>Rent request amount</label>
        <div className="display_rent_request form-control shadow border-0">
          <div>
            <small className="text-secondary">Amount</small>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <span>&#8358;</span>
            <input
              type="number"
              className="display_rent_request_form"
              value={formData.rent_request}
              placeholder="Amount"
              onChange={(e) => {
                setFormData({ ...formData, rent_request: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
      <div className="form-group my-3">
        <label className="form-check-label" htmlFor="exampleCheck1">
          Monthly payment plan
        </label>
        <select
          className="form-control"
          value={formData.monthly_plan}
          onChange={(e) => {
            setFormData({
              ...formData,
              monthly_plan: e.target.value,
              tenor: e.target.value,
            });
          }}
        >
          {monthlyPlan.map((plan) => {
            return <option key={plan.id}> {plan.month}</option>;
          })}
        </select>
      </div>

      <div className="form-group my-3">
        <label className="form-check-label" htmlFor="exampleCheck1">
          Payment option
        </label>
        <div className="display_payment p-4">
          <div className="d-flex justify-content-between align-items-center border-bottom border-light">
            <p className="my-0 py-3">Pre-approved amount:</p>
            <p className="my-0 py-3">
              {formData.rent_request === "" ? (
                "--"
              ) : (
                <>
                  <span>&#8358;</span>
                  {Number(formData.rent_request)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </>
              )}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom border-light">
            <p className="my-0 py-3">Monthly payment:</p>
            <p className="my-0 py-3">
              {formData.monthly_payment === 0 ||
              formData.monthly_payment === "" ||
              isNaN(formData.monthly_payment) ? (
                "--"
              ) : (
                <>
                  <span>&#8358;</span>
                  {Number(formData.monthly_payment)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </>
              )}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom border-light">
            <p className="my-0 py-3">Tenor:</p>
            <p className="my-0 py-3">{formData.tenor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBreakdown;
