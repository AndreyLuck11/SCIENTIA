"use client";

import PublicationsList from "@/components/Publications/PublicationsList";
import Filters from "@/components/Filters/Filters";
import "./PublicationsList.scss";


function PublicationsSlice() {
	return (
		<div className="publications-slice">
			<Filters />
			<PublicationsList />
		</div>
	);
};

export default PublicationsSlice;
