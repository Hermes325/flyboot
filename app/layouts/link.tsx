"use client";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode, HTMLAttributes } from "react";

type CustomLinkProps = {
  children: ReactNode;
  href: string;
  prefetch?: boolean;
  replace?: boolean;
  shallow?: boolean;
  setOpen?: any;
} & HTMLAttributes<HTMLAnchorElement>;

// TODO: удалить и заменить на Link из next/link
// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// and use it manually
function NavLink({
  children,
  href,
  prefetch = false,
  replace = false,
  shallow = false,
  setOpen,
  ...props
}: CustomLinkProps) {
  const router = useRouter();

  useEffect(() => {
    if (prefetch) {
      router.prefetch(href);
    }
  }, [router, href, prefetch]);

  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        if (setOpen != undefined) {
          setOpen();
        }
        event.preventDefault();
        if (replace) {
          router.replace(href, undefined);
        } else {
          router.push(href, undefined);
        }
      }}
    >
      {children}
    </a>
  );
}

export default NavLink;
