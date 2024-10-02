import {useState} from "react";
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

    // const nonParsed = {
    //   firstName: "Karan",
    //   lastName: "Singh",
    //   email: "Abc@example.com",
    //   phoneNumber: "1231234218",
    //   password: "123456Qq*",
    //   confirmPassword: "123456Qq*",
    //   age: "18",
    //   gender: "male",
    //   interests: ["coding"],
    //   birthDate: "2024-02-12",
    // };

    // const parsedUser = validationSchema.cast(nonParsed);

    // console.log(nonParsed, parsedUser);

    try {
      await validationSchema.validate(formData, {abortEarly: false});
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
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const {name, checked} = e.target;
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
    <div className="All">
      <h2 className='Heading'>Form Validation With Yup</h2>
      <div className='withValidation'>
        <label className="Label">First Name:</label>
        <input
          className="Input"
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
        />
        {errorData.firstName && <div className="Error">{errorData.firstName}</div>}
      </div>
      <div className='withValidation'>
        <label className="Label">Last Name:</label>
        <input
          className="Input"
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
        />
        {errorData.lastName && <div className="Error">{errorData.lastName}</div>}
      </div>
      <div className='withValidation'>
        <label className="Label">Email:</label>
        <input
          className="Input"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {errorData.email && <div className="Error">{errorData.email}</div>}
      </div>
      <div className='withValidation'>
        <label className="Label">Phone Number:</label>
        <input
          className="Input"
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          placeholder="Enter your phone number"
          onChange={handleChange}
        />
        {errorData.phoneNumber && (
          <div className="Error">{errorData.phoneNumber}</div>
        )}
      </div>

      <div className='withValidation'>
        <label className="Label">Password:</label>
        <input
          className="Input"
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        {errorData.password && <div className="Error">{errorData.password}</div>}
      </div>

      <div className='withValidation'>
        <label className="Label">Confirm Password:</label>
        <input
          className="Input"
          type="text"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm your password"
          onChange={handleChange}
        />
        {errorData.confirmPassword && (
          <div className="Error">{errorData.confirmPassword}</div>
        )}
      </div>

      <div className='withValidation'>
        <label className="Label">Gender:</label>
        <select className="Input" name="gender" value={formData.gender} onChange={handleChange}>
        <option value="male">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errorData.gender && <div className="Error">{errorData.gender}</div>}
      </div>

      <div className='withValidation'>
        <label className="Label">Age:</label>
        <input
        className="Input"
          type="number"
          name="age"
          value={formData.age}
          placeholder="Enter your age"
          onChange={handleChange}
        />
        {errorData.age && <div className="Error">{errorData.age}</div>}
      </div>

      <div className='withValidation'>
        <label className="Label">Interests:</label>
        <label>
          <input
          className="Input"
            type="checkbox"
            name="coding"
            checked={formData.interests.includes("coding")}
            onChange={handleCheckboxChange}
          />
          Coding
        </label>
        <label className="Label">
          <input
          className="Input"
            type="checkbox"
            name="sports"
            checked={formData.interests.includes("sports")}
            onChange={handleCheckboxChange}
          />
          Cooking
        </label>
        <label>
          <input
          className="Input"
            type="checkbox"
            name="reading"
            checked={formData.interests.includes("reading")}
            onChange={handleCheckboxChange}
          />
          Swimming
        </label>
        {errorData.interests && <div className="Error">{errorData.interests}</div>}
      </div>
      <div className='withValidation'>
        <label className="Label">Date of Birth:</label>
        <input
        className="Input"
          type="date"
          name="birthDate"
          value={formData.birthDate}
          placeholder="Enter your date of birth"
          onChange={handleChange}
        />
        {errorData.birthDate && (<div className="Error">{errorData.birthDate}</div>)}
      </div>

      <div className="withValidation">
      <button type="submit" className="Button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ValidateYupForm;