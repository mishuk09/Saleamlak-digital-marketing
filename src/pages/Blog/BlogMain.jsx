import { useEffect, useState } from 'react';
import { Facebook, Instagram, Linkedin, Clock, Twitter } from "lucide-react";

import { Pagination, Stack } from '@mui/material';
import axios from 'axios';


const BlogMain = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPageSection1 = 3;
    const shareUrl = encodeURIComponent(window.location.href);

    useEffect(() => {
        axios.get('https://saleamlak-digital-marketing-backend.onrender.com/posts/')
            .then(response => {
                // setPosts(response.data.slice(0, 12));
                setBlogs(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, []);



    const socialLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${shareUrl}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
        instagram: '#' // Instagram doesn't support direct URL sharing
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * itemsPerPageSection1;
    const endIndex = startIndex + itemsPerPageSection1;
    // const displayedBlogs = blogs && blogs.slice(startIndex, endIndex);
    const displayedBlogs = blogs && Array.isArray(blogs) ? blogs.slice(startIndex, endIndex) : [];




    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="mt-3 text-lg font-semibold text-gray-600">Loading categories...</p>
            </div>
        );
    }





    return (
        <div className='pt-2 bg-blue-50'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex  gap-2 w-full pt-6'>
                    <div className=' hidden md:block  w-[25%] px-2 h-full rounded'>

                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <h2 className="text-lg font-semibold text-gray-800 border-b border-dotted pb-2 mb-4">
                                Random Blog
                            </h2>

                            {Array.isArray(blogs) &&
                                blogs.slice(0, 5).map((blog) => (
                                    <a
                                        key={blog._id}
                                        href={`/product/${blog._id}`}
                                        className="flex items-center gap-3 p-3 mb-3 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md hover:scale-[1.01] transition-all duration-200"
                                    >
                                        {/* Blog Image */}
                                        <div className="w-20 h-16 flex-shrink-0">
                                            <img
                                                src={blog.img}
                                                alt={blog.title}
                                                className="w-full h-full rounded-lg object-cover"
                                            />
                                        </div>

                                        {/* Blog Content */}
                                        <div className="flex flex-col flex-1">
                                            <p className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-200 line-clamp-2">
                                                {blog.title}
                                            </p>

                                            <div className="mt-2 flex items-center text-xs text-gray-500 gap-1">
                                                <Clock size={14} className="text-gray-400" />
                                                {new Date(blog.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                        </div>


                    </div>

                    <div className=' bg-white p-2 w-full  md:w-[50%]  h-full rounded relative'>
                        <div className='h-full    relative rounded-sm'>

                            {Array.isArray(blogs) && blogs.slice(2, 3).map((blog) => (
                                <a className='cursor-pointer'
                                    href={`/product/${blog._id}`}
                                    key={blog.id}>
                                    <div className='relative'>
                                        <img className='w-full rounded-sm h-[350px]' src={blog.img} alt="" />

                                        {/* Add the gradient overlay using ::before pseudo-element */}
                                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'></div>
                                    </div>

                                    <div className='absolute text-white ps-3 bottom-3'>

                                        <p className='mt-2 font-bold hover:text-green-600 duration-200  font-sans text-4xl'> {blog.title}...</p>
                                        <p className='mt-2 flex gap-1 text-xs text-slate-500'>
                                            <Clock size={15} />
                                            {new Date(blog.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </p>

                                    </div>
                                </a>
                            ))
                            }
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {Array.isArray(blogs) &&
                                blogs.slice(1, 3).map((blog) => (
                                    <a
                                        key={blog._id}
                                        href={`/product/${blog._id}`}
                                        className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 group"
                                    >
                                        {/* Image Section */}
                                        <div className="relative">
                                            <img
                                                src={blog.img}
                                                alt={blog.title || "Blog image"}
                                                className="w-full h-[200px] object-cover transform group-hover:scale-105 transition duration-500"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex flex-col p-4">
                                            <h3 className="font-semibold text-lg text-gray-900 leading-tight mb-2 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                                                {blog.title}
                                            </h3>

                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <Clock size={14} className="text-gray-400" />
                                                {new Date(blog.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                        </div>


                        <div className="mt-8">
                            <h1 className="font-bold text-2xl md:text-3xl pb-2 border-b-2 border-dotted mb-5 text-green-600">
                                Latest Blogs
                            </h1>

                            {displayedBlogs &&
                                displayedBlogs.map((blog) => (
                                    <a
                                        key={blog._id}
                                        href={`/product/${blog._id}`}
                                        className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 mb-6 group"
                                    >
                                        {/* Blog Image */}
                                        <div className="relative flex-shrink-0">
                                            <img
                                                src={blog.img}
                                                alt={blog.title || "Blog image"}
                                                className="w-full h-60 md:h-40 lg:h-36 lg:w-40 object-cover transform group-hover:scale-105 transition duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                                        </div>

                                        {/* Blog Content */}
                                        <div className="flex flex-col p-4 lg:px-6">
                                            <h2 className="font-semibold text-lg md:text-xl text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                                                {blog.title}
                                            </h2>

                                            <p
                                                className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-2"
                                                dangerouslySetInnerHTML={{ __html: blog.description }}
                                            />
                                        </div>
                                    </a>
                                ))}
                        </div>

                    </div>
                    <div className="bg-white w-[25%] p-3 hidden md:block h-full rounded-lg">
                        {/* Social Links */}
                        <div className="grid grid-cols-2 gap-2">
                            <a
                                href={socialLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-2 h-10 rounded-md bg-blue-600 text-white hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                            >
                                <Facebook size={16} />
                                <span className="text-sm font-medium">Facebook</span>
                            </a>
                            <a
                                href={socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-2 h-10 rounded-md bg-black text-white hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                            >
                                <Twitter size={16} />
                                <span className="text-sm font-medium">Twitter</span>
                            </a>
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-2 h-10 rounded-md bg-blue-700 text-white hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                            >
                                <Linkedin size={16} />
                                <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                            <a
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-2 h-10 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-md hover:scale-[1.02] transition-all duration-200"
                            >
                                <Instagram size={16} />
                                <span className="text-sm font-medium">Instagram</span>
                            </a>
                        </div>

                        {/* Featured Blog */}
                        <div className="mt-5 relative">
                            <h2 className="text-lg font-semibold text-green-600 border-b border-dotted pb-2 mb-3">
                                AI Blogs
                            </h2>
                            {Array.isArray(blogs) &&
                                blogs.slice(0, 1).map((blog) => (
                                    <a
                                        href={`/product/${blog._id}`}
                                        key={blog._id}
                                        className="block relative rounded-lg overflow-hidden group"
                                    >
                                        <img
                                            className="w-full h-[150px] object-cover rounded-lg"
                                            src={blog.img}
                                            alt={blog.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 group-hover:opacity-90 transition-all"></div>

                                        <div className="absolute bottom-3 left-3 right-3 text-white">
                                            <p className="text-sm font-semibold group-hover:text-green-400 transition-colors duration-200 line-clamp-2">
                                                {blog.title}
                                            </p>
                                            <p className="mt-2 flex items-center gap-1 text-xs text-gray-300">
                                                <Clock size={14} />
                                                {new Date(blog.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                        </div>

                        {/* More Blogs */}
                        <div className="mt-4 space-y-3">
                            {Array.isArray(blogs) &&
                                blogs.slice(0, 3).map((blog) => (
                                    <a
                                        key={blog._id}
                                        href={`/product/${blog._id}`}
                                        className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md hover:scale-[1.01] transition-all duration-200"
                                    >
                                        {/* Blog Image */}
                                        <div className="w-20 h-16 flex-shrink-0">
                                            <img
                                                src={blog.img}
                                                alt={blog.title}
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        </div>

                                        {/* Blog Content */}
                                        <div className="flex flex-col flex-1">
                                            <p className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-200 line-clamp-2">
                                                {blog.title}
                                            </p>
                                            <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                                                <Clock size={14} className="text-gray-400" />
                                                {new Date(blog.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                        </div>

                        {/* Placeholder Section */}
                        <div className="bg-gray-50 mt-4 p-3 h-full rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
                            Coming Soon...
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex items-center text-center justify-center mt-14 pb-20'>
                <Stack spacing={2}>
                    <Pagination
                        // count={Math.ceil(blogs.length / itemsPerPageSection1)}
                        count={Math.ceil((blogs?.length || 0) / itemsPerPageSection1)}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant='outlined'
                        shape='rounded'
                    />
                </Stack>
            </div>
        </div >
    );
};

export default BlogMain;
