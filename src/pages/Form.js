import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from 'yup'

export const Form = () => {

    const schema = yup.object().shape({
    
        fullName: yup.string().required("Full Name is required"),
        email: yup.string().email("Invalid Email").required("Email is required"),
        age: yup.number().positive().integer().required("Age is required"),
        password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
        confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref("password"), null], "Passwords must match"),
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        validationSchema: schema,
        resolver: yupResolver(schema),
        
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="d-flex justify-content-center mt-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" type="text" placeholder="Full Name" {...register("fullName")} />
                <p className="text-danger">{errors.fullName?.message}</p>
                <input className="form-control" type="email" placeholder="abc123@gmail.com" {...register("email")} />
                <p className="text-danger">{errors.email?.message}</p>
                <input className="form-control" type="number" placeholder="Age" {...register("age")} />
                <p className="text-danger">{errors.age?.message}</p>
                <input className="form-control" type="password" placeholder="Password" {...register("password")} />
                <p className="text-danger">{errors.password?.message}</p>
                <input className="form-control" type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
                <p className="text-danger">{errors.confirmPassword?.message}</p>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    )
}