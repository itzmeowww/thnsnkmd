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
import { Fragment } from "react";

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
                    <Fragment key={`${link.name}-${index}`}>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={link.href}>
                                    {link.name}
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </Fragment>
                ))}
                <BreadcrumbItem>
                    <BreadcrumbPage>{current}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default Bread;