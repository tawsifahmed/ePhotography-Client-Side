import React from 'react';
import logo from '../../../../src/logo.svg'
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <CDBFooter className="shadow bg-dark text-white mt-5">
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap"
                style={{ width: '80%' }}
            >
                <CDBBox display="flex" alignItems="center">
                    <a href="/" className="d-flex align-items-center p-0 text-dark">
                        <img
                            alt="logo"
                            src={logo}
                            width="100px"
                        />
                        <span className="ml-4 h5 mb-0 font-weight-bold text-white">e<span className='text-danger fst-italic'>Photography</span></span>
                    </a>
                </CDBBox>
                <CDBBox>
                    <small className="ml-2">&copy; ePhotography, 2022. All rights reserved.</small>
                </CDBBox>
                <CDBBox display="flex">
                    <a className='text-light' href='https://facebook.com/' target="_blank"><FaFacebook className='fs-2'>

                    </FaFacebook></a>
                    <a className='text-light' href='https://twitter.com/' target="_blank"><FaTwitter className='fs-2 mx-3'></FaTwitter></a>

                    <a className='text-light' href='https://instagram.com/' target="_blank"><FaInstagram className='fs-2'></FaInstagram></a>

                </CDBBox>
            </CDBBox>
        </CDBFooter>
    );
};

export default Footer;