import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
    const t = await getTranslations("Footer");
    const links = [
        { to: '/', label: t('home') },
        { to: '/projects', label: t('projects') },
        { to: '/japan', label: t('japanLog') },
    ] as const;
    return (
        <div className="border-t min-h-32 flex py-6 px-8 gap-4 flex-col items-center">
            <p className="text-sm text-muted-foreground">
                {t('tagline')}
            </p>
            <div className="grid w-full mx-auto max-w-5xl ">
                <div className="flex flex-col gap-1 text-sm">
                    <h3 className="font-bold mb-3">{t('quickLinks')}</h3>
                    {links.map((link, idx) => {
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