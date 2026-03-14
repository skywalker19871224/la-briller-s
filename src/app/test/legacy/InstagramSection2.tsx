"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Heart, ExternalLink } from "lucide-react";

type IGPost = {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  postUrl: string;
};

const posts: IGPost[] = [
  {
    id: "1",
    imageUrl: "/assets/ig/post1.webp",
    caption:
      "0.04mmが変える、笑顔の概念。花びらより薄いジルコニアベニアが、歯を削らずに理想の白さを実現します。 #LaBriller #ジルコニアベニア",
    likes: 1248,
    postUrl: "/instagram-post",
  },
  {
    id: "2",
    imageUrl: "/assets/ig/post2.webp",
    caption:
      "BEFORE → AFTER。スキャンから貼付まで、わずか2回の通院で完成するプレミアムスマイル。 #審美歯科 #パルフェクリニック",
    likes: 850,
    postUrl: "#",
  },
  {
    id: "3",
    imageUrl: "/assets/ig/post3.webp",
    caption:
      "表参道の空。Aoビル3Fに広がる、プライベートクリニックの穏やかな時間。 #表参道 #完全個室",
    likes: 2104,
    postUrl: "#",
  },
  {
    id: "4",
    imageUrl: "/assets/ig/post4.webp",
    caption:
      "ジルコニアが持つ、真珠のような透過性。色選択可能なので、あなただけの白さを選べます。 #ジルコニア #オーダーメイド",
    likes: 1502,
    postUrl: "#",
  },
  {
    id: "5",
    imageUrl: "/assets/ig/post5.webp",
    caption:
      "STEP 01 スキャン / STEP 02 貼付。たった2回の通院でセレブリティの笑顔へ。 #通院2回 #短期間",
    likes: 920,
    postUrl: "#",
  },
  {
    id: "6",
    imageUrl: "/assets/ig/post6.webp",
    caption:
      "美しさに対して、妥協しない。パルフェクリニック総院長が、La Brillerをパートナーに選んだ理由。 #総院長 #信頼",
    likes: 3401,
    postUrl: "#",
  },
];

const PEEK_WIDTH = 80;

export const InstagramSection2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchMoved = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      const clamped = Math.max(0, Math.min(posts.length - 1, index));
      setIsAnimating(true);
      setCurrentIndex(clamped);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo(currentIndex === posts.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    goTo(currentIndex === 0 ? posts.length - 1 : currentIndex - 1);
  }, [currentIndex, goTo]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(next, 3000);
    };
    const stopAutoPlay = () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAutoPlay();
        } else {
          stopAutoPlay();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      stopAutoPlay();
    };
  }, [next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchMoved.current = false;
  };

  const handleTouchEnd = (e: React.TouchEvent, postUrl: string) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    if (Math.abs(deltaX) >= 50) {
      touchMoved.current = true;
      if (deltaX < 0) next();
      else prev();
    } else {
      if (postUrl !== "#") window.open(postUrl, "_blank");
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50 border-t border-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-1">
              Official SNS
            </p>
            <h2 className="text-2xl font-serif text-gray-800">La Briller</h2>
          </div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs border border-gray-300 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            フォローする
          </a>
        </div>

        <div className="relative">
          <div
            className="flex transition-transform duration-400 ease-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${
                currentIndex * 16
              }px + ${currentIndex > 0 ? -PEEK_WIDTH / 2 : 0}px))`,
              gap: "16px",
            }}
          >
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 group cursor-pointer"
                style={{
                  width: `calc(100% - ${PEEK_WIDTH}px)`,
                  minWidth: `calc(100% - ${PEEK_WIDTH}px)`,
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={(e) => handleTouchEnd(e, post.postUrl)}
              >
                <div
                  className="rounded-[14px] overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300 bg-white"
                  style={{ borderRadius: "14px" }}
                >
                  <div className="relative aspect-square bg-gray-200 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={`La Briller IG Post: ${post.caption.slice(0, 60)}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                      <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                      <span>{post.likes.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                      {post.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-6 h-2 bg-parfait-blue"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`スライド ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-parfait-blue flex items-center justify-center hover:bg-parfait-blue/90 hover:shadow-md transition-all"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
          <span className="text-sm font-medium text-gray-700">@labriller_official</span>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-parfait-blue hover:underline font-medium"
          >
            Instagramで全て見る →
          </a>
        </div>
      </div>
    </section>
  );
};
