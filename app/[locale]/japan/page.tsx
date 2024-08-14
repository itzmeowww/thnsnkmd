import Bread from "@/components/bread";
import HashHeader from "@/components/hash-header";
import JapanMap from "@/components/japan-map";
import { Badge } from "@/components/ui/badge";
import { Prefecture } from "@/data/types/prefecture";
import { Metadata } from "next";

const has_been: { to: Prefecture, on: Date | undefined }[] = [
    { to: "Osaka", on: new Date("23 Mar 2023") },
    { to: "Nara", on: new Date("23 Aug 2022") },
    { to: "Hyogo", on: new Date("16 Mar 2023") },
    { to: "Kyoto", on: new Date("12 Dec 2022") },
    { to: "Mie", on: new Date("21 Jun 2022") },
    { to: "Shiga", on: new Date("12 Dec 2022") },
    { to: "Tottori", on: new Date("27 Dec 2022") },
    { to: "Okayama", on: new Date("14 Apr 2024") },
    { to: "Wakayama", on: new Date("7 Jan 2023") },
    { to: "Kanagawa", on: new Date("10 Aug 2024") },
    { to: "Tokyo", on: undefined },
    { to: "Aichi", on: new Date("28 Sep 2023") },
    { to: "Miyagi", on: new Date("9 Aug 2023") },
    { to: "Yamagata", on: new Date("10 Aug 2023") },
    { to: "Tochigi", on: new Date("2 Feb 2024") },
    { to: "Chiba", on: new Date("5 Apr 2024") },
    { to: "Saitama", on: new Date("10 Aug 2024") }
]
export const metadata: Metadata = {
    title: "Japan Log of Thanasan Kumdee",
    description: "wanna see where have I been?",
};

const Japan = () => {
    return (
        <div className="flex flex-col gap-2 w-full max-w-3xl mx-auto">
            <Bread current={"Japan"} links={[]} />
            <HashHeader text='japan-log' />
            <p className='font-light text-foreground'>{`Since arriving in Japan on May 12, 2022, I've set a goal to visit every prefecture in the country. So far, I’ve been to ${has_been.length} out of 47 prefectures`}.</p>

            <div className="flex gap-2 items-center"><Badge className="w-fit" variant={'outline'}>TIP</Badge>
                <span className="text-muted-foreground text-sm"> Click on the map to see more detail.</span></div>
            <div className="w-full flex justify-center items-center mt-12">
                <JapanMap been={has_been} />
            </div>
        </div>
    );
}

export default Japan