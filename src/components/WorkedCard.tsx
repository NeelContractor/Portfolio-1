import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function WorkedCard({ src, companyName, jobTitle, joiningMonth, joiningYear, leftComanyYear }: {
    src: string,
    companyName: string,
    jobTitle: string,
    joiningMonth: string,
    joiningYear: string,
    leftComanyYear: string
}) {
    return (
        <div className="rounded-xl p-1">
            <div className="flex justify-between">
                <div className="flex">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={src} />
                        <AvatarFallback>unemployed</AvatarFallback>
                    </Avatar>
                    <div className="grid pl-5">
                        <h1 className="font-bold">{companyName}</h1>
                        <p className="text-gray-300 text-base font-light">{jobTitle}</p>
                    </div>
                </div>
                <div>{joiningMonth} {joiningYear} - {leftComanyYear}</div>
            </div>
        </div>
    )
}