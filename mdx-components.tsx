import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children, ...props }: any) => (
            <h1 className="text-4xl md:text-5xl font-bold text-left text-slate-800 font-Zen_Kaku_Gothic_New" {...props}>
                {children}
            </h1>
        ),
        h2: ({ children, ...props }: any) => (
            <h2 className="text-3xl md:text-4xl font-semibold text-left text-slate-800 font-Zen_Kaku_Gothic_New" {...props}>
                {children}
            </h2>
        ),
        h3: ({ children, ...props }: any) => (
            <h3 className="text-2xl md:text-3xl font-semibold text-left text-slate-800 font-Zen_Kaku_Gothic_New" {...props}>
                {children}
            </h3>
        ),
        p: ({ children, ...props }: any) => (
            <p className="text-base md:text-lg text-left text-slate-800 font-Zen_Kaku_Gothic_New" {...props}>
                {children}
            </p>
        ),
        ul: ({ children, ...props }: any) => (
            <ul className="list-disc list-inside text-base md:text-lg text-slate-800 font-Zen_Kaku_Gothic_New" {...props}>
                {children}
            </ul>
        ),
        li: ({ children, ...props }: any) => (
            <li className="mb-2 text-base md:text-lg text-slate-800 font-Zen_Kaku_Gothic_New" {...props}>
                {children}
            </li>
        ),
        img: ({ src, alt, ...props }: any) => (
            <img
                src={src}
                alt={alt}
                className="max-w-80 h-auto rounded-lg shadow-md my-2 mx-auto block"
                {...props}
            />
        ),
        ...components,
    };
}
