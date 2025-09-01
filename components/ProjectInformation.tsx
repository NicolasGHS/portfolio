"use client";

import {useEffect, useState} from "react";
import {technologies} from "@/data/technology";

type ProjectInformationProps = {
	technology: number[];
};

export const ProjectInformation = ({technology}: ProjectInformationProps) => {
	const [stack, setStack] = useState<string[]>([]);

	const getTechnologyById = (id: number) => {
		const tech = technologies.find(t => t.id === id);
		return tech?.name ?? "Onbekend"; // fallback als id niet bestaat
	};

	const getStack = () => {
		const result = technology.map(getTechnologyById);
		setStack(result);
	};

	useEffect(() => {
		getStack();
	}, [technology]);

	console.log("stack: ", stack);

	return (
		<div>
			<p>Source</p>
			<p>Platform</p>
			<div className="flex gap-2">
				<p>Stack</p>
				<div className="flex gap-3">
					{stack.map((s, index) => (
						<p key={index}>{s}</p>
					))}
				</div>
			</div>
		</div>
	);
};
