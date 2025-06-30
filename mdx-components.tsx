import type { MDXComponents } from 'mdx/types';

const baseClasses = {
    h1: "text-4xl md:text-5xl font-bold text-left",
    h2: "text-3xl md:text-4xl font-semibold text-left",
    h3: "text-2xl md:text-3xl font-semibold text-left",
    p: "text-md md:text-lg text-left",
    ul: "list-disc list-inside text-md md:text-lg",
};

const elements = ['h1', 'h2', 'h3', 'p', 'ul'] as const;

export function useMDXComponents(components: MDXComponents): MDXComponents {
    const customComponents = Object.fromEntries(
        elements.map((Tag) => [
            Tag,
            ({ children, ...props }: any) => (
                <Tag className={baseClasses[Tag]} {...props}>
                    {children}
                </Tag>
            ),
        ])
    );
    return {
        ...customComponents,
        ...components,
    };
}
