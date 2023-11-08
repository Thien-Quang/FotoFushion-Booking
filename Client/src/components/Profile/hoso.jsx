
import React from 'react'

const hoso = () => {
  return (
    <div className='max-w-4xl max-h-2xl bg-white text-black rounded-xl flex items-center justify-center'>
      <div className='w-3/4 '>
        <span className='m-4 font-dancing text-2xl p-4 border-b border-black flex items-center justify-center'>
          HỒ SƠ CỦA TÔI
        </span>
        <div className='flex items-center justify-center'>
          <div className='w-[80%]'>
            <div className='m-4'>
              <span className='text-blue-400 text-base font-sans font-semibold m-4'>
                Tên hiện thị
              </span>
              <input className='w-full h-10 border mt-3 border-gray-500 rounded-2xl pl-4' type="text" placeholder='Nhập tên của bạn' />
            </div>
            <div className='m-4'>
              <span className='text-blue-400 text-base font-sans font-semibold  m-4'>
                Email
              </span>
              <input className='w-full h-10 border mt-3 border-gray-500 rounded-2xl pl-4' type="text" placeholder='Nhập email của bạn ' />
            </div>
            <div className='m-4'>
              <span className='text-blue-400 text-base font-sans font-semibold m-4'>
                Số điện thoại
              </span>
              <input className='w-full h-10 border mt-3 border-gray-500 rounded-2xl pl-4' type="text" placeholder='Nhập số điện thoại của bạn' />
            </div>
            <div className='flex items-center justify-center'>
              <button className="bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl m-6">
                SAVE
              </button>
            </div>
          </div>

        </div>

      </div>
      <div className='w-1/4 '>
        <div className='flex items-center justify-center'>
          <div className='w-[160px] h-[160px] bg-orange-500 rounded-full flex items-center justify-center'>

          </div>
        </div>
        <div className='flex items-center justify-center'>
          <button className="bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl m-6 text-sm">
            Chọn hình ảnh
          </button>
        </div>
      </div>

    </div>
  )
}

export default hoso

