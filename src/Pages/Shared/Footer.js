import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <section style={{ background: `url(${footer})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <footer className="footer p-10">
                <div className='m-auto'>
                    <span className="footer-title">Services</span>
                    <Link to='/#' className="link link-hover">Design</Link>
                    <Link to='/#' className="link link-hover">Marketing</Link>
                    <Link to='/#' className="link link-hover">Advertisement</Link>
                    <Link to='/#' className="link link-hover">Branding</Link>
                </div>
                <div className='m-auto'>
                    <span className="footer-title">Company</span>
                    <Link to='/#' className="link link-hover">About us</Link>
                    <Link to='/#' className="link link-hover">Contact</Link>
                    <Link to='/#' className="link link-hover">Jobs</Link>
                    <Link to='/#' className="link link-hover">Press kit</Link>
                </div>
                <div className='m-auto'>
                    <span className="footer-title">Legal</span>
                    <Link to='/#' className="link link-hover">Terms of use</Link>
                    <Link to='/#' className="link link-hover">Privacy policy</Link>
                    <Link to='/#' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <div className='text-center p-4'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </section>
        
    );
};

export default Footer;