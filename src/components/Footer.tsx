import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-2 gap-2 bg-slate-700 text-white p-20'>
        <div>
            <h1 className='font-bold text-2xl'>Quick Links</h1>
            <ul className='flex flex-col gap-4'>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
        </div>
        <div>
            <h1 className='font-bold text-2xl'>Contact Us</h1>
            <div className='grid grid-cols-subgrid gap 4 col-span-3'>
              <div className='col-start-1'>
                <div className='font-medium py-6'>Indo-Geman Chamber of Commerce</div>
                <div>Email: <a href='sustainmarkets@indo-german.com'>sustainmarkets@indo-german.com</a></div>
                <div>Website : <a href='www.indien.ahk.de'>www.indien.ahk.de</a></div>
                <div>Website : <a href='www.sustainmarkets.in'>www.sustainmarkets.in</a></div>
              </div>
              <div className='col-start-3'>
                <h2 className='font-medium py-6'>The Delegate of German Industry and Commerce for Eastern Africa</h2>
                <div>Website: <a href='www.kenya.ahk.de'>www.kenya.ahk.de</a></div>
                <div>Email: <a href='office@kenya-ahk.co.ke'>office@kenya-ahk.co.ke</a></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer