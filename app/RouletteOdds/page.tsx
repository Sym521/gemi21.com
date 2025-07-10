"use client";

import { Input } from "@/app/_components/ui/input";
import { useState } from "react";
import { Footer } from "../_components/ui/Footer";
import { Header } from "../_components/ui/Header";
import { CalcOdds, type WinningBet } from "../_components/roulette/CalcOdds";
import { Button } from "../_components/ui/button";

export default function RouletteOdds() {
	const [inputNumber, setInputNumber] = useState<string>(""); // ユーザー入力用
	const [saveNumber, setSaveNumber] = useState<string>(); // ユーザー入力用
	const [winningBets, setWinningBets] = useState<WinningBet[]>([]); // 当選した賭けを保存
	const [errorMessage, setErrorMessage] = useState<string | null>(null); // エラーハンドリング

	const handleCalcOdds = () => {
		// 入力の検証 - 0〜36または"00"のみ許可
		if (!/^([0-9]{1,2}|00)$/.test(inputNumber)) {
			setErrorMessage(
				"無効な番号です。0〜36、または「00」を入力してください。",
			);
			setWinningBets([]); // 入力が無効な場合、以前の結果をクリア
			return;
		}

		setErrorMessage(null); // 以前のエラーをクリア

		const results = CalcOdds(inputNumber); // 当選した賭けを計算
		setWinningBets(results); // 当選した賭けを状態に設定
		setSaveNumber(inputNumber); // 入力を保存
		setInputNumber(""); // 入力フィールドをクリア
	};

	return (
		<div className="flex flex-col w-full h-dvh md:h-dvh text-snow-100 bg-sonavy font-Noto_Sans_JP">
			<Header />
			<h1 className="flex items-center justify-center text-xl">
				倍率計算ツール
			</h1>
			<div className="flex justify-center items-center space-x-2 mt-2">
				<Input
					type="text"
					value={inputNumber}
					placeholder="番号を入力"
					onChange={(e) => setInputNumber(e.target.value)}
					className="w-25 text-slate-800"
				/>
				<Button type="button" onClick={handleCalcOdds}>
					計算
				</Button>
			</div>

			{errorMessage && (
				<div className="flex items-center justify-center text-xl text-red-500 mt-2">
					{errorMessage}
				</div>
			)}

			<div>
				<div className="flex items-center justify-center mt-2 text-xl">
					<h2 className="">入力した番号:</h2>
					<p>{saveNumber}</p>
				</div>
				<h2 className="flex mt-2 items-center justify-center text-xl">
					当選した賭けと倍率:
				</h2>
				<ul>
					{winningBets.length > 0 ? (
						winningBets.map((bet, index) => (
							<li
								key={index}
								className="flex items-center justify-center text-xl"
							>
								{bet.bet}: {bet.multiplier}倍
							</li>
						))
					) : (
						<li className="flex items-center justify-center">
							上のフォームに0〜36、または「00」の数字を入力して「計算」を押してください。
						</li>
					)}
				</ul>
			</div>
			<Footer />
		</div>
	);
}
