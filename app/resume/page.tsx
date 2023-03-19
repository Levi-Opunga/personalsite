"use client"

import {useEffect, useRef} from 'react';
import WebViewer from "@pdftron/webviewer";

import dynamic from 'next/dynamic';
import NavSlim from "@/components/navslim";
export default function HomePage() {

    const viewer = useRef(null);



    useEffect(() => {
        import('@pdftron/webviewer').then(() => {
            WebViewer(
                {
                    path: '/lib',
                    initialDoc: '/resume.pdf',
                },
                viewer.current,
            ).then((instance) => {
                const { docViewer } = instance;
                // you can now call WebViewer APIs here...
            });
        })
    }, []);


    return (
        <div className="MyComponent">
            <NavSlim/>
            <div className="webviewer md:w-[90%]" ref={viewer} style={{height: "100vh"}}></div>
        </div>
    );

}