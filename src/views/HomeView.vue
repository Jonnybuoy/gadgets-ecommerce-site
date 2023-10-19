<template>
  <div class="main-cont">
    <div class="second-cont flex justify-stretch">
      <div class="category-cont border-2 rounded-md w-[15%] p-4 bg-white">
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">New Deals</a>
        </div>
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">Refurbished Deals</a>
        </div>
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">Laptops</a>
        </div>
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">Desktops</a>
        </div>
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">Accessories</a>
        </div>
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">Printers & Scanners</a>
        </div>
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">Apple Products</a>
        </div>
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">Gaming Accessories</a>
        </div>
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">Workstation & Servers</a>
        </div>
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">POS Systems</a>
        </div>
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">Drivers & Storage</a>
        </div>
        <div class="border-b border-gray-300 p-2 text-lg text-slate-800">
          <a href="">Utilities, Antidrivers & Security</a>
        </div>
      </div>

      <div class="sliding-slider bg-white w-full ml-6 h-[80%]">
        <div class="flex justify-evenly p-8 items-center">
          <div>
            <h1 class="font-bold text-5xl uppercase text-blue-600">
              HP Laptop 15-dw3208nia
            </h1>
            <p class="mt-2">
              Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost
              Technology, 6 MB L3 cache, 2 cores)
            </p>
            <p>8 GB DDR4-2666 SDRAM (1 x 8 GB)</p>
            <button class="bg-blue-600 rounded-full text-white p-4 mt-10 w-40">
              Shop Now
            </button>
          </div>
          <div>
            <img
              class="w-50 h-80 object-cover"
              src="src/img/hp-laptop.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Top categories -->
    <div class="top-categories mt-2 p-4">
        <div class="border-b-2 border-gray-200 p-2">
            <h2 class="font-bold text-blue-600 text-2xl">Top Categories</h2>
        </div>

        <div class="flex justify-around">
            <div class="relative p-2 mt-4">
                <div
                class="p-2 rounded-full overflow-hidden w-full h-50 border-4 border-gray-100 bg-blue-600"
                >
                    <img
                        class="object-cover w-full h-full rounded-full"
                        src="src/img/hp-laptop.jpeg"
                        alt="Computer Image"
                    />
                </div>
                <p class="text-center uppercase font-bold text-sm">Computers & Accessories</p>
            </div>

            <div class="relative p-2 mt-4">
                <div
                class="p-2 rounded-full overflow-hidden w-full h-50 border-4 border-gray-100 bg-blue-600"
                >
                    <img
                        class="object-cover w-full h-full rounded-full"
                        src="src/img/hp-laptop.jpeg"
                        alt="Computer Image"
                    />
                </div>
                <p class="text-center uppercase font-bold text-sm">Computers & Accessories</p>
            </div>

            <div class="relative p-2 mt-4">
                <div
                class="p-2 rounded-full overflow-hidden w-full h-50 border-4 border-gray-100 bg-blue-600"
                >
                    <img
                        class="object-cover w-full h-full rounded-full"
                        src="src/img/hp-laptop.jpeg"
                        alt="Computer Image"
                    />
                </div>
                <p class="text-center uppercase font-bold text-sm">Computers & Accessories</p>
            </div>

            <div class="relative p-2 mt-4">
                <div
                class="p-2 rounded-full overflow-hidden w-full h-50 border-4 border-gray-100 bg-blue-600"
                >
                    <img
                        class="object-cover w-full h-full rounded-full"
                        src="src/img/hp-laptop.jpeg"
                        alt="Computer Image"
                    />
                </div>
                <p class="text-center uppercase font-bold text-sm">Computers & Accessories</p>
            </div>

            <div class="relative p-2 mt-4">
                <div
                class="p-2 rounded-full overflow-hidden w-full h-50 border-4 border-gray-100 bg-blue-600"
                >
                    <img
                        class="object-cover w-full h-full rounded-full"
                        src="src/img/hp-laptop.jpeg"
                        alt="Computer Image"
                    />
                </div>
                <p class="text-center uppercase font-bold text-sm">Computers & Accessories</p>
            </div>

        </div>
        
    </div>

    <!-- Best Laptop Deals -->
    <div class="laptop-deals mt-2 p-4">
      <div class="border-b-2 border-gray-200 p-2">
        <h2 class="font-bold text-blue-600 text-2xl">Best Laptop Deals</h2>
      </div>

      <!-- Cards -->
      <div class="mt-2 p-4 grid grid-cols-5 gap-5">
        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-xl">
          <div class="p-4 bg-white">
            <img src="src/img/hp-laptop.jpeg" alt="" class="w-full h-32 sm:h-48 object-cover">
          </div>
  
          <div class="mt-4 flex flex-col items-center">
            <span class="text-lg font-sans text-center">HP Laptop 15-dw3208nia Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost
              Technology, 6 MB L3 cache, 2 cores)</span>
            <span class="block font-bold text-lg text-blue-600 mt-2">KES 25000</span>

            <div>
              <button class="bg-blue-600 rounded p-2 text-white text-base mb-4 mt-2 uppercase">Buy Now</button>
            </div>
          </div>

          <div class="rounded-full p-1.5 bg-blue-500 uppercase font-bold text-white absolute top-0 text-sm flex justify-between">
            <svg class="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sale</span>
          </div>
          
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-xl">
          <div class="p-4 bg-white">
            <img src="src/img/hp-laptop.jpeg" alt="" class="w-full h-32 sm:h-48 object-cover">
          </div>
  
          <div class="mt-4 flex flex-col items-center">
            <span class="text-lg font-sans text-center">HP Laptop 15-dw3208nia Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost
              Technology, 6 MB L3 cache, 2 cores)</span>
            <span class="block font-bold text-lg text-blue-600 mt-2">KES 25000</span>

            <div>
              <button class="bg-blue-600 rounded p-2 text-white text-base mb-4 mt-2 uppercase">Buy Now</button>
            </div>
          </div>

          <div class="rounded-full p-1.5 bg-blue-500 uppercase font-bold text-white absolute top-0 text-sm flex justify-between">
            <svg class="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sale</span>
          </div>
          
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-xl">
          <div class="p-4 bg-white">
            <img src="src/img/hp-laptop.jpeg" alt="" class="w-full h-32 sm:h-48 object-cover">
          </div>
  
          <div class="mt-4 flex flex-col items-center">
            <span class="text-lg font-sans text-center">HP Laptop 15-dw3208nia Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost
              Technology, 6 MB L3 cache, 2 cores)</span>
            <span class="block font-bold text-lg text-blue-600 mt-2">KES 25000</span>

            <div>
              <button class="bg-blue-600 rounded p-2 text-white text-base mb-4 mt-2 uppercase">Buy Now</button>
            </div>
          </div>

          <div class="rounded-full p-1.5 bg-blue-500 uppercase font-bold text-white absolute top-0 text-sm flex justify-between">
            <svg class="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sale</span>
          </div>
          
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-xl">
          <div class="p-4 bg-white">
            <img src="src/img/hp-laptop.jpeg" alt="" class="w-full h-32 sm:h-48 object-cover">
          </div>
  
          <div class="mt-4 flex flex-col items-center">
            <span class="text-lg font-sans text-center">HP Laptop 15-dw3208nia Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost
              Technology, 6 MB L3 cache, 2 cores)</span>
            <span class="block font-bold text-lg text-blue-600 mt-2">KES 25000</span>

            <div>
              <button class="bg-blue-600 rounded p-2 text-white text-base mb-4 mt-2 uppercase">Buy Now</button>
            </div>
          </div>

          <div class="rounded-full p-1.5 bg-blue-500 uppercase font-bold text-white absolute top-0 text-sm flex justify-between">
            <svg class="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sale</span>
          </div>
          
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-xl">
          <div class="p-4 bg-white">
            <img src="src/img/hp-laptop.jpeg" alt="" class="w-full h-32 sm:h-48 object-cover">
          </div>
  
          <div class="mt-4 flex flex-col items-center">
            <span class="text-lg font-sans text-center">HP Laptop 15-dw3208nia Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost
              Technology, 6 MB L3 cache, 2 cores)</span>
            <span class="block font-bold text-lg text-blue-600 mt-2">KES 25000</span>

            <div>
              <button class="bg-blue-600 rounded p-2 text-white text-base mb-4 mt-2 uppercase">Buy Now</button>
            </div>
          </div>

          <div class="rounded-full p-1.5 bg-blue-500 uppercase font-bold text-white absolute top-0 text-sm flex justify-between">
            <svg class="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sale</span>
          </div>
          
        </div>
        
      </div>

      <!-- Best Sellers -->
      <div class="best-sellers mt-10 border-t-2 border-gray-200">
        <div class="border-b-2 border-gray-200 mt-4 p-2">
          <h2 class="font-bold text-blue-600 text-2xl">Best Sellers</h2>

        </div>

        <div class="mt-2 p-4 grid grid-cols-5 gap-5">
        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-xl">
          <div class="p-4 bg-white">
            <img src="src/img/hp-laptop.jpeg" alt="" class="w-full h-32 sm:h-48 object-cover">
          </div>
  
          <div class="mt-4 flex flex-col items-center">
            <span class="text-lg font-sans text-center">HP Laptop 15-dw3208nia Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost
              Technology, 6 MB L3 cache, 2 cores)</span>
            <span class="block font-bold text-lg text-blue-600 mt-2">KES 25000</span>

            <div>
              <button class="bg-blue-600 rounded p-2 text-white text-base mb-4 mt-2 uppercase">Buy Now</button>
            </div>
          </div>

          <div class="rounded-full p-1.5 bg-blue-500 uppercase font-bold text-white absolute top-0 text-sm flex justify-between">
            <svg class="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sale</span>
          </div>
          
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-xl">
          <div class="p-4 bg-white">
            <img src="src/img/hp-laptop.jpeg" alt="" class="w-full h-32 sm:h-48 object-cover">
          </div>
  
          <div class="mt-4 flex flex-col items-center">
            <span class="text-lg font-sans text-center">HP Laptop 15-dw3208nia Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost
              Technology, 6 MB L3 cache, 2 cores)</span>
            <span class="block font-bold text-lg text-blue-600 mt-2">KES 25000</span>

            <div>
              <button class="bg-blue-600 rounded p-2 text-white text-base mb-4 mt-2 uppercase">Buy Now</button>
            </div>
          </div>

          <div class="rounded-full p-1.5 bg-blue-500 uppercase font-bold text-white absolute top-0 text-sm flex justify-between">
            <svg class="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sale</span>
          </div>
          
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-xl">
          <div class="p-4 bg-white">
            <img src="src/img/hp-laptop.jpeg" alt="" class="w-full h-32 sm:h-48 object-cover">
          </div>
  
          <div class="mt-4 flex flex-col items-center">
            <span class="text-lg font-sans text-center">HP Laptop 15-dw3208nia Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost
              Technology, 6 MB L3 cache, 2 cores)</span>
            <span class="block font-bold text-lg text-blue-600 mt-2">KES 25000</span>

            <div>
              <button class="bg-blue-600 rounded p-2 text-white text-base mb-4 mt-2 uppercase">Buy Now</button>
            </div>
          </div>

          <div class="rounded-full p-1.5 bg-blue-500 uppercase font-bold text-white absolute top-0 text-sm flex justify-between">
            <svg class="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sale</span>
          </div>
          
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-xl">
          <div class="p-4 bg-white">
            <img src="src/img/hp-laptop.jpeg" alt="" class="w-full h-32 sm:h-48 object-cover">
          </div>
  
          <div class="mt-4 flex flex-col items-center">
            <span class="text-lg font-sans text-center">HP Laptop 15-dw3208nia Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost
              Technology, 6 MB L3 cache, 2 cores)</span>
            <span class="block font-bold text-lg text-blue-600 mt-2">KES 25000</span>

            <div>
              <button class="bg-blue-600 rounded p-2 text-white text-base mb-4 mt-2 uppercase">Buy Now</button>
            </div>
          </div>

          <div class="rounded-full p-1.5 bg-blue-500 uppercase font-bold text-white absolute top-0 text-sm flex justify-between">
            <svg class="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sale</span>
          </div>
          
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md relative hover:shadow-xl">
          <div class="p-4 bg-white">
            <img src="src/img/hp-laptop.jpeg" alt="" class="w-full h-32 sm:h-48 object-cover">
          </div>
  
          <div class="mt-4 flex flex-col items-center">
            <span class="text-lg font-sans text-center">HP Laptop 15-dw3208nia Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost
              Technology, 6 MB L3 cache, 2 cores)</span>
            <span class="block font-bold text-lg text-blue-600 mt-2">KES 25000</span>

            <div>
              <button class="bg-blue-600 rounded p-2 text-white text-base mb-4 mt-2 uppercase">Buy Now</button>
            </div>
          </div>

          <div class="rounded-full p-1.5 bg-blue-500 uppercase font-bold text-white absolute top-0 text-sm flex justify-between">
            <svg class="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Sale</span>
          </div>
          
        </div>
        
      </div>


      </div>
      
      

    </div>
  </div>
</template>
<script></script>
