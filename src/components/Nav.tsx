import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Nav = () => {
  const router = useRouter();
  const paths = router.asPath.split("/");

  return (
    <Flex position="absolute" top="5vh">
      <Breadcrumb separator="/">
        {paths.map((x, idx) => {
          let href = paths.slice(0, idx + 1).join("/");
          if (href === "") href = "/";
          if (x === "") x = "home";
          let isCurrentPage = false;
          if (x === paths[paths.length - 1]) {
            isCurrentPage = true;
          }

          return (
            <BreadcrumbItem
              key={idx}
              isCurrentPage={isCurrentPage}
              fontFamily="mono"
            >
              <BreadcrumbLink as={Link} href={href}>
                {x}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Flex>
  );
};
