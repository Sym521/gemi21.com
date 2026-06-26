"use client";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type WordSegment = {
	key: string;
	word: string;
	delayIndex: number;
	letters: Array<{
		key: string;
		letter: string;
		delayIndex: number;
	}>;
};

const getWordSegments = (currentWord: string) => {
	const segments: WordSegment[] = [];
	let offset = 0;

	for (const word of currentWord.split(" ")) {
		const startIndex = offset;

		segments.push({
			key: `${startIndex}-${word}`,
			word,
			delayIndex: segments.length,
			letters: Array.from(word).map((letter, letterIndex) => ({
				key: `${startIndex + letterIndex}-${letter}`,
				letter,
				delayIndex: letterIndex,
			})),
		});
		offset += word.length + 1;
	}

	return segments;
};

export const FlipWords = ({
	words,
	duration = 3000,
	className,
}: {
	words: string[];
	duration?: number;
	className?: string;
}) => {
	const [currentWord, setCurrentWord] = useState(words[0]);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);
	const wordSegments = getWordSegments(currentWord);

	// thanks for the fix Julian - https://github.com/Julian-AT
	const startAnimation = useCallback(() => {
		const word = words[words.indexOf(currentWord) + 1] || words[0];
		setCurrentWord(word);
		setIsAnimating(true);
	}, [currentWord, words]);

	useEffect(() => {
		if (!isAnimating)
			setTimeout(() => {
				startAnimation();
			}, duration);
	}, [isAnimating, duration, startAnimation]);

	return (
		<AnimatePresence
			onExitComplete={() => {
				setIsAnimating(false);
			}}
		>
			<motion.div
				initial={{
					opacity: 0,
					y: 10,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 10,
				}}
				exit={{
					opacity: 0,
					y: -40,
					x: 40,
					filter: "blur(8px)",
					scale: 2,
					position: "absolute",
				}}
				className={cn(
					"z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
					className,
				)}
				key={currentWord}
			>
				{/* edit suggested by Sajal: https://x.com/DewanganSajal */}
				{wordSegments.map((segment) => (
					<motion.span
						key={segment.key}
						initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{
							delay: segment.delayIndex * 0.3,
							duration: 0.3,
						}}
						className="inline-block whitespace-nowrap"
					>
						{segment.letters.map((letter) => (
							<motion.span
								key={letter.key}
								initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
								animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
								transition={{
									delay: segment.delayIndex * 0.3 + letter.delayIndex * 0.05,
									duration: 0.2,
								}}
								className="inline-block"
							>
								{letter.letter}
							</motion.span>
						))}
						<span className="inline-block">&nbsp;</span>
					</motion.span>
				))}
			</motion.div>
		</AnimatePresence>
	);
};
