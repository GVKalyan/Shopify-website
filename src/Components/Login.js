import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {

    let initialValues = {gmailId: "", password: "" };
    let [formValues, setFormValues] = useState(initialValues);
    let [formError,setFormError] = useState({})

    let handleChange = (e) => {
        let { name, value } = e.target

        setFormValues({ ...formValues, [name]: value })
    }

    let validations = (e) => { 
        e.preventDefault()
        let error = {}      

        
        if (formValues.gmailId === "") {
            error.gmailId = 'write gmailId'
        } else if (formValues.gmailId.length < 9) {
            error.gmailId = 'please enter valid gmailId, (Note:It should have atleast 10 Letters)'
        }

        if (formValues.password === "") {
            error.password = 'write password'
        } else if (formValues.password.length < 9) {
            error.password = 'please enter valid password, (Note:It should have atleast 10 Letters)'
        }

        setFormError(error) 
    }

    return (
        <>  
           <div className="cntr mt-5 bg-primary-subtle ">
                
                <form onSubmit={(e) => validations(e)}>
                    <div className="mb-3">
                        <Link to="/" className="nav-link active mt-5" aria-current="page"><h1>Shopify</h1></Link>
                        <br></br>
                        <label for="exampleInputEmail1" className="form-label">Email Id :</label>
                        <input type="text"
                            name='gmailId'
                            placeholder='Enter email'
                            value={formValues.userName}
                            onChange={(e) => handleChange(e)}
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <p className='text-danger'>{formError.gmailId}</p>    
                    </div>
                    <br></br>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password :</label>
                        <input type="password"
                            name='password'
                            placeholder='Enter Password'
                            value={formValues.password}
                            onChange={(e)=>handleChange(e)}
                            className="form-control " id="exampleInputPassword1" />
                        <p className='text-danger'>{formError.password}</p>    
                    </div>
                    <br></br>

                    <button type="submit" className="btn btn-primary mb-5">Submit</button>
                </form>
            </div>
        </>
    )
}
