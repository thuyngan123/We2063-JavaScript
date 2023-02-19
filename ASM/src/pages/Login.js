// import React from 'react'
const Login = () => {
    return `
        <div className="container">
          <div className="tw-row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <form onSubmit={handleSubmit}>
                <div className="tw-mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="tw-mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    };
    
    

        `}
export default Login
