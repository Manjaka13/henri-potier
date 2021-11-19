import React from "react";
import Button from "components/Button";
import { v4 as uuidv4 } from "uuid";
import { ISynopsisProps } from "helpers/interface";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const Synopsis: React.FC<ISynopsisProps> = ({
	book,
	opened,
	onClose,
}): JSX.Element => {
	let mappedSynopsis: Array<JSX.Element> = [];

	// Put synopsis in paragraph
	if (book)
		mappedSynopsis = book.synopsis.map((item) => (
			<p className="prg" key={uuidv4()}>
				{item}
			</p>
		));

	return (
		<div className={`full-synopsis ${book && opened ? "full-synopsis--shown" : ""}`}>
			{book && (
				<div className="full-synopsis__window">
					<div className="head">
						<h2 className="title">{book.title}</h2>
						<Button
							className="close"
							type="danger"
							title="Fermer cette fenêtre"
							onClick={onClose}
							icon={faTimes}
						>
							Fermer
						</Button>
					</div>
					<div className="separator"></div>
					{mappedSynopsis}
				</div>
			)}
		</div>
	);
};

export default Synopsis;
