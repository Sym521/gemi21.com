"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type CodeBlockProps = {
    code: string;
    language?: string;
    filename?: string;
    highlightLines?: number[];
    className?: string;
};

export function CodeBlock({
    code,
    language,
    filename,
    highlightLines = [],
    className,
}: CodeBlockProps) {
    const [copied, setCopied] = React.useState(false);
    const lines = code.replace(/\n$/, "").split("\n");
    const highlighted = new Set(highlightLines);

    const copyCode = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
    };

    return (
        <div
            className={cn(
                "my-5 overflow-hidden rounded-md border border-border bg-background text-foreground shadow-sm",
                className,
            )}
        >
            {(filename || language) && (
                <div className="flex min-h-10 items-center justify-between gap-3 border-b border-border bg-muted px-4 py-2">
                    <div className="min-w-0 truncate font-mono text-xs text-muted-foreground">
                        {filename ?? language}
                    </div>
                    <button
                        type="button"
                        onClick={copyCode}
                        className="shrink-0 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>
            )}
            <pre className="overflow-x-auto p-0 text-sm leading-6">
                <code className={language ? `language-${language}` : undefined}>
                    {lines.map((line, index) => {
                        const lineNumber = index + 1;

                        return (
                            <span
                                key={`${lineNumber}-${line}`}
                                className={cn(
                                    "grid grid-cols-[3rem_1fr] px-4 font-mono",
                                    highlighted.has(lineNumber) && "bg-accent text-accent-foreground",
                                )}
                            >
                                <span className="select-none pr-4 text-right text-muted-foreground">
                                    {lineNumber}
                                </span>
                                <span className="whitespace-pre">{line || " "}</span>
                            </span>
                        );
                    })}
                </code>
            </pre>
        </div>
    );
}
