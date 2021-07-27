import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"
// import 'mdb-ui-kit/css/mdb.min.css';
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module

const Footer = (props) => {
    return (
        <>

            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        {/* <!-- Footer Location--> */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                Bihar Supaul 852214
                                <br />
                                Bishunia, Koriapatti Supaul
                            </p>
                        </div>
                        {/* <!-- Footer Social Icons--> */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" target="_blank" href="https://www.facebook.com/GudduKumar19"><i class="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" target="_blank" href="https://twitter.com/codewithguddu"><i className="fab fa-fw fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>

                        </div>
                        {/* <!-- Footer About Text--> */}
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Me </h4>
                            <p className="lead mb-0">
                                I am full stack developer entusgited person.
                                also like coding and designing.


                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright &copy; Your Website 2021</small></div>
            </div>

        </>

    )
}

export default Footer
