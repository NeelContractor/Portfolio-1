import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function ProjectCard({ websiteName, websiteImage, websiteImgAlt, projectCompletedDate, description, frameworkTag, websiteLink }: {
    websiteName: string, 
    websiteImage: string, 
    websiteImgAlt: string, 
    projectCompletedDate: string, 
    description: string, 
    frameworkTag: string[], 
    websiteLink: string 
}) {
    return (
        <div className="grid justify-center pb-1 border rounded-xl border-gray-800 relative overflow-hidden">
            <a href={websiteLink}>
                <Image src={websiteImage} alt={websiteImgAlt} width={350} height={250} className=" bg-clip-border bg-origin-border rounded-t-xl" />
            </a>
            <div className="pl-1.5">
                <h1 className="font-bold">{websiteName}</h1>
                <p className=" font-medium text-sm">{projectCompletedDate}</p>
                <p className="py-1 text-sm text-gray-400">{description}</p>
                <div className="flex flex-wrap gap-1">
                    {frameworkTag.map((tag, index) => (
                        <Badge key={index} className="bg-[#242428] text-white border-black" variant="outline">{tag}</Badge>
                    ))}
                </div>
                <div className="py-1">
                    <Badge className="bg-white text-black" variant="outline">
                        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                            Website
                        </a>
                    </Badge>
                </div>
            </div>
        </div>
    )
}