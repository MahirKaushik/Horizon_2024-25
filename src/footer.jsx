import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6"; 
import { IoLogoGithub } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full h-[970px] p-[42px_36px_0px_36px] gap-0 border-b-2 border-black bg-[#B5DDC2] text-black flex justify-between items-center fixed bottom-0 left-0">
      <div className="text-xl flex-1">
        <div className="mb-4">
          <div>VIT University</div>
          <div>Vellore, Tamil Nadu</div>
          <div>India - 632014</div>
        </div>
        <div className="underline mb-2"><a href="#">iste@vit.ac.in</a></div>
        <div className="mb-4">+91 83289 26213</div>
        <div className="flex flex-wrap justify-end mb-4">
          <a href="https://x.com/iste_vitvellore" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="mr-2 text-2xl leading-none" />
          </a>
          <a href="https://github.com/ISTE-VIT" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub className="mr-2 text-2xl leading-none" />
          </a>
          <a href="https://www.youtube.com/@ISTEVITVellore" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="mr-2 text-2xl leading-none" />
          </a>
          <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH4rfjJYT8f5wAAAZDuT02IW93W4blZH-hnmW1Wd8abRLvRE6WhXUrdO5NqIQdC0yrlHt_Aprd_jazXSVteTpO8ozii1cgDipOsvrRd0uiByY6lRGyp1PdIP4BpbNzdJeEtYC8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Findian-society-for-technical-education%2Fmycompany%2F" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="mr-2 text-2xl leading-none" />
          </a>
          <a href="https://www.instagram.com/iste_vit_vellore/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className="text-2xl leading-none" />
          </a>
        </div>
        <div className="text-xl flex-1 text-left mb-4">
          <a href="#" className="underline">Visit ISTE Main Website</a>
        </div>
        <div className="mt-1 mb-4">Projects    Events    Webinars    Team</div>
        <div className="flex justify-end mb-4">
          Made with <FaHeart className="inline-block align-middle text-[#e09088] relative top-2 ml-2 mr-2" /> by ISTE
        </div>
        <div className="w-full h-0.5 bg-black"></div>
      </div>
      <div className="flex justify-center mb-4">
          <img src="image.png" alt="ISTE" className="w-20 h-20" />
        </div>
    </footer>
  );
}

export default Footer;