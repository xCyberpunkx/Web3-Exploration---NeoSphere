import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { WavyBackground } from "../Components/ui/wavy-background";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";

const Welcome = ({ auth }: PageProps<{ laravelVersion: string, phpVersion: string }>) => {
    const web3Words = "Explore the Next Dimension of Web3";

    return (
        <>
            <WavyBackground className="max-w-4xl h-100"> 
                <Head title="Welcome" />          
                
                    {!auth.user ? (
                       
                        <div className="flex justify-center p-4 fixed top-5 right-2 text-center ">
                           
                            <Link
                                href={route('login')}
                                className="inline-block rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="inline-block rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white ml-4"
                            >
                                Register
                            </Link>
                            </div>
                        
                    ) : null}
            

                <p className="fixed top-11 left-20 w-80 z-10 text-xl antialiased font-mono font-bold inter-var text-white text-transparent bg-clip-text">
                    NeoSphere
                </p>
                <p className="text-xl md:text-6xl mt-4 text-white font-weight-900 font-mono font-bold inter-var text-center  top-5 ">
                    <TextGenerateEffect words={web3Words} />
                </p>
            </WavyBackground>
        </>
    );
}

export default Welcome;
