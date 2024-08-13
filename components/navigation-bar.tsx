'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useRouter } from "@/navigation";
import { Globe, Menu, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const NavigationBar = ({ locale }: { locale: string }) => {
    const router = useRouter();
    return (
        <div className="w-full border-b h-16 flex justify-between items-center px-4 md:px-6 sticky top-0 backdrop-blur-sm bg-white/70 z-50">
            <Link href={'/'}>
                <Button variant={'ghost'}>
                    <h1 className="max-sm:hidden">Thanasan Kumdee</h1>
                    <h1 className="sm:hidden">Thanasan K.</h1>
                </Button>
            </Link>
            <div className="flex gap-2">
                <Select

                    defaultValue={locale}
                    onValueChange={(value: string) => {
                        router.replace('/', { locale: value });
                    }}
                >
                    <SelectTrigger className="w-[140px]">
                        <Globe size={16} className="" />
                        <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="ja" disabled>日本語</SelectItem>
                        <SelectItem value="th" disabled>ภาษาไทย</SelectItem>
                    </SelectContent>
                </Select>
                {/* <Button size={'icon'} variant={'outline'}>
                    <MenuIcon />
                </Button> */}
            </div>

        </div>
    );
}

export default NavigationBar;