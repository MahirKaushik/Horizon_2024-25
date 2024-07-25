import React from 'react';

function Footer() {
  return (
    <footer
      className="w-[1440px] h-[970px] top-[8978px] p-[42px_36px_0px_36px] gap-0 border-b-2 border-black opacity-100 bg-[#B5DDC2] text-black flex justify-between items-center"
    >
      <div className="text-sm flex-1">
        <div>VIT University</div>
        <div>Vellore, Tamil Nadu</div>
        <div>India - 632014</div>
        <div>iste@vit.ac.in</div>
        <div>+91 83289 26213</div>
      </div>
      <div className="flex-shrink-0">
        <a
          href="https://vit.ac.in/index.html"
          className="hover:text-gray-400 transition duration-300 ease-in-out"
        >
          Visit ISTE Main Website
        </a>
      </div>
    </footer>
  );
}

export default Footer;