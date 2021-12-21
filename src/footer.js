import React from'react';

function Footer(){
  return(
  <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
  <div class="container mx-auto px-4">


    <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
      <div class="sm:w-full px-4 md:w-1/6">
        <strong>Horizon</strong>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 class="font-bold mb-2">ReactJS</h6>
        <address class="not-italic mb-4 text-sm">
          Google Maps API<br />
          Unit Tests
        </address>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 class="font-bold mb-2">Tailwind CSS</h6>
        <p class="mb-4 text-sm">Docker <strong>Nodejs</strong>.<br />
          <em>Horizon App@2021</em></p>
      </div>
      <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
        <a class="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white" href="/">Home</a>
      </div>
    </div>
  </div>
</footer>

);
}

export default Footer;
