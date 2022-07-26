import React from 'react'

export default function Properties() {
  return (
    <div class="flex flex-col  md:flex-row items-center py-10  container mx-auto space-x-5 justify-evenly bg-white" >
        <section class="w-full rounded-lg flex flex-col py-10 items-center  space-y-4" >
            <img src="/shield.png" class = "h-44 object-contain" alt="" />
            <h1 class = "text-xl font-semibold text-gray-700" >نتائج فوق المتوقع</h1>
            <p class="text-base h-20 text-gray-700 text-center w-3/4" >نحرص على العمل مع زبناءنا بكل احترافية لكي نضمن المردودية.</p>
        </section>
        <section class="relative py-5 px-5 bg-contain flex  w-full" >
            <div class="bg-Propertypattern absolute  bg-no-repeat bg-right-bottom h-full w-full right-0 top-0 bg-contain" ></div>
            <section class = "bg-white  z-10 rounded-lg flex flex-col shadow-2xl py-16 items-center space-y-4" >
                <img src="/chat.png" class = "h-44 object-contain" alt="" />
                <h1 class = "text-xl font-semibold text-gray-700"> تواصل فعال مع العملاء</h1>
                <p class="text-base h-20 text-gray-700 text-center w-3/4" >نرحب دائما بأراءكم وإستشاراتكم، والأهم أننا نمنحك جدول زمني لتنفيد المتفق عليه للوصول إلى النتيجة المطلوبة في الوقت المحدد..</p>
            </section>
            <div class="bg-white absolute  bg-no-repeat bg-left-top left-0 bottom-0" ></div>
                {/* <img src="/pattern-1.png" class="absolute -top-14 -left-10 h-3/6 opacity-40 " alt="" />
                <img src="/pattern-2.png" class="absolute -bottom-10 -right-10 h-2/3 opacity-40 " alt="" /> */}
        </section>
        <section class="w-full  flex flex-col py-10 items-center space-y-4" >
            <img src="/bag.png" class = "h-44 object-contain" alt="" />
            <h1 class = "text-xl font-semibold text-gray-700" >نتائج فوق المتوقع</h1>
            <p class="text-base h-20 text-gray-700 text-center w-3/4" >نحن نحب ما نقوم به ، ولا نرضى إلا بنتائج عالية الجودة لأن هدفنا فى النهاية إنجاح مشروعك و الإرتقاء بمستوى الخدمات التى تقدمها الوكالة..</p>
        </section>
       
        
        
    </div>
  )
}
