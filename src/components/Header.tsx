"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Phone, Mail, Calendar, MessageCircle, ChevronRight } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // メニューが開いているときは背景のスクロールを無効化
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        {/* Top Bar */}
        <div className="hidden md:block bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 lg:px-8 h-10 flex items-center justify-between text-xs text-gray-600">
            <p className="tracking-widest">表参道の歯医者ならパルフェクリニック・医科歯科まで</p>
            <div className="flex items-center space-x-6">
              <a href="tel:03-6452-6035" className="flex items-center hover:text-parfait-blue transition-colors">
                <Phone className="w-3 h-3 mr-1" /> お電話：03-6452-6035
              </a>
              <a href="https://parfait-clinic.com/contact/" className="flex items-center hover:text-parfait-blue transition-colors">
                <Mail className="w-3 h-3 mr-1" /> お問合せフォーム
              </a>
              <a href="https://reserve.dental/web/5c572e-743/home" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-parfait-blue transition-colors">
                <Calendar className="w-3 h-3 mr-1" /> 24時間Web予約
              </a>
              <a href="https://parfait-clinic.com/line-friends/" className="flex items-center hover:text-green-500 transition-colors">
                <MessageCircle className="w-3 h-3 mr-1" /> LINEから診療予約
              </a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-default relative z-50 flex items-center gap-2">
            <img
              src="https://parfait-clinic.com/wp-content/uploads/2023/08/prfaitclinic_logo_yoko2-2.png"
              alt="表参道の歯医者｜パルフェクリニック・医科歯科"
              className="h-12 w-auto"
            />
            <span className="text-[8px] font-mono text-gray-300 mt-2">v3.1</span>
          </div>

          {/* Global Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-medium tracking-wider">
            <Link href="https://parfait-clinic.com/" className="hover:text-parfait-blue transition-colors">ホーム</Link>
            <Link href="https://parfait-clinic.com/shoshin/" className="hover:text-parfait-blue transition-colors">初診の方</Link>
            <Link href="https://parfait-clinic.com/menu/" className="hover:text-parfait-blue transition-colors">診療のご案内</Link>
            <Link href="https://parfait-clinic.com/clinic/" className="hover:text-parfait-blue transition-colors">医院のご案内</Link>
            <Link href="https://parfait-clinic.com/cases/" className="hover:text-parfait-blue transition-colors">治療例</Link>
            <Link href="https://parfait-clinic.com/staffblog/" className="hover:text-parfait-blue transition-colors">歯科コラム</Link>
            <Link href="https://parfait-clinic.com/price/" className="hover:text-parfait-blue transition-colors">料金表</Link>
          </nav>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center ml-4 lg:ml-6 group cursor-pointer relative z-[60] outline-none"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col items-center justify-center w-10 h-10 relative">
              <span className={cn("block w-8 h-[3px] rounded-full bg-parfait-blue absolute transition-all duration-300 ease-in-out", isMenuOpen ? "top-[18px] rotate-45" : "top-[10px]")} />
              <span className={cn("block w-8 h-[3px] rounded-full bg-parfait-blue absolute transition-all duration-300 ease-in-out top-[18px]", isMenuOpen ? "opacity-0" : "opacity-100")} />
              <span className={cn("block w-8 h-[3px] rounded-full bg-parfait-blue absolute transition-all duration-300 ease-in-out", isMenuOpen ? "top-[18px] -rotate-45" : "top-[26px]")} />
            </div>
            <span className="text-[10px] text-parfait-blue tracking-[0.2em] font-medium leading-none mt-1">
              {isMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>
        </div>
      </header>

      {/* Slide Menu Overlay Background */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[40] transition-opacity duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={toggleMenu}
      />

      {/* Slide Menu Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[50] w-full max-w-[400px] bg-parfait-blue text-white shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col pt-16 pb-12 overflow-y-auto",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close Button UI (inside drawer) */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 w-10 h-10 flex flex-col items-center justify-center outline-none"
          aria-label="Close Menu"
        >
          <span className="block w-8 h-[1px] bg-white rotate-45 absolute" />
          <span className="block w-8 h-[1px] bg-white -rotate-45 absolute" />
        </button>

        {/* Drawer Logo */}
        <div className="flex justify-center px-10 mb-12">
          <img
            src="https://parfait-clinic.com/wp-content/uploads/2023/08/prfaitclinic_logo_h.png"
            alt="Parfait Clinic Logo"
            className="w-full max-w-[200px] object-contain"
          />
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col space-y-6 px-6 text-center font-medium tracking-wider text-base">
          <Link href="https://parfait-clinic.com/shoshin/" className="hover:opacity-70 transition-opacity">初診の方</Link>
          <Link href="https://parfait-clinic.com/menu/" className="hover:opacity-70 transition-opacity">診療のご案内</Link>
          <Link href="https://parfait-clinic.com/cases/" className="hover:opacity-70 transition-opacity">治療例</Link>
          <Link href="https://parfait-clinic.com/price/" className="hover:opacity-70 transition-opacity">料金表</Link>
          <Link href="https://parfait-clinic.com/clinic/" className="hover:opacity-70 transition-opacity">医院のご案内</Link>
          <Link href="https://parfait-clinic.com/corp/" className="hover:opacity-70 transition-opacity">法人情報</Link>
          <Link href="https://parfait-clinic.com/access/" className="hover:opacity-70 transition-opacity">アクセス</Link>
          <Link href="https://parfait-clinic.com/staffblog/" className="hover:opacity-70 transition-opacity">歯科コラム</Link>
          <Link href="https://parfait-clinic.com/risk/" className="hover:opacity-70 transition-opacity">リスク・副作用</Link>
          <Link href="https://parfait-clinic.com/specification/" className="hover:opacity-70 transition-opacity">薬機法</Link>
        </div>
      </div>
    </>
  );
};
