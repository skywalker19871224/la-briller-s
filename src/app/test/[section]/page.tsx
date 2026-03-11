import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helo } from "@/components/sections/Helo";
import { BrandMessage } from "@/components/sections/BrandMessage";
import { Merits } from "@/components/sections/Merits";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { QA } from "@/components/sections/QA";
import { ClinicGallery } from "@/components/sections/ClinicGallery";
import { Access } from "@/components/sections/Access";

export default async function SectionPreviewPage({ params }: { params: { section: string } }) {
    const { section } = await params;

    let Component;
    let title;

    switch (section) {
        case "helo":
            Component = Helo;
            title = "Hero Section Preview";
            break;
        case "brand-message":
            Component = BrandMessage;
            title = "Brand Message Preview";
            break;
        case "merits":
            Component = Merits;
            title = "Merits Section Preview";
            break;
        case "instagram":
            Component = InstagramSection;
            title = "Instagram Section Preview";
            break;
        case "qa":
            Component = QA;
            title = "QA Section Preview";
            break;
        case "clinic-gallery":
            Component = ClinicGallery;
            title = "Clinic Gallery Preview";
            break;
        case "access":
            Component = Access;
            title = "Access Section Preview";
            break;
        default:
            notFound();
    }

    return (
        <div className="min-h-screen">
            {/* Dev Navigation Overlay */}
            <div className="fixed top-4 left-4 z-[9999] flex items-center gap-2">
                <Link
                    href="/test"
                    className="bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-slate-800 transition-colors shadow-xl border border-white/10"
                >
                    ← Back to Index
                </Link>
                <span className="bg-white/90 backdrop-blur-md text-slate-800 px-4 py-2 rounded-full text-[10px] font-mono font-bold shadow-xl border border-slate-200">
                    PREVIEW: {title}
                </span>
            </div>

            <Header />
            <main>
                <Component />
            </main>
            <Footer />
        </div>
    );
}
