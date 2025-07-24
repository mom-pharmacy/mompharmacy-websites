import React from 'react'

function Footer() {
  return (
    <div className='bg-[#00A79B] flex justify-between items-center py-5 px-[96px]'>
        <div className=''>
            <img src="/Home/logo.jpg" alt="mompharmacy logo" />
            <h2 className='text-white font-bold text-[30px ] text-center'>pharmacy</h2>
        </div>
        <div>
            <ul className='text-white text-[20px]'>
                <li><button className='cursor-pointer'>home</button></li>
                <li><button className='cursor-pointer'>about us</button></li>
                <li><button className='cursor-pointer'>our team</button></li>
                <li><button className='cursor-pointer'>careers</button></li>
                <li><button className='cursor-pointer'>investors</button></li>
                <li><button className='cursor-pointer'>contact us</button></li>
            </ul>
    </div>
        <div>
            <ul className='text-white text-[20px]'>
                <li><button className='cursor-pointer'>terms & conditions</button></li>
                <li><button className='cursor-pointer'>privacy policy</button></li>
            </ul>
        </div>
        <div className='flex  gap-6'>
          <img src="/Home/faceBook.jpg" alt="facebook logo" />
          <img src="/Home/linkedin.jpg" alt="facebook logo" />
          <img src="/Home/instagram.jpg" alt="facebook logo" />
          </div><img src="/Home/footerPillman.jpg" alt="footerpillman " />
        
    </div>
  )
}

export default Footer