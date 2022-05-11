import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <section style={{ background: `url(${footer})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <footer class="footer p-10">
                <div className='m-auto'>
                    <span class="footer-title">Services</span>
                    <Link to='/#' class="link link-hover">Design</Link>
                    <Link to='/#' class="link link-hover">Marketing</Link>
                    <Link to='/#' class="link link-hover">Advertisement</Link>
                    <Link to='/#' class="link link-hover">Branding</Link>
                </div>
                <div className='m-auto'>
                    <span class="footer-title">Company</span>
                    <Link to='/#' class="link link-hover">About us</Link>
                    <Link to='/#' class="link link-hover">Contact</Link>
                    <Link to='/#' class="link link-hover">Jobs</Link>
                    <Link to='/#' class="link link-hover">Press kit</Link>
                </div>
                <div className='m-auto'>
                    <span class="footer-title">Legal</span>
                    <Link to='/#' class="link link-hover">Terms of use</Link>
                    <Link to='/#' class="link link-hover">Privacy policy</Link>
                    <Link to='/#' class="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <div className='text-center p-4'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </section>
        
    );
};

export default Footer;