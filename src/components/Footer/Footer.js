import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="mt-5 bg-dark text-center text-white">
                <div class="text-center p-3">
                    © 2022 Copyright:
                    <Link class="text-white" to="https://facebook.com/aishadhin"> Ai Shadhin</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;