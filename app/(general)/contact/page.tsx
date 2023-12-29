import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Title',
 description: 'Contact description',
 keywords: ['Contact page', 'Dwan', '...']
};

export default function ContactPage(){
    return(
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}