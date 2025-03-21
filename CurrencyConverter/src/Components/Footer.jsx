import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.png"


import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border border-black rounded-lg  backdrop-blur-sm bg-black/40 text-white p-4 flex flex-col md:flex-row justify-between items-center w-full sticky bottom-0">
            {/* Social Media Icons */}
            <div className="flex space-x-8 mb-2 md:mb-0">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-300"
                >
                    <img
                        src={Logo}
                        alt="My Logo"
                        className="h-6 hover:filter hover:brightness-50"
                    />
                </a>

                <a
                    href="www.linkedin.com/in/aniketyadav05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition duration-300"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="https://github.com/Aniketyadav05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition duration-300"
                >
                    <FaGithub size={24} />

                </a>


                <a
                    href="https://x.com/AniketYadav05_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition duration-300"
                >
                    <FontAwesomeIcon icon={faXTwitter} className="h-6"/>
                </a>
            </div>

            {/* Contact List */}
            <div>
                <p className="font-semibold">Contact ME</p>
                <ul className="text-sm mt-1 space-y-1 text-center md:text-left">
                    <li>Email: yadavaniket7611@gmail.com</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
