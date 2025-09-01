"use client";

import {useEffect, useState} from "react";
import {technologies} from "@/data/technology";
import Link from "next/link";

type ProjectInformationProps = {
	technology: number[];
	source: string;
};

export const ProjectInformation = ({
	technology,
	source,
}: ProjectInformationProps) => {
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

	return (
		<div className="mb-5 flex flex-col gap-2">
			<div className="flex gap-3 items-center">
				<p className="bg-green-dark text-green-light">Source</p>
				<Link
					href={source}
					target="_blank"
					className="hover:underline text-blue"
				>
					{source}
				</Link>
			</div>
			<div className="flex gap-3 items-center">
				<p className="bg-green-dark text-green-light">Platform</p>
				<p></p>
			</div>
			<div className="flex gap-2">
				<p className="bg-green-dark text-green-light">Stack</p>
				<div className="flex">
					{stack.map((s, index) => (
						<p key={index}>
							{s}
							{index < stack.length - 1 && "/"}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};
