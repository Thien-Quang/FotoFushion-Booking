import React, { useEffect, useState } from 'react'
import { FiSend } from "react-icons/fi";
import { Button } from 'flowbite-react';
import * as commentApi from '../../apis/comment'

const Comment = ({ id }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await commentApi.getAllCommentByBlogPostID(id);
                setComments(response);
            } catch (error) {
                console.error('Lỗi khi lấy bình luận:', error);
            }
        };
        if (id) {
            fetchData();
        }
    }, [id]);

    useEffect(() => {
        console.log(comments);
    }, [comments]);

    return (
        <div className='w-full h-auto border'>
            <div className='flex items-start justify-center m-2'>
                <div className="avatar-group -space-x-6 rtl:space-x-reverse w-[10%]">
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
                <div class="flex py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 w-[80%]">
                    <textarea id="comment" rows="1"
                        class="textarea textarea-accent w-[90%] "
                        placeholder="Viết bình luận của bạn..." required></textarea>
                    <div className='flex items-center justify-center ml-4'>
                        <Button gradientMonochrome="lime" ><FiSend /></Button>
                    </div>
                </div>
            </div>
            {comments.map((comment) => (
                <div key={comment.id} className='flex items-start justify-center'>
                    <div className='w-4/5 flex items-start justify-center'>
                        <div className='w-[10%] avatar-group flex justify-center items-end'>
                            <div className='avatar'>
                                <div className='w-8'>
                                    <img src={comment.avatarUrl} alt='Avatar' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[90%] border bg-gray-100 p-1 rounded-xl my-2'>
                            <div className='flex items-start justify-start '>
                                <h1 className='text-base font-semibold'>{comment.author}</h1>
                            </div>
                            <div className='px-2'>
                                <h2>{comment.content}</h2>
                            </div>

                        </div>
                    </div>
                </div>
            ))}



        </div>
    )
}

export default Comment
