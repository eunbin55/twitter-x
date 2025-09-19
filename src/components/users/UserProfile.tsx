import Image from "next/image";
import React from "react";

export const UserProfile = ({ src }: { src: string }) => {
  return (
    <Image className="rounded-full" alt="" src={src} width={40} height={40} />
  );
};
