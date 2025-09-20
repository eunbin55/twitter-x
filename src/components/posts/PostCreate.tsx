"use client";
import { loginUser } from "@/lib/loginUser";
import { ImagePlus, X } from "lucide-react";
import React, { useState } from "react";
import { UserProfile } from "../users/UserProfile";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { Post } from "@/types/post";
import { createPost } from "@/redux/slices/postSlice";
import { useRouter } from "next/navigation";

const InitialFormData: Post = {
  author: {
    name: "",
    profileImage: "",
    username: "",
    verified: false,
  },
  comments: 0,
  content: "",
  createdAt: "",
  id: 0,
  images: [],
  isLiked: false,
  isRetweeted: false,
  likes: 0,
  retweets: 0,
};

export const PostCreate = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prev) => [...prev, ...fileArray]);
  };
  const removeImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i != idx));
  };

  const handlePost = async () => {
    const newPost: Post = {
      ...InitialFormData,
      author: loginUser,
      content: value,
      images: [], // 실제 서버 연동 시 수정 예정
      createdAt: new Date().toUTCString(),
      id: Math.floor(Math.random() * (100000 - 1001 + 1)) + 1001,
    };

    await dispatch(createPost(newPost));
    alert("게시하기가 완료되었습니다.");
    router.push("/");
  };

  return (
    <div className="flex flex-col p-4 border-b">
      <div className="flex gap-3">
        <div>
          <UserProfile src={loginUser.profileImage} />
        </div>
        <div className="flex-1 flex flex-col">
          <textarea
            className="w-full h-auto resize-none border-none outline-none text-lg placeholder-gray-500 min-h-[60px] max-h-[200px]"
            placeholder="무슨 일이 일어나고 있나요?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={280}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = target.scrollHeight + "px";
            }}
          />
          {images.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-3">
              {images.map((src, idx) => (
                <div key={idx} className="relative">
                  <Image
                    src={src}
                    alt={`Preview-${idx}`}
                    width={100}
                    height={50}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full p-1 cursor-pointer"
                  >
                    <X className="h-4 w-4 text-white" />
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-between items-center mt-4 pt-3 border-t">
            {/* 이미지 업로드 */}
            <div>
              <input
                type="file"
                accept="image/*"
                id="imageInput"
                className="hidden"
                multiple
                onChange={handleImageUpload}
              />
              <label
                htmlFor="imageInput"
                className="flex items-center gap-2 text-blue-500 cursor-pointer"
              >
                <ImagePlus className="h-4 w-4" />
                <span className="text-sm">이미지 추가하기</span>
              </label>
            </div>
            <div className="flex items-center gap-2">
              {/* 글자수 카운트 */}
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm ${
                    value.length > 270 ? "text-red-600" : "text-gray-500"
                  }`}
                >
                  {value.length}/280
                </span>
              </div>
              <button
                className="text-sm bg-blue-500 text-blue-50 px-3 py-2 rounded-full hover:bg-blue-600 transition cursor-pointer"
                onClick={handlePost}
              >
                게시하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
