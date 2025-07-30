import React from 'react';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Skincare Tips for Healthy, Glowing Skin',
      excerpt: 'Discover the fundamental skincare practices that dermatologists recommend for maintaining healthy, radiant skin all year round.',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Priya Sharma',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Skincare',
      tags: ['skincare', 'beauty', 'health']
    },
    {
      id: 2,
      title: 'Understanding Acne: Causes, Treatment, and Prevention',
      excerpt: 'A comprehensive guide to understanding acne, from its root causes to effective treatment options and prevention strategies.',
      image: 'https://images.pexels.com/photos/4046709/pexels-photo-4046709.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Meera Patel',
      date: '2025-01-12',
      readTime: '8 min read',
      category: 'Dermatology',
      tags: ['acne', 'treatment', 'skincare']
    },
    {
      id: 3,
      title: 'The Complete Guide to Laser Hair Removal',
      excerpt: 'Everything you need to know about laser hair removal, including preparation, procedure, aftercare, and expected results.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Rajesh Kumar',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Laser Treatments',
      tags: ['laser', 'hair removal', 'cosmetic']
    },
    {
      id: 4,
      title: 'Anti-Aging Treatments: What Works and What Doesn\'t',
      excerpt: 'An honest look at various anti-aging treatments, their effectiveness, and how to choose the right approach for your skin.',
      image: 'https://images.pexels.com/photos/4173082/pexels-photo-4173082.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Arjun Singh',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Anti-Aging',
      tags: ['anti-aging', 'botox', 'fillers']
    },
    {
      id: 5,
      title: 'Hair Loss: Causes, Myths, and Effective Solutions',
      excerpt: 'Debunking common hair loss myths and exploring proven treatments that actually work for different types of hair loss.',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Kavya Reddy',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Hair Care',
      tags: ['hair loss', 'treatment', 'prp']
    },
    {
      id: 6,
      title: 'Chemical Peels: Types, Benefits, and What to Expect',
      excerpt: 'A detailed overview of different types of chemical peels, their benefits, and what you can expect during and after treatment.',
      image: 'https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Sameer Shah',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Chemical Peels',
      tags: ['chemical peels', 'skincare', 'rejuvenation']
    },
    {
      id: 7,
      title: 'Sun Protection: Beyond SPF - What You Need to Know',
      excerpt: 'Learn about comprehensive sun protection strategies that go beyond SPF numbers to keep your skin healthy and youthful.',
      image: 'https://images.pexels.com/photos/4046708/pexels-photo-4046708.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Priya Sharma',
      date: '2025-01-01',
      readTime: '5 min read',
      category: 'Prevention',
      tags: ['sun protection', 'prevention', 'skincare']
    },
    {
      id: 8,
      title: 'PRP Therapy: The Science Behind Platelet-Rich Plasma',
      excerpt: 'Understanding the science behind PRP therapy and its applications in dermatology and hair restoration treatments.',
      image: 'https://images.pexels.com/photos/4173324/pexels-photo-4173324.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Meera Patel',
      date: '2024-12-29',
      readTime: '8 min read',
      category: 'PRP Therapy',
      tags: ['prp', 'regenerative', 'natural']
    },
    {
      id: 9,
      title: 'Skincare Routine: Building the Perfect Regimen',
      excerpt: 'Step-by-step guide to creating an effective skincare routine tailored to your skin type and specific concerns.',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Kavya Reddy',
      date: '2024-12-27',
      readTime: '7 min read',
      category: 'Skincare',
      tags: ['routine', 'skincare', 'daily care']
    }
  ];

  const categories = ['All', 'Skincare', 'Dermatology', 'Laser Treatments', 'Anti-Aging', 'Hair Care', 'Chemical Peels', 'Prevention', 'PRP Therapy'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Health & Beauty Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, tips, and expert advice from our team of 
            experienced dermatologists and healthcare professionals.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-gray-700 font-medium">{blogPosts[0].author}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full font-medium transition-all duration-200 bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-700 text-sm font-medium">{post.author}</span>
                    </div>
                    <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and receive the latest health and beauty tips 
            directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;