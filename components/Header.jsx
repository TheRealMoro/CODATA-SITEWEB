import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { navbarItems } from '../lib/headerItems';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Header() {

  const router = useRouter();

  useEffect(() => {
    AOS.init();
    const header = document.querySelector('.header')
    const menu = document.querySelector('.menu')
    window.addEventListener('scroll', () => {
      if ((window.scrollY || window.pageYOffset) > 10 ) {
          header.classList.remove('bg-transparent');
          header.classList.add('bg-white');
          header.classList.remove('py-11');
          header.classList.add('py-5');
          header.classList.add('shadow');
          menu.classList.add('text-white');
          menu.classList.add('bg-gray-900');
          menu.classList.remove('text-gray-700');
          menu.classList.remove('bg-gray-100');
      }else{
        header.classList.remove('bg-white');
        header.classList.add('bg-transparent');
        header.classList.remove('py-5');
        header.classList.add('py-11');
        header.classList.remove('shadow');
        menu.classList.add('text-white');
        menu.classList.add('bg-gray-900');
        menu.classList.remove('text-white');
        menu.classList.remove('bg-gray-900');
      }
  })

},[]);
 
  const sidebar = () => {
    const sidebar1 = document.querySelector('.sidebar1')
    const sidebar2 = document.querySelector('.sidebar2')
    sidebar1.classList.remove('hidden')
    sidebar2.classList.remove('-right-full')
    sidebar2.classList.add('right-0'); 
}

  return (
    <header class=" bg-transparent w-full duration-500 ease-in-out flex items-center justify-between py-11 px-2 md:px-5 top-0 header z-20 bg-white ">
        <div class="md:flex hidden items-center mx-7">
          <img src="/fr-icon.png" alt="Codata logo" className="h-5 "/>
          <span class="cursor-pointer font-poppins hover:text-gray-500 pl-2">FR</span>
        </div>
        <nav class="md:flex hidden items-center text-md font-semibold text-gray-600"  dir="rtl">
          {
            navbarItems.map(item => (
              <div onClick = {() => router.push(item.href)} class="relative group flex flex-col items-center">
                <span class="cursor-pointer hover:text-main mx-7">{ item.title } </span>
                <span class="absolute bg-main rounded h-0.5 w-0 -bottom-2 transition-all duration-500 group-hover:w-12"></span>

                {
                  item.options != null && (
                      <div class="z-50 absolute top-9 right-5 bg-white shadow-xl rounded text-sm transition-all duration-500 text-gray-500 w-60 py-5 pr-6 opacity-0 group-hover:opacity-100">
                        <nav class="flex-col text-right space-x-10 space-y-4 hidden group-hover:flex transition-all duration-500  ">
                          {
                            item.options.map(option => (
                              <a onClick={() => router.push(option.href)} data-aos="fade-left" data-aos-duration="1500" class="hover:text-main transition-all duration-500 cursor-pointer">{option.title}</a>
                            ))
                          }
                        </nav>
                    </div>
                  )
                }
              </div>
            ))
          }
        </nav>
        {/*LOGO*/}
        <div class="md:hidden"  onClick= {sidebar}>
          <i class='menu cursor-pointer bx bx-menu px-2 text-gray-700
          py-1 text-3xl bg-gray-100 rounded-full'></i>
        </div>
        <img onClick={() => router.push('/')} src="/logos-1.png" alt="Codata logo" className="h-12 cursor-pointer"/>
    </header>
  )
}
