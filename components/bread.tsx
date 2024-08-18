import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "@/navigation";

interface BreadProps {
    links: { name: string; href: string }[];
    current: string;
}

const Bread = ({ links, current }: BreadProps) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">
                            Home
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