"use client";
import { loginUser } from "@/lib/loginUser";
import { ImagePlus } from "lucide-react";
import React, { useState } from "react";
import { UserProfile } from "../users/UserProfile";

export const PostCreate = () => {
  const [value, setValue] = useState("");

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
          <FooterArea value={value} />
        </div>
      </div>
    </div>
  );
};

const FooterArea = ({ value }: { value: string }) => {
  return (
    <div className="flex justify-between items-center mt-4 pt-3 border-t">
      <button className="flex items-center gap-2 text-blue-500 hover:bg-blue-50 px-3 py-2 rounded-full transition">
        <ImagePlus className="h-4 w-4" />
        <span className="text-sm">이미지 추가하기</span>
      </button>
      <div className="flex items-center gap-2">
        <span
          className={`text-sm ${
            value.length > 270 ? "text-red-500" : "text-gray-500"
          }`}
        >
          {value.length}/280
        </span>
      </div>
    </div>
  );
};
