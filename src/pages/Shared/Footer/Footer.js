import React from 'react';
import logo from '../../../../src/logo.svg'
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';


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
                        <span className="ml-4 h5 mb-0 font-weight-bold text-white">ePhotography</span>
                    </a>
                </CDBBox>
                <CDBBox>
                    <small className="ml-2">&copy; ePhotography, 2022. All rights reserved.</small>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </CDBFooter>
    );
};

export default Footer;