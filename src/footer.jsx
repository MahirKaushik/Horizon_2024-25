import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6"; 
import { IoLogoGithub } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa';

function Footer() {
  const handleScrollToMainWebsite = () => {
    const mainWebsiteElement = document.getElementById('main-website');
    if (mainWebsiteElement) {
      mainWebsiteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full p-6 bg-[#B5DDC2] text-black border-t-2 border-black flex flex-col">
      <div className="hidden md:flex flex-col w-full px-8">
        {/* Footer sections for larger screens */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-xl flex-1 mb-4">
            <div className="mb-4">
              <div>VIT University</div>
              <div>Vellore, Tamil Nadu</div>
              <div>India - 632014</div>
            </div>
            <div className="underline mb-2"><a href="#">iste@vit.ac.in</a></div>
            <div className="mb-12">+91 83289 26213</div>

            {/* Visit ISTE main website link */}
            <div className="mt-4 mb-4">
              <span
                className="underline cursor-pointer"
                onClick={handleScrollToMainWebsite}
              >
                Visit ISTE main website
              </span>
            </div>

            <div className="flex flex-wrap mt-16 mb-4">Projects Events Webinars Team</div>
          </div>

          <div className="flex flex-col items-end flex-1 mt-24">
            <div className="flex mb-4">
              <a href="https://x.com/iste_vitvellore" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="mr-2 text-2xl" />
              </a>
              <a href="https://github.com/ISTE-VIT" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub className="mr-2 text-2xl" />
              </a>
              <a href="https://www.youtube.com/@ISTEVITVellore" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="mr-2 text-2xl" />
              </a>
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH4rfjJYT8f5wAAAZDuT02IW93W4blZH-hnmW1Wd8abRLvRE6WhXUrdO5NqIQdC0yrlHt_Aprd_jazXSVteTpO8ozii1cgDipOsvrRd0uiByY6lRGyp1PdIP4BpbNzdJeEtYC8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Findian-society-for-technical-education%2Fmycompany%2F" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="mr-2 text-2xl" />
              </a>
              <a href="https://www.instagram.com/iste_vit_vellore/" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram className="text-2xl" />
              </a>
            </div>
            <div className="flex justify-end mt-24 items-center">
              <span>Made with</span>
              <FaHeart className="text-[#e09088] mx-2" style={{ marginTop: '2px' }} />
              <span>by ISTE</span>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-black mt-8"></div>
      </div>
    </footer>
  );
}

export default Footer;
