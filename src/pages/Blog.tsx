import React from 'react';
import { Link } from 'react-router-dom';
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
  image: 'https://images.pexels.com/photos/5711173/pexels-photo-5711173.jpeg?auto=compress&cs=tinysrgb&w=600',
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
,
{
  id: 10,
  title: 'Microneedling: Everything You Need to Know',
  excerpt: 'An in-depth guide to microneedling, its benefits, procedure, and aftercare.',
  image: 'https://images.pexels.com/photos/5863397/pexels-photo-5863397.jpeg?auto=compress&cs=tinysrgb&w=600',
  author: 'Dr. Neha Kapoor',
  date: '2025-08-01',
  readTime: '6 min read',
  category: 'Skin Treatments',
  tags: ['microneedling', 'skincare', 'treatment']
},

{
  id: 11,
  title: 'Chemical vs Mineral Sunscreens: Which is Better?',
  excerpt: 'A comparison of chemical and mineral sunscreens to help you choose the right one for your skin.',
  image: 'https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg?auto=compress&cs=tinysrgb&w=600',
  author: 'Dr. Radhika Menon',
  date: '2025-08-05',
  readTime: '6 min read',
  category: 'Sun Protection',
  tags: ['sunscreen', 'skincare', 'protection']
}
    // ...add rest of the posts here
  ];

  const slugs = {
    '10 Essential Skincare Tips for Healthy, Glowing Skin': '10-essential-skincare-tips-for-healthy-glowing-skin',
    'Understanding Acne: Causes, Treatment, and Prevention': 'acne-causes-treatment',
    'The Complete Guide to Laser Hair Removal': 'laser-hair-removal',
    'Anti-Aging Treatments: What Works and What Doesn\'t': 'anti-aging-treatments',
    'Hair Loss: Causes, Myths, and Effective Solutions': 'hair-loss-causes',
    'Chemical Peels: Types, Benefits, and What to Expect': 'chemical-peels',
    'Sun Protection: Beyond SPF - What You Need to Know': 'sun-protection-beyond-spf',
    'PRP Therapy: The Science Behind Platelet-Rich Plasma': 'prp-therapy',
    'Skincare Routine: Building the Perfect Regimen': 'skincare-routine',
    'Microneedling: Everything You Need to Know': 'microneedling-guide',
    'Chemical vs Mineral Sunscreens: Which is Better?': 'chemical-sunscreens-vs-mineral-sunscreens',
  };

  return (
    <div className="pt-16">
      <section className="py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {blogPosts.map((post) => {
            const slug = slugs[post.title] || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* ✅ IMAGE */}
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

                {/* ✅ CONTENT */}
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

                  <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
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
                    <Link
                      to={`/blog/${slug}`}
                      className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center space-x-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Blog;