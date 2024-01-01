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
import { DoubleRightOutlined } from '@ant-design/icons';
import CardPromotion from "../Card/CardPromotion";

const PromotionPage = () => {
  const [promotionList, setPromotionList] = useState(
    [
      {
        id: '111',
        name: 'Nắm bát khoảnh khắc - Tạo nên Hồi ức Vĩnh cửu - Nơi lưu trữ kỉ niệm',
        author: 'Nameauthor',
        date: '22/12/2023',
        description: 'Người dùng được miễn phí 500 MB data trong 30 ngày, tương đương 15 GB dữ liệu mỗi tháng, với cước phí 70.000 đồng khi đăng ký gói cước Z70. ',
        status: 'Sắp diễn ra',
        type: 'Tinh thần, cộng đồng',
      },
      {
        id: '12',
        date: '22/12/2023',
        author: 'Nameauthor',
        name: 'Nắm bắt khoảnh khắc - Tạo nên Hồi ức Vĩnh cửu - Nơi lưu trữ kỉ',
        description: 'Nhà mạng MobiFone tung gói cước 2MF150 kèm nhiều ưu đãi cho thuê bao mới như miễn phí 200 phút gọi ngoại mạng, không cước thuê bao tháng. ',
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
      {
        id: '12',
        date: '22/12/2023',
        author: 'Nameauthor',
        name: 'Nắm bắt khoảnh khắc - Tạo nên Hồi ức Vĩnh cửu - Nơi lưu trữ kỉ',
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
      <>
        <div className=" mx-auto w-3/4 flex flex-col gap-6 pb-20 mt-28">
          <div className="w-full grid grid-cols-10 gap-1 h-[150px]">
            <div className="col-span-10">
              <Slider listBanner={[banner1, banner2, banner1]} />
            </div>
          </div>
        </div>
        <div class='mt-[320px] w-full flex justify-center'>
          <div class='py-10 flex flex-col w-3/4 justify-center'>
            <h1 class='text-6xl text-btnprimary bold' >Thông tin khuyến mãi</h1>
            {/* blogList */}
            <div class="w-full mt-10 flex flex-col gap-10">
              {promotionList?.map((item) => (
                <CardPromotion
                  id={item?.id}
                  // imageLink={item?.imageLink}
                  title={item?.name}
                  date={item?.date}
                  description={item?.description}
                  type={item?.type}
                  status={item?.status}
                  author={item?.author}
                />
              ))}
            </div>

            {/* paging */}
            <div class='cursor-pointer w-full mt-10 h-10 flex items-center justify-center text-btnprimary'>
              <div class=' h-10 flex flex-row gap-4'>
                <div class='w-20 border-1 border-solid border-2  border-btnprimary flex items-center justify-center '>Page 1/3</div>
                <div class='flex gap-4'>
                  <div class='w-10 border-1 flex items-center justify-center '>1</div>
                  <div class='w-10 border-1 border-solid border-2  border-btnprimary flex items-center justify-center '>2</div>
                  <div class='w-10 border-1 border-solid border-2  border-btnprimary flex items-center justify-center '>3</div>
                  <div class='w-10 border-1 border-solid border-2  border-btnprimary flex items-center justify-center '>3</div>
                  <div class='w-10 border-1 border-solid border-2  border-btnprimary flex items-center justify-center '>  <DoubleRightOutlined /></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </>
    </>
  );
};

export default PromotionPage;
