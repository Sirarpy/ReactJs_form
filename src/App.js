import React from "react";
// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function Add() {
  const { handleSubmit, register, errors } = useForm({});

  function onSubmit(formData) {
    console.log(formData);
  }

  console.log(errors);

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <legend>React-hook-form</legend>
        <label>Username</label>
        <input
          type="text"
          name="username"
          ref={register({ required: true, minLength: 3, })}
        />

        {errors.username && <p>Username invalid</p>}

        <label>Age</label>
        <input type="number" name="age" ref={register({ required: true, maxLength: 2, })} />

        {errors.age && <p>Age invalid</p>}

        <span>
          <input type="checkbox" name="remember" ref={register} />
          <label>Remember me</label>
        </span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
// ********************************************************
// example with useState
// export default function Add() {

//   const [errors, setErrors] = useState({});

//   const [formData, setFormData] = useState({
//     username: '',
//     age: '',
//     remember: false
//   })

//   function validate({ username }) {
//     const valid =  username && username.length > 3;
//     if (!valid) {
//       setErrors({username:true})
//     } else{
//       setErrors({})
//     }
//     return valid
//   }

//   function onSubmit(event) {
//   event.preventDefault();
//   validate(formData) ? console.log(formData) : console.log("invalid");
//   }

//   function onChange({ target }) {
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     setFormData( prevState => ({
//     ...prevState,
//     [target.name]: value
//     }))
//   }
//   return (
//     <div>
//       <form autoComplete="off" onSubmit={onSubmit} >
//       <legend>React-hook-form</legend>
//         <label>Username</label>
//         <input type="text" name="username" value={formData.username} onChange={onChange}/>

//         {errors.username && <p>Username invalid</p>}

//         <label>Age</label>
//         <input type="number" name="age" value={formData.age} onChange={onChange}/>

//         <span>
//           <input type="checkbox" name="remember" checked={formData.remember} onChange={onChange}/>
//           <label>Remember me</label>
//         </span>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// ********************************************************

// // example 2 to add email and pasword
// export default function App() {
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//       type="email"
//        placeholder="email"
//       name="email"
//       ref={register} />
//       <input
//         type="password"
//         placeholder="password"
//         name="password"
//         // ref={register({ required: true, minLength: 8 })}
//         ref={register({
//           required: "password required",
//           minLength: { value: 8, message: "too shorter" },
//         })}
//       />
//       {/* {errors.password && <p>password is invalid</p>} */}
//       {errors.password && <p>{errors.password.message}</p>}
//       <input type="submit" />
//     </form>
//   );
// }
