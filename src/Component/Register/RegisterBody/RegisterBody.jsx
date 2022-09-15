import React from 'react';
import './RegisterBody.css'
import { useForm } from "react-hook-form";


const RegisterBody = () => {

    // const initialValue = { username: "", email: "", password: ""}
    // const [formValue, setFormValue] = React.useState(initialValue)

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValue({ ...formValue, name: value})
    //     console.log(formValue)
    // }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); 

    return(
        <div className='registerbody'>
            <div className="sub-registerbody">
                <form action="">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='First Name' required />
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Last Name' required />
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder='User Name' {...register("User Name", { required: true })}  />

                    <label htmlFor="">E-mail</label>
                    <input type="email" placeholder='E-mail' {...register("E-mail", { required: true })} />

                    <label htmlFor="" >Password</label>
                    <input type="password" placeholder='Password' {...register("Password", { required: true })} />
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" placeholder='Confirm Password' id='com_password' required />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" value="Register" className='submit'  onSubmit={handleSubmit(onSubmit)} />
                </form>
            </div>
        </div>
    )
}

export default RegisterBody;