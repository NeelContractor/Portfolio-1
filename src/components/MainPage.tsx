"use client"
import Image from "next/image";
import WorkedCard from "./WorkedCard";
import ProjectCard from "./ProjectCard";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

export default function MainPage() {
 return (
    <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
        duration: 0.4,
        ease: "easeInOut",
        }}
    >
        <div className="grid justify-center">
            <div className="flex justify-between">
                <div>
                    <h1 className="flex justify-self-start font-sans text-6xl font-bold">Hi, Neel here</h1>
                    <p className="flex text-xl font-medium text-gray-300">21 year old something guy</p>
                </div>

                <div className="pl-2 ">
                    <span className="relative flex  shrink-0 overflow-hidden rounded-full size-36 border border-gray-800">
                        <Image src={"/interstellar_Endurance-modified.png"} className="aspect-square h-full w-full " alt={"Pic"} width={100} height={100} />
                    </span>
                </div>
            </div>
            <div className="pb-10">
                <h3 className="font-bold text-xl py-2">About</h3>
                <p className="text-gray-300">I&#39;m a self-taught programmer passionate about Solana blockchain development and cutting-edge technology. With a deep love for computers, sci-fi and mystery movies, I thrive on building innovative solutions in the decentralized world</p>
            </div>
            <div className="pb-10">
                <h3 className="font-bold text-xl py-2">Cool places I worked at</h3>
                <WorkedCard src={"/sad_face.png"} companyName={"Unemployed"} jobTitle={"studying..."} joiningMonth={"September"} joiningYear={"2003"} leftComanyYear={"Persent"} />
            </div>
            <div className="pb-10">
                <h3 className="font-bold text-xl py-2">Education</h3>
                <WorkedCard src={"https://imgs.search.brave.com/NaXWck9dUUWXDzXI390SIzQEQZG1sRszaKofy6t1d50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rZXlz/dG9uZWFjYWRlbWlj/LXJlcy5jbG91ZGlu/YXJ5LmNvbS9pbWFn/ZS91cGxvYWQvZl9h/dXRvL3FfYXV0by9n/X2F1dG8vd19hdXRv/L2Rwcl8yLjAvZWxl/bWVudC8xNi8xNjI3/OTVfQW1pdHlfVW5p/dmVyc2l0eV9sb2dv/LnBuZw"} companyName={"Amity Online"} jobTitle={"BCA"} joiningMonth={"July"} joiningYear={"2022"} leftComanyYear={"2025"} />
            </div>
            <div className="pb-10">
                <div className="pb-5">
                    <h1 className="flex justify-center text-4xl font-bold">Check out my latest work</h1>
                    <h3 className="flex justify-center text-xl text-gray-300">I&#39;ve built some stuff, here are some that I like.</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <ProjectCard 
                        websiteName={"Neel Web Based Wallet"} 
                        websiteImage={"/WebWallet.png"} 
                        websiteImgAlt={"Web Based Wallet pic"} 
                        projectCompletedDate={"Sep 2024"} 
                        description={"A Web Based Wallet on Both Solana and Ethereum. Easly create your account on Bloackchain."} 
                        frameworkTag={["Solana web3.js", "Etherjs", "Nextjs", "Typescript", "Tailwindcss"]} 
                        websiteLink={"https://web-based-wallet-better.vercel.app/"} />
                    <ProjectCard 
                        websiteName={"Token Launchpad"} 
                        websiteImage={"/TokenLaunchpad.png"} 
                        websiteImgAlt={"TokenLaunchpad pic"} 
                        projectCompletedDate={"Nov 2024"} 
                        description={"A Token Launchpad on solana. You can launch your own token on solana."} 
                        frameworkTag={["Solana web3.js", "Nextjs", "Typescript", "Tailwindcss"]} 
                        websiteLink={"https://token-launchpad-better-steel.vercel.app/"} />
                    <ProjectCard 
                        websiteName={"Fetch Token"} 
                        websiteImage={"/FetchTokens.png"} 
                        websiteImgAlt={"Devnet Token fetch"} 
                        projectCompletedDate={"Feb 2025"} 
                        description={"fetch all the token owned by a public key on solana devnet."} 
                        frameworkTag={["Solana web3.js", "Nextjs", "Typescript", "Tailwindcss"]} 
                        websiteLink={"https://get-all-tokens-by-owner-week4-assignment.vercel.app/"} 
                    />
                    <ProjectCard 
                        websiteName={"TipLink"} 
                        websiteImage={"/TiplinkSS.png"} 
                        websiteImgAlt={"TipLink"} 
                        projectCompletedDate={"Apr 2025"} 
                        description={"Tiplink is a cloud based wallet on Solana. Where user keya are created with Google."} 
                        frameworkTag={["Solana web3.js", "Nextjs", "Typescript", "Tailwindcss"]} 
                        websiteLink={"https://tiplinkconnect.vercel.app/"} 
                    />
                    <ProjectCard 
                        websiteName={"CoinFlip"} 
                        websiteImage={"/coinflip.png"} 
                        websiteImgAlt={"CoinFlip"} 
                        projectCompletedDate={"Apr 2025"} 
                        description={"CoinFlip is game on solana where users bet on heads or tails and if they won they get 2x bet."} 
                        frameworkTag={["Solana web3.js", "Nextjs", "Typescript", "Tailwindcss"]} 
                        websiteLink={"https://coin-flip-chi.vercel.app/"} 
                    />
                </div>
            </div>
            <div className="pb-10">
                <h3 className="font-bold text-xl py-2">Skills</h3>
                <div className="flex gap-2">
                    <Badge className="bg-white text-black py-1 px-3" variant="outline">Reactjs</Badge>
                    <Badge className="bg-white text-black py-1 px-3" variant="outline">Nextjs</Badge>
                    <Badge className="bg-white text-black py-1 px-3" variant="outline">Nodejs</Badge>
                    <Badge className="bg-white text-black py-1 px-3" variant="outline">Typescript</Badge>
                    <Badge className="bg-white text-black py-1 px-3" variant="outline">Solana</Badge>
                    <Badge className="bg-white text-black py-1 px-3" variant="outline">Anchor</Badge>
                </div>
            </div>
        </div>
    </motion.div>
    )
}
