import { useState } from "react";
import { InputBox } from "../Services";

const ValidateForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interest: [],
    birthDate: "",
  });

  const [errorData, setErrorData] = useState({});

  function validEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function validAge(age) {
    if (age >= 18 && age <= 100) {
      const regex = /^(?:[1-9]\d{0,1}|100)$/;
      return regex.test(age);
    } else {
      return (errorData.age = "Invalid Age");
    }
  }

  function isValidPhnNum(phoneNumber) {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phoneNumber);
  }

  function validatePassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  const Validation = () => {
    let newError = {};

    if (!formData.firstName) {
      newError.firstName = "First Name is Required";
    }

    if (!formData.lastName) {
      newError.lastName = "Last Name is Required";
    }

    if (!formData.email) {
      newError.email = "Email is Required";
    } else if (!validEmail(formData.email)) {
      newError.email = "Invalid Email Format";
    }

    if (formData.interest.length === 0) {
      newError.interest = "Select at least one interest";
    }

    if (!formData.phoneNumber) {
      newError.phoneNumber = "Phone number is Required";
    } else if (!isValidPhnNum(formData.phoneNumber)) {
      newError.phoneNumber = "Phone Number Must be in 10 digits form";
    }

    if (!formData.password) {
      newError.password = "Password is required";
    } else if (!validatePassword(formData.password)) {
      newError.password =
        "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
    }

    if (!formData.confirmPassword) {
      newError.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newError.confirmPassword = "Password must Match";
    }

    if (!formData.age) {
      newError.age = "Age is Required";
    } else if (!validAge(formData.age)) {
      newError.age =
        " Age Must be at least 18 Years Old and older than 100 years";
    }

    if (!formData.gender) {
      newError.gender = "Gender is Required";
    }

    if (formData.interest.length === 0) {
      newError.intrest = "Select at least one Interest";
    }

    if (!formData.birthDate) {
      newError.birthDate = "Date of birth is Required";
    }

    setErrorData(newError);
    return Object.keys(newError).length === 0;
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedInterests = [...formData.interest];
    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter(
        (interest) => interest !== name
      );
    }

    setFormData({
      ...formData,
      interest: updatedInterests,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = Validation();
    if (isValid) {
      console.log("Login Successfull");
    } else {
      console.log("Login Unsucessfull");
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-10 px-4 animate-slidein text-red-50">
      <div className="max-w-4xl bg-lime-900 shadow-lg rounded-lg p-8">
        <h2 className="text-yellow-50 font-sans font-normal text-2xl">
          Form Validation No Packages
        </h2>
        {/* Section for First Name */}
        <div>
          <InputBox
            Label={"First Name :"}
            Type="text"
            Name="firstName"
            Placeholder={"Enter Your Name..."}
            onChange={handleChange}
            Value={formData.firstName}
          />
          {errorData.firstName && (
            <p className="text-xl font-sans font-medium text-red-500">
              {errorData.firstName}
            </p>
          )}
        </div>
        {/* Section for Last Name */}
        <div>
          <InputBox
            Label={"Last Name :"}
            Type="text"
            Name="lastName"
            Placeholder={"Enter Your last Name..."}
            onChange={handleChange}
            Value={formData.lastName}
          />
          {errorData.lastName && <p className="Error">{errorData.lastName}</p>}
        </div>
        {/* Section for Email */}
        <div>
          <InputBox
            Label={"Email :"}
            Type="email"
            Name="Email"
            Placeholder={"Enter your Email"}
            Value={formData.email}
            onChange={handleChange}
          />
          {errorData.email && <p className="Error">{errorData.email}</p>}
        </div>
        {/* Section for Phone Number */}
        <div>
          <InputBox
            Label={"Phone Number :"}
            Type="number"
            Name="phoneNumber"
            Placeholder={"Enter your phone Number"}
            Value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errorData.phoneNumber && (
            <p className="Error">{errorData.phoneNumber}</p>
          )}
        </div>
        {/* Section for Password */}
        <div>
          <InputBox
            Label={"Password :"}
            Type="password"
            Name="password"
            Placeholder={"Enter password"}
            Value={formData.password}
            onChange={handleChange}
          />
          {errorData.password && <p className="Error">{errorData.password}</p>}
        </div>
        {/* Section for Confirm Password */}
        <div>
          <InputBox
            Label={"Confirm Password :"}
            Type="password"
            Name="confirmPassword"
            Placeholder={"Confirm your password"}
            Value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errorData.confirmPassword && (
            <p className="Error">{errorData.confirmPassword}</p>
          )}
        </div>
        {/* Section for Gender */}
        <div className="flex justify-center gap-8 m-4 max-w-md">
          <div className="flex-auto">
            <label className="block text-yellow-50 text-left font-medium font-sans">
              Gender:
            </label>
          </div>
          <div>
            <select
              className="max-w-md p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="select">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {errorData.gender && <p className="Error">{errorData.gender}</p>}
        </div>
        {/* Section for Age */}
        <div>
          <InputBox
            Label={"Age :"}
            Type="number"
            Name="age"
            Value={formData.age}
            onChange={handleChange}
          />
          {errorData.age && <p className="Error">{errorData.age}</p>}
        </div>
        {/* Section for Intrest */}
        <div className="flex justify-center gap-8 m-4 max-w-md">
          <div className="flex-auto">
            <label className="block text-yellow-50 text-left font-medium font-sans">
              Interest:
            </label>
          </div>

          <label className="block text-yellow-50 text-left font-medium font-sans">
            Coding
          </label>
          <input
            className="Input"
            type="checkbox"
            name="interest"
            onChange={handleCheckboxChange}
            value={formData.interest.includes("Coding")}
          />
          <label className="block text-yellow-50 text-left font-medium font-sans">
            Cooking
          </label>
          <input
            className="Input"
            type="checkbox"
            name="interest"
            onChange={handleCheckboxChange}
            value={formData.interest.includes("Cooking")}
          />
          <label className="block text-yellow-50 text-left font-medium font-sans">
            Swimming
          </label>
          <input
            className="Input"
            type="checkbox"
            name="interest"
            onChange={handleCheckboxChange}
            value={formData.interest.includes("Swimming")}
          />
          {errorData.intrest && <p className="Error">{errorData.intrest}</p>}
        </div>
        {/* Section for Birth Date */}
        <div>
          <InputBox
            Label={"Birth Date :"}
            Type="date"
            Name="birthDate"
            Value={formData.birthDate}
            onChange={handleChange}
          />
          {errorData.birthDate && (
            <p className="Error">{errorData.birthDate}</p>
          )}
        </div>

        <div className="flex justify-center gap-8 m-4 max-w-md">
          <button
            className="block text-yellow-50 text-left font-medium font-sans"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValidateForm;
