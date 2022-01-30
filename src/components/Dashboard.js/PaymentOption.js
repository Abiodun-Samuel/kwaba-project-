import React from "react";
import { monthlyPlan } from "../constants/data";

const PaymentOption = ({ formData, setFormData }) => {
  return (
    <div>
      <label>What is your accommodation status?</label>
      <div className="form-group my-3">
        <div id="custom_radio">
          <div className="tabs">
            <label className="tab" htmlFor="new">
              <input
                id="new"
                type="radio"
                name=""
                value={formData.accommodation_status}
                className="tab-input"
                checked={
                  formData.accommodation_status === "Looking for a new rent"
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    accommodation_status: "Looking for a new rent",
                  })
                }
              />
              <div className="tab-box">Looking for a new rent</div>
            </label>
            <label className="tab" htmlFor="place">
              <input
                id="place"
                type="radio"
                name=""
                value={formData.accommodation_status}
                className="tab-input"
                checked={
                  formData.accommodation_status ===
                  "Want to pay for a new place"
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    accommodation_status: "Want to pay for a new place",
                  })
                }
              />
              <div className="tab-box">Want to pay for a new place</div>
            </label>
            <label className="tab" htmlFor="searching">
              <input
                id="searching"
                type="radio"
                value={formData.accommodation_status}
                className="tab-input"
                checked={
                  formData.accommodation_status === "I'm still searching"
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    accommodation_status: "I'm still searching",
                  })
                }
              />
              <div className="tab-box">I'm still searching</div>
            </label>
          </div>
        </div>
      </div>

      <div className="form-group my-3">
        <label>How much is your rent request amount?</label>
        <input
          type="number"
          className="form-control"
          value={formData.rent_request}
          placeholder="Amount"
          onChange={(e) => {
            setFormData({ ...formData, rent_request: Number(e.target.value) });
          }}
        />
      </div>
      <div className="form-group my-3">
        <label>How much do you earn monthly?</label>
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={formData.monthly_salary}
          onChange={(e) => {
            setFormData({
              ...formData,
              monthly_salary: Number(e.target.value),
            });
          }}
        />
      </div>
      <div className="form-group my-3">
        <label className="form-check-label" htmlFor="exampleCheck1">
          Choose a monthly payment plan
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
            return <option key={plan.id}>{plan.month}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default PaymentOption;
