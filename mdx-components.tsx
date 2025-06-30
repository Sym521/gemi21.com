import type { MDXComponents } from 'mdx/types';

const baseClasses = {
    h1: "text-4xl md:text-5xl font-bold text-left text-stone-600",
    h2: "text-3xl md:text-4xl font-semibold text-left text-stone-600",
    h3: "text-2xl md:text-3xl font-semibold text-left text-stone-600",
    p: "text-md md:text-lg text-left text-stone-600",
    ul: "list-disc list-inside text-md md:text-lg text-stone-600",
    li: "mb-2 text-md md:text-lg text-stone-600",
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
