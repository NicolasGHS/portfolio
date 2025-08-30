import {DoneBadge} from "./DoneBadge";
import {InProgressBadge} from "./InProgressBadge";

type StatusBadgeProps = {
	status: string;
};

export const StatusBadge = ({status}: StatusBadgeProps) => {
	return (
		<div>
			{status == "in-progress" && <InProgressBadge />}
			{status == "done" && <DoneBadge />}
		</div>
	);
};
