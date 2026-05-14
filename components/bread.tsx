import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";

interface BreadProps {
    links: { name: string; href: string }[];
    current: string;
}

const Bread = async ({ links, current }: BreadProps) => {
    const t = await getTranslations("Breadcrumb");
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">
                            {t("home")}
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {links.map((link, index) => (
                    <>
                        <BreadcrumbItem key={`it-${link.name}-${index}`}>
                            <BreadcrumbLink asChild>
                                <Link href={link.href}>
                                    {link.name}
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator key={`sep-${link.name}-${index}`} />
                    </>

                ))}
                <BreadcrumbItem>
                    <BreadcrumbPage>{current}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default Bread;