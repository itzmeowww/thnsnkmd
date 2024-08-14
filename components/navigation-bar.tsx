'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useRouter } from "@/navigation";
import { Globe, Menu, MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "next-themes";

const NavigationBar = ({ locale }: { locale: string }) => {
    const router = useRouter();
    const { setTheme } = useTheme()
    return (
        <div className="w-full border-b h-16 flex justify-between items-center px-4 md:px-6 sticky top-0 bg-white dark:bg-black backdrop-blur-sm  z-50 ">
            <Link href={'/'}>
                <Button variant={'ghost'}>
                    <h1 className="max-sm:hidden">Thanasan Kumdee</h1>
                    <h1 className="sm:hidden">Thanasan K.</h1>
                </Button>
            </Link>
            <div className="flex gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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