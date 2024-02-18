import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Login.css'

function Login(){
    return(
        <div>
            <div className="container-fluid background p-5">
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 d-flex justify-content-center mt-5'>
                        <div className='col-lg-6 col-sm-12'>
                            <img className="fbLogo " src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" />
                            <p className='mt-2 fw-bold'>Facebook helps you connect and share with people in your life.</p>
                        </div>
                    </div>
                    <div className='col-4 me-5 ms-5 border d-flex justify-content-center bg-white rounded-3'>
                        <div className='col-10 text-center'>
                        <input type="text" placeholder='Email or Phone Number' className='form-control mb-3 mt-3' />
                        <input type="text" placeholder='Password' className='form-control mb-3' />
                        <div className='d-grid'><button className='btn btn-primary'>Log In</button></div>
                        <div className='container-fluid mx-auto text-center'><button className='btn'>Forgot Pasword ?</button></div>
                        <hr />
                        <div className='container-fluid mx-auto text-center'><button className='btn btn-success mb-3'>Create New Account</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;