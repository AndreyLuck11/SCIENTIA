import HoverCard from "@/shared/HoverCard/HoverCard";
import Link from "next/link";

interface UserMenuProps {

}

function UserMenu () {
    return (
        <HoverCard>
	        <Link href="/publications/create">Добавить публикацию</Link>
	        <div>Выйти</div>
        </HoverCard>
    );
};

export default UserMenu;
