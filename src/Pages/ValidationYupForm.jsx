import { useState } from "react";
import { InputBox } from "../Services";
import * as Yup from "yup";

const ValidateYupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  });

  const [errorData, setErrorData] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .min(18, "You must be at least 18 years old")
      .max(100, "You cannot be older than 100 years")
      .required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    interests: Yup.array()
      .min(1, "Select at least one interest")
      .required("Select at least one interest"),
    birthDate: Yup.date().required("Date of birth is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrorData(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedInterests = [...formData.interests];
    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter(
        (interest) => interest !== name
      );
    }

    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-10 px-4 animate-slidein text-red-50">
      <div className="max-w-4xl bg-lime-900 shadow-lg rounded-lg p-8">
        <h2 className="text-yellow-50 font-sans font-normal text-2xl">
          Form Validation With Yup Library Packages
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
            value={formData.interests.includes("Coding")}
          />
          <label className="block text-yellow-50 text-left font-medium font-sans">
            Cooking
          </label>
          <input
            className="Input"
            type="checkbox"
            name="interest"
            onChange={handleCheckboxChange}
            value={formData.interests.includes("Cooking")}
          />
          <label className="block text-yellow-50 text-left font-medium font-sans">
            Swimming
          </label>
          <input
            className="Input"
            type="checkbox"
            name="interest"
            onChange={handleCheckboxChange}
            value={formData.interests.includes("Swimming")}
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

export default ValidateYupForm;
