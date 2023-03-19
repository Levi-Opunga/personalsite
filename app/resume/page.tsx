"use client"

import {useEffect, useRef} from 'react';
import WebViewer from "@pdftron/webviewer";

import dynamic from 'next/dynamic';
import NavSlim from "@/components/navslim";
export default function HomePage() {

    const viewer = useRef(null);



    // // @ts-ignore
    // useEffect(() => {
    //     import('@pdftron/webviewer').then(() => {
    //         if(viewer.current)
    //         WebViewer(
    //             {
    //                 path: '/lib',
    //                 initialDoc: '/resume.pdf',
    //             },
    //             viewer.current,
    //         );
    //     })
    // }, []);


        useEffect(() => {
            const loadWebViewer = async () => {
                const WebViewer = (await import('@pdftron/webviewer')).default;
                if (viewer.current) {
                    WebViewer(
                        {
                            path: '/lib',
                            initialDoc: '/resume.pdf',
                            disabledElements: [
                                'viewControlsButton',
                                'viewControlsOverlay',
                                'toolsOverlay',
                                'ribbonsDropdown',
                                'selectToolButton',
                                'panToolButton',
                                'leftPanelButton',
                                'toggleNotesButton',
                                'toolsHeader',
                            ],
                        },
                        viewer.current
                    );
                }
            };
            loadWebViewer();
        }, []);


    return (
        <div className="MyComponent">
            <NavSlim/>
            <div className="webviewer md:w-[90%]" ref={viewer} style={{height: "100vh"}}></div>
        </div>
    );

}