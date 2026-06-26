"use client";
import moment from "moment";
import { useEffect, useState } from "react";

export const Clock = () => {
	const [time, setTime] = useState<string>(moment().format("LTS"));
	useEffect(() => {
		const intervalID = setInterval(() => {
			setTime(moment().format("LTS"));
		}, 1000);
		return () => {
			clearInterval(intervalID);
		};
	}, []);
	return <p>{time}</p>;
};
