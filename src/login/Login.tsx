import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Login.css'

function Login(){
    return(
        <div>
            <div className="container-fluid background">
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 d-flex justify-content-center'>
                        <div className='col-lg-5 col-sm-12'>
                            <img className="fbLogo " src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" />
                            <p>Connect with friends and the world around you on Facebook</p>
                        </div>
                    </div>
                    <div className='col me-5 ms-5 border d-flex justify-content-center bg-white'>
                        <div className='col-6 text-center'>
                        <input type="text" placeholder='Email or Phone Number' className='form-control mb-2' />
                        <input type="text" placeholder='Password' className='form-control mb-2' />
                        <div className='d-grid'><button className='btn btn-primary'>Log In</button></div>
                        <div className='container-fluid mx-auto text-center'><button className='btn'>Forgot Pasword ?</button></div>
                        <div className='container-fluid mx-auto text-center'>
                            <button className='btn btn-success'>Create New Account</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;