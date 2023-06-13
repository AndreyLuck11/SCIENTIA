import AuthorSlice from "@/slices/AuthorSlice/AuthorSlice";


function AuthorPage ({ params }: { params: { id: string } }) {

    return (
        <AuthorSlice id={params.id}/>
    );
}

export default AuthorPage;
