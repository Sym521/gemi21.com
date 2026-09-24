import type { AnchorHTMLAttributes } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	href: string;
};

export function Link({ href, ...props }: LinkProps) {
	return <a href={href} {...props} />;
}
