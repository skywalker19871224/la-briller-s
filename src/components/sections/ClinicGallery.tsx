"use client";

import React, { useEffect, useRef } from "react";
import "./gallery.css";

export const ClinicGallery = () => {
    const galleryRef = useRef<any>(null);

    useEffect(() => {
        // Load the vanilla JS Web Component only on the client
        import("@/lib/gallery.js").then(() => {
            if (galleryRef.current) {
                // Wait a tiny bit for the component upgrade just in case
                setTimeout(() => {
                    if (galleryRef.current) {
                        galleryRef.current.images = [
                            { src: "/assets/images/clinic/reception.webp", alt: "受付" },
                            { src: "/assets/images/clinic/waiting-area.webp", alt: "待合スペース" },
                            { src: "/assets/images/clinic/treatment-room.webp", alt: "診療室" },
                            { src: "/assets/images/clinic/medical-room.webp", alt: "医科診察室" },
                            { src: "/assets/images/clinic/slope.webp", alt: "スロープ" }
                        ];
                    }
                }, 100);
            }
        });

        // Cleanup the body-appended lightbox upon unmount
        return () => {
            const lightbox = document.getElementById("antigravity-lightbox-overlay");
            if (lightbox) lightbox.remove();
        };
    }, []);

    return (
        <section className="py-8 bg-transparent overflow-hidden border-t border-gray-100">
            {/* @ts-ignore */}
            <antigravity-gallery ref={galleryRef} auto-speed="0.3"></antigravity-gallery>
        </section>
    );
};
