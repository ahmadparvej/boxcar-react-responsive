import Image from "next/image";
import React from "react";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    date: string;
    author: string;
    img: string;
    content: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div className="rounder-lg bg-slate-100 p-4">
      <Image src={post.img} alt={post.title} width={400} height={250} />
      <div className="flex gap-6 h-10 text-xs">
        <p>Date: {post.date}</p>
        <p>Author: {post.author}</p>
      </div>
      <h1 className="text-lg font-bold mt-2 text-primary">{post.title}</h1>
      <div className="text-sm">
        {post.content}
      </div>
    </div>
  );
};

export default BlogPost;
