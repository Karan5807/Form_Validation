import { useState } from "react";

const useValidation = () =>{
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  function validateUrl(url) {
    const pattern =
      /^(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[\w-]*)*\/?$/;
    return pattern.test(url);
  }

  function isValidPhnNum(phoneNumber){
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phoneNumber);
  }

  function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  function validEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function validAge(age){
    const regex = age >= 18 && age<=100;
    return regex.test(age);
  }

  const validate = (name, value) => {
    switch (name) {
      case "firstName":
        if (!value || value.length === 0) {
          setErrors({ ...errors, firstName: "Please fill First Name" });
        } else {
          let newObj = omit(errors, "firstName");
          setErrors(newObj);
        }
        break;

        case "lastName":
          if (!value || value.length === 0) {
            setErrors({ ...errors, lastName: "Please fill First Name" });
          } else {
            let newObj = omit(errors, "lastName");
            setErrors(newObj);
          }
          break;  

      case "date":
        if (!value || value === "") {
          setErrors({ ...errors, date: "Please select date" });
        } else if (typeof value === "string") {
          let newObj = omit(errors, "date");
          setErrors(newObj);
        }
        break;

      case "email":
        if (!value || value.length === 0) {
          setErrors({ ...errors, email: "Please fill the Email Address" });
        } else if (typeof value === "string") {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case "phoneNumber":
        if (!value) {
          setErrors({
            ...errors,
            phoneNumber: "Please fill the details",
          });
        } else if (isValidPhnNum(value)) {
          setErrors({
            ...errors,
            phoneNumber:
              "Please enter a valid 10-digit Mobile Number with country code (+91)",
          });
        } else {
          let newObj = omit(errors, "phoneNumber");
          setErrors(newObj);
        }
        break;

      case "password":
        if (!value) {
          setErrors({
            ...errors,
            password: "Please fill the Password",
          });
        } else if (validatePassword(value)) {
          setErrors({
            ...errors,
            password:
              "Password must be 8 Character Long Contain 1 Upper Case , 1 Lower Case, at least one Symbol, and Number",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;

        case "confirmPassword":
          if (!value) {
            setErrors({
              ...errors,
              confirmPassword: "Please fill the Password",
            });
          } else if (validatePassword(value)) {
            setErrors({
              ...errors,
              confirmPassword:
                "Password did Not Match",
            });
          } else {
            let newObj = omit(errors, "confirmPassword");
            setErrors(newObj);
          }
          break;
      

        case "gender":
          if (!value) {
            setErrors({ ...errors, gender: "Please select an option" });
          } else if (typeof value === "string") {
            let newObj = omit(errors, "gender");
            setErrors(newObj);
          }
          break;
        
        case "age":
          if(!value){
            setErrors({...errors, age:"Please Enter Age"});
          }
          else if (validAge(value)) {
            setErrors({
              ...errors,
              age:"Password did Not Match",
            });
          }  
          else{
            let newObj = omit(errors, "age");
            setErrors(newObj);
          }
          break;
      default:
        break;
    }
  };

  const handleChange = (e, value, newVal, label) => {
    let name = newVal === true ? label : e.target?.name;
    let val = newVal === true ? value : e.target?.value;
    validate(name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    for (const [name, value] of Object.entries(values)) {
      const validationError = validate(name, value);
      if (validationError) {
        newErrors[name] = validationError;
      }
    }
    setErrors(newErrors);

    if (Object.keys(errors).length > 0) {
      console.log("Please Enter All details");
      setErrors(errors);
    } else {
      callback();
    }
  };

  return {
    values,
    errors,
    setErrors,
    setValues,
    handleChange,
    handleSubmit
  };
};

export default useValidation;
