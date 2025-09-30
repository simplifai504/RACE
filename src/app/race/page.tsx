import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

const page = () => {
  return (
    <div className='bg-green-800 h-screen flex flex-col text-white'>
      <nav className='flex justify-between p-2'>
        <Link href='/'>
          <Image width={80} height={80} src="/ppraceLogo.png" alt="" />
        </Link>
        <div className='flex gap-4'>
          <div className='flex flex-col items-center'>
            <p>Race</p>
            <div className='bg-green-900 rounded-full py-1 px-10'>320</div>
          </div>
          <div className='flex flex-col items-center'>
            <p>Balance</p>
            <div className='bg-green-900 rounded-full py-1 px-10'>300.00 USD</div>
          </div>
        </div>
      </nav>
      <div className='grid grid-cols-5 flex-1 gap-2'>
        <section className='bg-green-700 p-4 flex flex-col gap-2'>
          <div className='flex items-center gap-2 bg-green-600 rounded-full w-fit p-1'>
            <button className='px-8 py-2 bg-green-500 rounded-full'>Bet</button>
            <button className='px-1'> My bet</button>
          </div>
          <div>
            <table className='w-full border border-white border-separate rounded-md'>
              <thead>
                <tr>
                  <th className='border-b border-white'>User</th>
                  <th className='border-b border-white'>Bet</th>
                  <th className='border-b border-white'>USD</th>
                </tr>
              </thead>
              <tbody className='text-center border border-white rounded-md'>
                <tr>
                  <td>User....01</td>
                  <td>800.00</td>
                  <td>220.45</td>
                </tr>
                <tr>
                  <td>User....02</td>
                  <td>1452.00</td>
                  <td>220.00</td>
                </tr>
                <tr>
                  <td>User....03</td>
                  <td>103.00</td>
                  <td>421.11</td>
                </tr>
                <tr>
                  <td>User....04</td>
                  <td>532.00</td>
                  <td>131.02</td>
                </tr>
                <tr>
                  <td>User....05</td>
                  <td>943.00</td>
                  <td>323.01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className='flex flex-col gap-2 col-span-3 bg-green-800'>
          <div className='p-2 rounded-md flex justify-center items-center bg-black'>
            <div className='rounded-xl overflow-hidden'>
              
              <iframe src="https://player.twitch.tv/?channel=superpeperace&parent=www.superpeperace.vip" allowFullScreen={true} height="567" width="930"></iframe>
            </div>
          </div>
          <div className='flex-1 grid grid-cols-3 bg-green-700 p-2 rounded-md'>
            <div className='col-span-2 gap-2 grid grid-cols-4 p-1 bg-green-800 rounded-md'>
              <div className='hover:bg-green-500 rounded-md ease-in-out duration-300 cursor-pointer flex justify-center items-center'>
                <img src="./p1.png" alt="" className='' />
              </div>
              <div className='hover:bg-green-500 rounded-md ease-in-out duration-300 cursor-pointer flex justify-center items-center'>
                <img src="./p2.png" alt="" className='' />
              </div>
              <div className='hover:bg-green-500 rounded-md ease-in-out duration-300 cursor-pointer flex justify-center items-center'>
                <img src="./p3.png" alt="" className='' />
              </div>
              <div className='hover:bg-green-500 rounded-md ease-in-out duration-300 cursor-pointer flex justify-center items-center'>
                <img src="./p4.png" alt="" className='' />
              </div>
            </div>
            <div className='bg-green-700 rounded-2xl p-2 flex flex-col items-center gap-1'>
              <div className='flex items-center gap-2 bg-green-600 rounded-full w-fit p-1'>
                <button className='px-8 py-1 bg-green-500 rounded-full'>Bet</button>
                <button className='pr-2'> Automatic</button>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <div className='grid grid-cols-4 gap-1'>
                  <div className='col-span-4 flex items-center gap-3 text-xl font-bold text-white'>
                    <FaCirclePlus></FaCirclePlus>
                    1.00
                    <FaCircleMinus></FaCircleMinus>
                  </div>
                  <div className='col-span-2 bg-green-800 flex justify-center rounded-full'>1</div>
                  <div className='col-span-2 bg-green-800 flex justify-center rounded-full'>2</div>
                  <div className='col-span-2 bg-green-800 flex justify-center rounded-full'>5</div>
                  <div className='col-span-2 bg-green-800 flex justify-center rounded-full'>10</div>
                </div>
                <button className='bg-green-500 font-bold px-8 rounded-full text-center h-fit border border-green-200'>
                  <p>BET</p>
                  <p>1.00 <span className='text-xs'>USD</span> </p>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-green-700 flex justify-center items-center'>
          <iframe
            id="chat_embed"
            src="https://www.twitch.tv/embed/superpeperace/chat?parent=www.superpeperace.vip"
            height="820"
            width="350">
          </iframe>
        </section>
      </div>
    </div>
  )
}

export default page
