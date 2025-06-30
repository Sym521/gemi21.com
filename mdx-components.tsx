import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children, ...props }: any) => (
            <h1 className="text-4xl md:text-5xl font-bold text-left text-stone-600" {...props}>
                {children}
            </h1>
        ),
        h2: ({ children, ...props }: any) => (
            <h2 className="text-3xl md:text-4xl font-semibold text-left text-stone-600" {...props}>
                {children}
            </h2>
        ),
        h3: ({ children, ...props }: any) => (
            <h3 className="text-2xl md:text-3xl font-semibold text-left text-stone-600" {...props}>
                {children}
            </h3>
        ),
        p: ({ children, ...props }: any) => (
            <p className="text-md md:text-lg text-left text-stone-600" {...props}>
                {children}
            </p>
        ),
        ul: ({ children, ...props }: any) => (
            <ul className="list-disc list-inside text-md md:text-lg text-stone-600" {...props}>
                {children}
            </ul>
        ),
        li: ({ children, ...props }: any) => (
            <li className="mb-2 text-md md:text-lg text-stone-600" {...props}>
                {children}
            </li>
        ),
        ...components,
    };
}
