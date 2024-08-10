import { Link } from "@/navigation";
import { Button } from "./ui/button";

const Footer = () => {
    return (
        <div className="border-t min-h-32 flex py-6 px-8  gap-4 flex-col items-center">
            <p className="text-sm text-muted-foreground">
                I write Chicken Tender and eat code.
            </p>
            <div className="grid w-full mx-auto">
                <div className="flex flex-col gap-1 text-sm">
                    <h3 className="font-bold mb-3">Quick Links</h3>
                    {[
                        { to: '/', label: 'Home' },
                        { to: '/projects', label: 'Projects' },
                        { to: '/japan', label: 'Japan Log' },
                    ].map((link, idx) => {
                        return (
                            <Link key={idx} href={link.to} className="hover:underline w-fit">

                                {link.label}

                            </Link>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default Footer;