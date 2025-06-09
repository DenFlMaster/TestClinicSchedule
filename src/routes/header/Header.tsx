import {Link, Outlet, useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

function HeaderContent() {
    const navigate = useNavigate()
    return (
        <header
            className="fixed z-50 w-full border-b bg-white px-10 py-2 border-grid">
            <div className="flex h-14 items-center gap-2 md:gap-4">
                <Link to={'/'} className="text-[32px] leading-tight">
                    <span className="font-bold">Клиника</span>
                </Link>
                <div className="ml-auto flex gap-2">
                    <Button variant={"secondary"} onClick={() => navigate('/schedule')}>Расписание</Button>
                    <Button variant={"secondary"} onClick={() => navigate('/about')}>О клинике</Button>
                    <Button variant={"secondary"} onClick={() => navigate('/contacts')}>Контакты</Button>
                </div>
            </div>
        </header>
    )
}

function Header() {
    return (
        <div>
            <HeaderContent/>
            <main className={"pt-18 min-h-[100vh] flex flex-col"}>
                <Outlet/>
            </main>
        </div>
    )
}

export default Header
