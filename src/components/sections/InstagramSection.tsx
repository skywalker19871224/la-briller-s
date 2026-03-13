"use client";

import React from 'react';
import { Heart, MessageCircle, Play, Copy } from "lucide-react";
import Link from 'next/link';

const igPosts = [
    { id: 1, type: 'video', src: '/assets/ig/videos/资源 14.mp4', likes: '1.2k', comments: '24' },
    { id: 2, type: 'video', src: '/assets/ig/videos/资源 37.mp4', likes: '850', comments: '12' },
    { id: 3, type: 'image', src: '/assets/ig/before-after/482091311_17872006899297029_3312920532738003641_n.jpg', likes: '2.1k', comments: '45' },
    { id: 4, type: 'image', src: '/assets/ig/before-after/486289258_122112843590798027_6362505743208880877_n.jpg', likes: '1.5k', comments: '30' },
    { id: 5, type: 'video', src: '/assets/ig/videos/资源 47.mp4', likes: '920', comments: '18' },
    { id: 6, type: 'image', src: '/assets/ig/before-after/625833991_18101801386890286_4511904740009442304_n.jpg', likes: '3.4k', comments: '62' },
];

export const InstagramSection = () => {
    return (
        <section className="pt-16 md:pt-24 pb-8 md:pb-8 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* IG Profile Header - Refined Horizontal Layout */}
                <div className="flex items-center gap-4 md:gap-10 mb-8 md:mb-12 px-2 md:px-0">
                    {/* Profile Icon - Smaller on Mobile */}
                    <div className="shrink-0 w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] md:p-[3px]">
                        <div className="w-full h-full rounded-full bg-white p-[1px] md:p-[2px]">
                            <img
                                src="https://parfait-clinic.com/wp-content/uploads/2023/08/prfaitclinic_logo_h.png"
                                alt="Profile"
                                className="w-full h-full rounded-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Info Container */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                            <h2 className="text-lg md:text-xl font-medium tracking-tight truncate">parfait_clinic_labriller</h2>
                            <button className="w-fit bg-parfait-blue text-white px-5 py-1.5 rounded-md text-[11px] md:text-sm font-semibold hover:bg-parfait-blue/90 transition-colors">
                                フォローする
                            </button>
                        </div>

                        {/* Stats - Compact Row */}
                        <div className="flex gap-4 md:gap-8 mb-2 text-[11px] md:text-sm whitespace-nowrap">
                            <span>投稿 <strong>124</strong></span>
                            <span>フォロワー <strong>12.8k</strong></span>
                            <span>フォロー中 <strong>42</strong></span>
                        </div>

                        {/* Bio - Inline & Compact */}
                        <div className="text-[11px] md:text-sm leading-snug">
                            <p className="font-semibold text-gray-800 hidden md:block">パルフェクリニック × La Briller</p>
                            <div className="text-gray-600">
                                <span>💎 世界初 0.04mmジルコニア</span>
                            </div>
                            <p className="text-parfait-blue font-medium mt-0.5">#ParfaitClinic #LaBriller</p>
                        </div>
                    </div>
                </div>

                {/* IG Grid */}
                <div className="grid grid-cols-3 gap-1 md:gap-6">
                    {igPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/instagram-post?src=${encodeURIComponent(post.src)}&type=${post.type}`}
                            className="group relative aspect-square bg-gray-100 overflow-hidden"
                        >
                            {post.type === 'video' ? (
                                <video
                                    src={post.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <img
                                    src={post.src}
                                    alt={`IG Post ${post.id}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            )}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 md:gap-8 text-white text-xs md:text-base font-semibold">
                                <span className="flex items-center gap-1.5">
                                    <Heart className="w-4 h-4 md:w-6 md:h-6 fill-white" /> {post.likes}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MessageCircle className="w-4 h-4 md:w-6 md:h-6 fill-white" /> {post.comments}
                                </span>
                            </div>

                            {/* Icons (Video/Carousel) */}
                            <div className="absolute top-2 right-2 text-white/90 drop-shadow-md z-10">
                                {post.type === 'video' && <Play className="w-4 h-4 fill-white" />}
                                {post.type === 'carousel' && <Copy className="w-4 h-4" />}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom Footer - Account & Call to Action */}
                <div className="mt-8 md:mt-12 flex items-center justify-between border-t border-gray-100 pt-6">
                    <span className="text-sm font-medium text-gray-700">@labriller_official</span>
                    <a
                        href="https://www.instagram.com/parfait_clinic_labriller/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm text-parfait-blue hover:underline font-medium flex items-center gap-1"
                    >
                        Instagramで全て見る
                        <span className="text-[10px]">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
