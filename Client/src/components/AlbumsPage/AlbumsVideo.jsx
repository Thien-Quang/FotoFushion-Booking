import React, { useEffect, useState } from 'react';

const AlbumsVideo = () => {
    const videos = [
        {
            src: 'https://firebasestorage.googleapis.com/v0/b/fotofushion-51865.appspot.com/o/video%2F1701788964385.mp4?alt=media&token=239b612e-19f3-44da-8fe6-3d3414d1a03f',
            ref: React.createRef(),
            style: useState({}),
        },
        {
            src: 'https://firebasestorage.googleapis.com/v0/b/fotofushion-51865.appspot.com/o/video%2F%5B%20Intro%20Wedding%20%5D%20T%20H%20I%20N%20H%20%26%20D%20I%20E%20M.mp4?alt=media&token=f17f7a6e-624d-4981-ad1c-c8d4de3c6efd',
            ref: React.createRef(),
            style: useState({}),
        },
        // Add more videos as needed
    ];

    useEffect(() => {
        const updateVideoStyle = (video) => {
            const videoElement = video.ref.current;

            if (videoElement) {
                const { videoWidth, videoHeight } = videoElement;
                const aspectRatio = videoWidth / videoHeight;

                if (aspectRatio > 1) {
                    // Video chiều ngang
                    video.style[1]({
                        width: '2/3',
                        height: '50vh',
                    });
                } else {
                    // Video chiều dọc hoặc vuông
                    video.style[1]({
                        width: '1/3',
                        height: '90vh',
                    });
                }
            }
        };

        const handleResize = () => {
            videos.forEach((video) => {
                updateVideoStyle(video);
            });
        };

        window.addEventListener('resize', handleResize);

        videos.forEach((video) => {
            window.addEventListener('resize', () => updateVideoStyle(video));
        });

        handleResize(); // Gọi ngay khi component được mount

        return () => {
            window.removeEventListener('resize', handleResize);
            videos.forEach((video) => {
                window.removeEventListener('resize', () => updateVideoStyle(video));
            });
        };
    }, [videos]);

    return (
        <>
            {videos.map((video, index) => (
                <div key={index} className='flex items-center justify-center'>
                    <div className={`${video.style[0].width} ${video.style[0].height}`}>
                        <video
                            ref={video.ref}
                            controls
                            style={{ objectFit: 'cover' }}
                        >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AlbumsVideo;
