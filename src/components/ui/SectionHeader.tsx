import React from "react";

interface SectionHeaderProps {
    en: string;
    ja: React.ReactNode;
    theme?: "light" | "dark"; // dark background -> light text, light background -> dark text
    enColor?: string; // override
    jaColor?: string; // override
    className?: string; // additional wrapper classes
    description?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    en,
    ja,
    theme = "light", // default to light background
    enColor,
    jaColor,
    className = "",
    description,
}) => {
    // text-white on dark backgrounds, text-[#1A2530] on light backgrounds
    const defaultJaColor = theme === "dark" ? "text-white" : "text-[#1A2530]";
    // text-white/70 on dark backgrounds, text-gold/80 on light backgrounds
    const defaultEnColor = theme === "dark" ? "text-white/70" : "text-gold/80";

    return (
        <div className={`text-center ${className}`}>
            <p
                className={`text-xs md:text-sm tracking-[0.4em] uppercase mb-4 font-sans ${
                    enColor || defaultEnColor
                }`}
            >
                {en}
            </p>
            <h2
                className={`text-3xl md:text-5xl font-serif tracking-widest leading-tight ${
                    jaColor || defaultJaColor
                }`}
            >
                {ja}
            </h2>
            {description && (
                <p className={`mt-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto ${
                    theme === "dark" ? "text-white/80" : "text-gray-600"
                }`}>
                    {description}
                </p>
            )}
        </div>
    );
};
