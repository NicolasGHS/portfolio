"use client";

import {useParams} from "next/navigation";

export default function Project() {
	const {slug} = useParams();

	console.log("slug: ", slug);
	return (
		<div>
			<p>Project</p>
		</div>
	);
}
