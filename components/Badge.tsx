import React from "react";
import {IBadge} from "helpers/interface";

const Badge: React.FC<IBadge> = ({number}): JSX.Element => {
	if(number && number > 0)
		return (
			<div className="badge">
				<p className="badge__number">
					{number >= 100  ? "+99" : number}
				</p>
			</div>
		);
	return null;
}

export default Badge;