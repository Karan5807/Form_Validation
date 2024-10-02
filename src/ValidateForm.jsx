import { useState } from 'react';
import './App.css';

const ValidateForm = () => {

  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:"",
    age:"",
    gender:"",
    interest:[],
    birthDate:""
  });

  const [errorData, setErrorData] = useState({});

  function validEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function validAge(age){
    if(age >= 18 && age <= 100){
      const regex = /^(?:[1-9]\d{0,1}|100)$/;
      return regex.test(age);
    }else{
      return errorData.age = "Invalid Age";
    }
  }

  function isValidPhnNum(phoneNumber){
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phoneNumber);
  }

  function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }
 
  const Validation = () =>{
    let newError = {};

    if(!formData.firstName){
      newError.firstName = "First Name is Required";
    }

    if(!formData.lastName){
      newError.lastName = "Last Name is Required";
    }

    if(!formData.email){
      newError.email = "Email is Required";
    } else if(!validEmail(formData.email)){
      newError.email = "Invalid Email Format";
    }

    if (formData.interest.length === 0) {
      newError.interest = "Select at least one interest";
    }

    if(!formData.phoneNumber){
      newError.phoneNumber = "Phone number is Required";
    } else if(!isValidPhnNum(formData.phoneNumber)){
      newError.phoneNumber = "Phone Number Must be in 10 digits form";
    }

    if(!formData.password){
      newError.password = "Password is required";
    }else if (!validatePassword(formData.password)){
      newError.password = "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter"
    }

    if(!formData.confirmPassword){
      newError.confirmPassword = "Confirm password is required";
    }else if (formData.confirmPassword !== formData.password){
      newError.confirmPassword="Password must Match";
    }

    if(!formData.age){
      newError.age="Age is Required";
    }else if (!validAge(formData.age)){
      newError.age =" Age Must be at least 18 Years Old and older than 100 years";
    }

    if(!formData.gender){
      newError.gender="Gender is Required";
    }

    if(formData.interest.length === 0){
      newError.intrest = "Select at least one Interest";
    }

    if(!formData.birthDate){
      newError.birthDate="Date of birth is Required";
    }

    setErrorData(newError);
    return Object.keys(newError).length === 0;
  }


  const handleCheckboxChange = (e) => {
    const {name, checked} = e.target;
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

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData({...formData, [name]:value});
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const isValid = Validation();
    if(isValid){
      console.log("Login Successfull");
    }else{
      console.log("Login Unsucessfull");
    }
  }

  return (
    <div className='All'>
      <h2 className='Heading'>Form Validation No Packages</h2>
      <div className='withValidation'>
        <label className='Label'>First Name:</label>
        <input
        className='Input'
        type='text'
        name='firstName'
        placeholder='Enter Your first name'
        onChange={handleChange}
        value={formData.firstName}
        />
        {errorData.firstName && <p className='Error'>{errorData.firstName}</p>}
      </div>
      <div className='withValidation'>
        <label className='Label'>Last Name:</label>
        <input
        className='Input'
        type='text'
        name='lastName'
        placeholder='Enter Your last name'
        onChange={handleChange}
        value={formData.lastName}
        />
        {errorData.lastName && <p className='Error'>{errorData.lastName}</p>}
      </div>
      <div className='withValidation'>
        <label className='Label'>Email:</label>
        <input
        className='Input'
        type="email"
        name='email'
        placeholder='Enter your email'
        onChange={handleChange}
        value={formData.email}
        />
        {errorData.email && <p className='Error'>{errorData.email}</p>}
      </div>
      <div className='withValidation'>
        <label className='Label'>Phone Number:</label>
        <input
        className='Input'
        type="number"
        name='phoneNumber'
        placeholder='Enter Your phone number'
        onChange={handleChange}
        value={formData.phoneNumber}
        />
        {errorData.phoneNumber && <p className='Error'>{errorData.phoneNumber}</p>}
      </div>
      <div className='withValidation'>
        <label className='Label'>Password:</label>
        <input
        className='Input'
        type='text'
        name='password'
        placeholder='Enter your Password'
        onChange={handleChange}
        value={formData.password}
        />
        {errorData.password && <p className='Error'>{errorData.password}</p>}
      </div>
      <div className='withValidation'>
        <label className='Label'>Confirm Password:</label>
        <input
        className='Input'
        type="password"
        name='confirmPassword'
        placeholder='Confirm your password'
        onChange={handleChange}
        value={formData.confirmPassword}
        />
        {errorData.confirmPassword && <p className='Error'>{errorData.confirmPassword}</p>}
      </div>
      <div className='withValidation'>
        <label className='Label'>Gender:</label>
        <select className='Input' name='gender' value={formData.gender} onChange={handleChange}>
          <option value="select">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errorData.gender && <p className='Error'>{errorData.gender}</p>}
      </div>
      <div className='withValidation'>
        <label className='Label'>Age:</label>
        <input
        className='Input'
        placeholder='Enter your age'
        type="number"
        name='age'
        value={formData.age}
        onChange={handleChange}
        />
        {errorData.age && <p className='Error'>{errorData.age}</p>}
      </div>
      <div className='withValidation'>
        <label className='Label'>Interest:</label>
        <label className='Label'>Coding</label>
        <input
        className='Input'
        type="checkbox"
        name='interest'
        onChange={handleCheckboxChange}
        value={formData.interest.includes("Coding")}
        />
        <label className='Label'>Cooking</label>
        <input
        className='Input'
        type="checkbox"
        name='interest'
        onChange={handleCheckboxChange}
        value={formData.interest.includes("Cooking")}
        />
        <label className='Label'>Swimming</label>
        <input
        className='Input'
        type="checkbox"
        name='interest'
        onChange={handleCheckboxChange}
        value={formData.interest.includes("Swimming")}
        />
        {errorData.intrest && <p className='Error'>{errorData.intrest}</p>}
      </div>
      <div className='withValidation'>
        <label className='Label'>Birth Date:</label>
        <input
        className='Input'
        type="date"
        name='birthDate'
        onChange={handleChange}
        value={formData.birthDate}
        />
        {errorData.birthDate && <p className='Error'>{errorData.birthDate}</p>}
      </div>

      <div className='withValidation'>
        <button className='Button' type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default ValidateForm;
