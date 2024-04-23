"use client";
import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { WavyBackground } from "../Components/ui/wavy-background";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
const Welcome = ({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) => {
    const neoSphereWords = "NeoSphere";
    const web3Words = "Explore the Next Dimension of Web3";

    return (
        <>
            <Head title="Welcome" />
            
            <WavyBackground className="max-w-4xl  mb-45 pb-40">
                <p className=" text-9xl antialiased font-mono font-bold inter-var text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    NeoSphere
                </p>
                <p className="text-3lg md:text-xl mt-6 text-white font-mono font-normal inter-var text-center">
                    <TextGenerateEffect words={web3Words} />
                </p>
            </WavyBackground>
        </>
    );
}

export default Welcome;
