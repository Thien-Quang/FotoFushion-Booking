import React from 'react'

import { useState, useEffect } from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { storage } from '../../config/firebase.config';
import { v4 } from "uuid";

const UpdateImage = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, "Albums/TPDanToc/");

    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `Albums/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
        });
    };

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            const urls = [];
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                    urls.push(url);
                });
            });
        });
    }, []);
    return (
        <div className="w-100% h-auto mt-80">
            <input
                type="file"
                onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                }}
            />
            <button onClick={uploadFile}> Upload Image</button>
            <div>
                <h3>Total URLs: {imageUrls.length}</h3>
                <ul>
                    {imageUrls.map((url, index) => (
                        <li key={index}>{url}</li>
                    ))}
                </ul>
            </div>
            {imageUrls.map((url) => {
                return <img className='w-[300px] m-10' src={url} />;
            })}
        </div>
    )
}

export default UpdateImage
