import React, { useState } from "react";

import Input from "../input/Input";
import Button from "../button/Button";
import SelectTag from "../select-tag/SelectTag";
import Dates from "../Date/Date";

import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/actions/addEmployee";

import { departments } from "../../data/departments";
import { states } from "../../data/states";

export default function EmployeesForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [button, setButton] = useState(false);

  const [validation, setValidation] = useState(true);

  const [departmentsOptions, setDepartmentsOptions] = useState({ departments });
  const [statesOptions, setStatesOptions] = useState({ states });

  const dispatch = useDispatch()

  const handleChange = (e, inputName) => {
    const { value } = e.target;
    inputName(value);
  };
  const handleChangeDropDown = (e, inputName) => {
    const { id } = e.target;
    inputName(id);
  };

  const handleChangeDate = (e, inputName) => {
    inputName(e);
  };

  const clearInput = ()=>{
    setFirstName("")
    setLastName("")
    setDateOfBirth("")
    setStartDate("")
    setStreet("")
    setCity("")
    setState("Alabama")
    setZipCode("")
    setDepartment("Sales")

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName.length &&
      lastName.length &&
      dateOfBirth.length &&
      startDate.length &&
      street.length &&
      city.length &&
      state.length &&
      zipCode.length &&
      department.length > 0
    ) {
      dispatch(addEmployee({
        firstName,
        lastName,
        dateOfBirth,
        startDate,
        street,
        city,
        state,
        zipCode,
        department
      }))
      
      clearInput()

    } else {
      setValidation(false);
    }
  };

  return (
    <section className="employees-form">
      <form action="" onSubmit={handleSubmit}>
        <div className="employees-form__container">
          <div>
            <Input
              className="employees-form__input"
              fors="First Name"
              type="text"
              id="First Name"
              name="First Name"
              label="First Name"
              value={firstName}
              onChange={(e) => handleChange(e, setFirstName)}
            />

            <Input
              className="employees-form__input"
              fors="Last Name"
              type="text"
              id="LastName"
              name="Last Name"
              label="Last Name"
              value={lastName}
              onChange={(e) => handleChange(e, setLastName)}
            />

            <Dates
              className="employees-form__input"
              fors="dateofbirth"
              type="text"
              id="dateofbirth"
              name="dateofbirth"
              label="Date of birth"
              onChanges={(e) => handleChangeDate(e, setDateOfBirth)}
              value={dateOfBirth}
            />

            <Dates
              className="employees-form__input"
              fors="startdate"
              type="text"
              id="startdate"
              name="startdate"
              label="Start Date"
              onChanges={(e) => handleChangeDate(e, setStartDate)}
              value={startDate}
            />
          </div>

          <div className="employees-form__input-address">
            Address
            <Input
              className="employees-form__input"
              fors="street"
              type="text"
              id="street"
              name="street"
              label="Street"
              value={street}
              onChange={(e) => handleChange(e, setStreet)}
            />
            <Input
              className="employees-form__input"
              fors="city"
              type="text"
              id="city"
              name="city"
              label="City"
              value={city}
              onChange={(e) => handleChange(e, setCity)}
            />
            <SelectTag
              title="State"
              value={statesOptions.states.map((element) => {
                return {
                  id: element.name,
                  value: element.name,
                };
              })}
              content={state}
              onChange={(e) => handleChangeDropDown(e, setState)}
            />
            <Input
              className="employees-form__input"
              fors="zipCode"
              type="number"
              id="zipCode"
              name="zipCode"
              label="Zip code"
              value={zipCode}
              onChange={(e) => handleChange(e, setZipCode)}
            />
          </div>
        </div>
        <div className="employees-form__Select">
          <SelectTag
            title="Department"
            value={departmentsOptions.departments.map((element) => {
              return {
                id: element,
                value: element,
              };
            })}
            content={department}
            onChange={(e) => handleChangeDropDown(e, setDepartment)}
          />
        </div>

        <div className="employees-form__error">
          {!validation ? "One or more fields in the form are empty." : ""}
        </div>

        <Button type="" className="employees-form__button" value="Save" />
      </form>
    </section>
  );
}
