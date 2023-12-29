import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO description',
 keywords: ['About page', 'Dwan', '...']
};

export default function AboutPage(){
    return(
        <main className="flex">
            <span className="text-7xl">About Page</span>
        </main>
    )
}