import PublicationInfo from "@/slices/PublicationInfo/PublicationInfo";

interface PublicationPageProps {

}

function PublicationPage ({ params }: { params: { id: string } }) {

    return (
        <PublicationInfo id={params.id}/>
    );
};

export default PublicationPage;
