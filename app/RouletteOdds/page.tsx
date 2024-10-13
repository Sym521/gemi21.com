// page.tsx
"use client";

import { Input } from "@/app/_components/ui/input";
import { Button } from "../_components/ui/button";
import { useState } from "react";
import { CalcOdds, WinningBet } from "../_components/roulette/CalcOdds";

export default function RouletteOdds() {
  const [inputNumber, setInputNumber] = useState<string>(""); // ユーザー入力用
  const [winningBets, setWinningBets] = useState<WinningBet[]>([]); // 当選した賭けを保存
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // エラーハンドリング

  const handleCalcOdds = () => {
    // 入力の検証 - 0〜36または"00"のみ許可
    if (!/^([0-9]{1,2}|00)$/.test(inputNumber)) {
      setErrorMessage("無効な番号です。0〜36、または「00」を入力してください。");
      setWinningBets([]); // 入力が無効な場合、以前の結果をクリア
      return;
    }

    setErrorMessage(null); // 以前のエラーをクリア

    const results = CalcOdds(inputNumber); // 当選した賭けを計算
    setWinningBets(results); // 当選した賭けを状態に設定
    setInputNumber(""); // 入力フィールドをクリア
  };

  return (
    <>
      <h1 className="text-xl">倍率計算ツール</h1>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          value={inputNumber}
          placeholder="番号を入力"
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <Button type="button" onClick={handleCalcOdds}>
          計算
        </Button>
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
      )}

      <div>
        <h2 className="text-lg">当選した賭けと倍率:</h2>
        <ul>
          {winningBets.length > 0 ? (
            winningBets.map((bet, index) => (
              <li key={index}>
                {bet.bet}: {bet.multiplier}倍
              </li>
            ))
          ) : (
            <li>当たりはありません。</li>
          )}
        </ul>
      </div>
    </>
  );
}
