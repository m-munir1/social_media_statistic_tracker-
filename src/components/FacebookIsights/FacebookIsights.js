import React from 'react'
import '../../App.css';
import dummy_img from '../../asstets/images/dummy.jpg';
import Modals from '../../common/Modals/Modals';

const FacebookIsights = () => {
    return (
        <>
            <Modals/>
            <div className='section bg-light' id='facebook_insights'>
                <div className='container'>
                    <div className='row'>
                        <div className='cocl-12'>
                            <div>
                                <div className='section_heading'>
                                    <h2>
                                        Facebook Insights
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='uploaded_imgaes'>
                                <figure className="hover-img">
                                    <img src={dummy_img} className="img-fluid" />
                                    <figcaption>
                                        <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                                        <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='uploaded_imgaes'>
                                <figure className="hover-img">
                                    <img src={dummy_img} className="img-fluid" />
                                    <figcaption>
                                        <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                                        <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='uploaded_imgaes'>
                                <figure className="hover-img">
                                    <img src={dummy_img} className="img-fluid" />
                                    <figcaption>
                                        <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                                        <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='uploaded_imgaes'>
                                <figure className="hover-img">
                                    <img src={dummy_img} className="img-fluid" />
                                    <figcaption>
                                        <button type='button' className='btn btn-danger btn-sm rounded-pill mb-4'><i className="fa-solid fa-trash me-2"></i>Delete</button>
                                        <button type='button' className='btn btn-primary btn-sm rounded-pill'><i className="fa-solid fa-arrow-up-right-from-square me-2"></i>Open</button>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='text-center mb-5'>
                                <button type='button' className='btn btn-secondary rounded-pill me-3' data-bs-toggle="modal" data-bs-target="#uploadimage"><i className="fa-solid fa-plus me-2"></i> Add Images</button>
                                <button type='button' className='btn btn-primary rounded-pill'><i className="fa-brands fa-facebook-f me-2"></i> Login With FaceBook</button>
                            </div>
                        </div>
                        <div className='col-12 mt-5'>
                            <div>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <h3 className='mb-3'>Facebook Data</h3>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <div className='text-end'>
                                            <button className='btn btn-secondary rounded-pill' type='button'>
                                                Export <i className="fa-solid fa-file-arrow-down ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <table className="table table-striped table-hover">
                                    <tbody className='text-center'>
                                        <tr>
                                            <td className='w-50'><b>Action on Page</b></td>
                                            <td className='w-50'>165</td>
                                        </tr>
                                        <tr>
                                            <td><b>Page Views</b></td>
                                            <td>3482</td>
                                        </tr>
                                        <tr>
                                            <td><b>Likes</b></td>
                                            <td>78</td>
                                        </tr>
                                        <tr>
                                            <td><b>Post Reach</b></td>
                                            <td>983</td>
                                        </tr>
                                        <tr>
                                            <td><b>Post Interaction</b></td>
                                            <td>8577</td>
                                        </tr>
                                        <tr>
                                            <td><b>Page Followers</b></td>
                                            <td>297</td>
                                        </tr>
                                        <tr>
                                            <td><b>Overview ad Center</b></td>
                                            <td>6725</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacebookIsights