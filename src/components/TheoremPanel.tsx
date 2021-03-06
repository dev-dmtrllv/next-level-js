import React from "react";

import { View, Heading } from "views";
import { theorems } from "data/theorem";

import { TheoremContext } from "./TheoremContext";
import { Panel } from "./Panel";

import "./styles/theorem-panel.scss";

export const TheoremPanel: React.FC<TheoremPageProps> = ({ target }) =>
{
	const { theoremPageID } = React.useContext(TheoremContext);

	const ID = `${theoremPageID}${target}`;

	const text = theorems[ID];

	return (
		<Panel className="theorem-panel">
			<View fill>
				<Heading type="sub">{text}</Heading>
			</View>
		</Panel>
	);
}

type TheoremPageProps = {
	target: "A" | "B";
};
