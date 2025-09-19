"use client";
import { Bookmark, Heart, Repeat2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export const PostCard = () => {
  return (
    <div className="flex gap-3 border-b-1 border-[#17191B] py-2">
      <div>
        <Image
          className="rounded-full"
          alt=""
          src={"https://picsum.photos/40/40?random=5000"}
          width={40}
          height={40}
        />
      </div>
      <div className="post-content flex flex-col gap-3">
        <div className="writer-info flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold">이은빈</span>
            <span className="text-gray-500 text-xs ml-1">@eunbin</span>
          </div>
          <div className="text-gray-500 text-xs">21시간</div>
        </div>
        <div>내가 작성한 내용</div>
        <div className="flex justify-between">
          <button className="cursor-pointer">
            <div className="flex items-center gap-1 hover:text-green-700 transition">
              <Repeat2 className="h-4 w-4" />
              <span className="text-xs">100</span>
            </div>
          </button>
          <button className="cursor-pointer">
            <div className="flex gap-1 hover:text-red-700 transition">
              <Heart className="h-4 w-4" />
              <span className="text-xs">2</span>
            </div>
          </button>
          <button className="cursor-pointer hover:text-yellow-500 transition">
            <Bookmark className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
