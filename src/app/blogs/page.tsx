import React from 'react';
import BlogPost from '../../components/custom/blogPost';

const BlogsPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: '2024 BMW ALPINA XB7 with exclusive details, extraordinary.',
      date: 'November 29, 2023',
      author: 'Admin',
      img: '/blog-1.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'BMW M5 Model is designed to exceed your sportiest.',
      date: 'November 29, 2023',
      author: 'Admin',
      img: '/blog-2.jpg',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      title: 'BMW X5 Gold 2024 Sport Review: Light on Sport',
      date: 'November 29, 2023',
      author: 'Admin',
      img: '/blog-3.jpg',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <div>
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
