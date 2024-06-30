import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const LatestBlogs = () => {
  const posts = [
    {
      title: "2024 BMW ALPINA XB7 with exclusive details, extraordinary.",
      date: "November 29, 2023",
      author: "Admin",
      img: "/blog-1.jpg",
    },
    {
      title: "BMW M5 Model is designed to exceed your sportiest.",
      date: "November 29, 2023",
      author: "Admin",
      img: "/blog-2.jpg",
    },
    {
      title: "BMW X5 Gold 2024 Sport Review: Light on Sport",
      date: "November 29, 2023",
      author: "Admin",
      img: "/blog-3.jpg",
    },
  ];

  return (
    <section className="py-20 mx-4 lg:mx-16">
      <h3 className="text-2xl font-bold text-center">Latest Blog Posts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {posts.map((post) => (
          <Card key={post.title} className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.img}
              alt={post.title}
              width={500}
              height={196}
            />
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">
                {post.date} by {post.author}
              </p>
              <h4 className="text-lg mt-2">{post.title}</h4>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogs;
