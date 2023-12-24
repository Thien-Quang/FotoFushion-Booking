// import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
// import React, { Suspense, useEffect, useState } from "react";
// import { getListCategoriesApi } from "../../apis/category";
// import { loyaltyProgramItem, sliderItem } from "../../utils/constant";
import banner1 from "../../assets/images/promation.jpg";
import banner2 from "../../assets/images/web-mobile.jpg";
// import subBanner1 from "../../assets/images/sub-slide1.jpg";
// import subBanner2 from "../../assets/images/sub-slide2.jpg";
import Slider from "./Slider";
import Comment from "../helples/Comment";
import { Dropdown } from "flowbite-react";
// import SliderListImage from "./SliderListImage";
import { icons } from '../../utils/icons';
import PhotoByBlogPost from "../helples/PhotoByBlogPost";

const PromotionPage = () => {
  const [promotionList, setPromotionList] = useState(
    [
      {
        id: '111',
        name: 'Nắm bắt khoảnh khắc - Tạo nên Hồi ức Vĩnh cửu - Nơi lưu trữ kỉ',
        author: 'Nameauthor',
        date: '22/12/2023',
        description: ' Content Nắm bắt khoảnh khắc - Tạo nên Hồi ức Vĩnh cửu - Nơi lưu trữ kỉ',
        status: 'Sắp diễn ra',
        type: 'Tinh thần, cộng đồng',
      },
      {
        id: '12',
        date: '22/12/2023',
        author: 'Nameauthor',
        name: 'Nắm bắt khoảnh khắc - Tạo nên Hồi ức Vĩnh cửu - Nơi lưu trữ kỉ',
        description: ' Content Nắm bắt khoảnh khắc - Tạo nên Hồi ức Vĩnh cửu - Nơi lưu trữ kỉ',
        status: 'Sắp diễn ra',
        type: 'Tinh thần, cộng đồng',
      },
    ]
  );
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      // Tăng số lượt like khi người dùng bấm vào nút like
      setLikes(likes + 1);
    } else {
      // Giảm số lượt like khi người dùng nhấn lần 2
      setLikes(likes - 1);
    }
    // Đảo ngược trạng thái liked
    setLiked(!liked);
  };
  return (
    <>
      {/* {loading && <Loading />} */}
      <div>
        <div className="mx-auto w-full flex flex-col gap-6 pb-20 mt-28">
          <div className="w-full grid grid-cols-10 gap-1 h-[150px]">
            <div className="col-span-10">
              <Slider listBanner={[banner1, banner2, banner1]} />
            </div>
          </div>
        </div>
        <div className='w-full py-10 bg-zinc-400 min-h-[1000px] mt-[420px] flex items-center justify-center text-center'>
          <div className='w-[80%]'>
            {promotionList.map((promotion) => {
              return (
                <div className='m-4' key={promotion.id}>
                  <div class="bg-white  rounded-lg shadow-lg max-w-[80%] mx-auto ">
                    <header class="p-4 flex justify-between">
                      <div class="flex" >
                        <img
                          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          class="float-left rounded-full w-10 h-10 m-1 mr-3"
                          alt='avatar'
                        />
                        <div>
                          <h3 class="text-lg font-bold">{promotion.author}</h3>
                          <p class="text-sm text-gray-600">{promotion.date}</p>
                        </div>
                      </div>

                      <div class='flex justify-end gap-1'>
                        <div class='rounded-md bg-red-500 text-white px-2 py-1 h-[35px]' >
                          <span class='font-bold bold ' >{promotion?.status}</span>
                        </div>
                        <div class='rounded-md bg-btnprimary px-2 py-1 h-[35px]' >
                          <span class='font-bold bold ' >{promotion?.type}</span>
                        </div>
                      </div>

                    </header>

                    <section >
                      <div className='flex items-center justify-center'>
                        <span className='text-2xl w-[75%] font-semibold flex items-start justify-start max-sm:text-base'>
                          {promotion.name}
                        </span>
                      </div>
                      <div>
                        <PhotoByBlogPost blog_id={promotion.id} />
                      </div>
                      <div className='flex items-center justify-center'>
                        <div className='w-[90%]  flex items-center justify-center'>
                          <div className="collapse bg-base-200">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                              Xem thêm ...
                            </div>
                            <div className="collapse-content">
                              <p style={{ whiteSpace: 'pre-line' }}>
                                {promotion.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <footer class="p-4">
                      <div className='grid grid-cols-3'>
                        <div className='flex items-center justify-center'>
                          <span className='py-2 px-6 rounded-md cursor-pointer hover:bg-blue-300 font-semibold flex items-center justify-center'
                            onClick={handleLikeClick}>
                            <span className='mr-2 '>
                              {liked ? <icons.FcLike /> : <icons.FcLikePlaceholder />}
                            </span>
                            <span>
                              {likes}  Thích
                            </span>
                          </span>
                        </div>
                        <div className='flex items-center justify-center'>
                          <div className='py-2 px-6 rounded-md cursor-pointer hover:bg-blue-300 font-semibold flex items-center justify-center'>
                            <span className='mr-2 '>
                              <icons.AiOutlineComment />
                            </span>
                            <span>Bình Luận</span>
                          </div>
                        </div>
                        <div className='flex items-center justify-center'>
                          <div className='py-2 px-6 rounded-md cursor-pointer hover:bg-blue-300 font-semibold flex items-center justify-center'>
                            <span className='mr-2 '>
                              <icons.BiShare />
                            </span>
                            <Dropdown label="Chia sẻ" inline className='bg-gray-600'>
                              <Dropdown.Item className='text-white hover:text-black'>Chia sẻ lên FaceBook</Dropdown.Item>
                              <Dropdown.Item className='text-white hover:text-black'>Chia sẻ lên Instagram</Dropdown.Item>
                              <Dropdown.Item className='text-white hover:text-black'>Chia sẻ qua messenger</Dropdown.Item>
                              <Dropdown.Item className='text-white hover:text-black'>Chia sẻ qua zalo</Dropdown.Item>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                      <div className='w-full'>
                        <Comment />
                      </div>
                    </footer>
                  </div>
                </div>
              );
            })}
          </div >
        </div>
      </div>
    </>
  );
};

export default PromotionPage;
