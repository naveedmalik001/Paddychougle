import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Projects | Paddy Chougle - Model & Influencer",
    description: "Explore the complete portfolio of Paddy Chougle - featuring campaigns, commercials, and collaborations with leading brands like Nike, H&M, and more.",
    openGraph: {
        title: "All Projects | Paddy Chougle",
        description: "Complete portfolio of modeling campaigns and brand collaborations",
        type: "website",
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}