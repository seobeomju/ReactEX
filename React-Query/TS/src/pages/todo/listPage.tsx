import TopMenuComponent from "../../components/menu/topMenuComponent.tsx";
import {useQuery} from "@tanstack/react-query";
import {getTodoList} from "../../api/todoAPi.tsx";

function ListPage() {

    useQuery({
        queryKey: ['todo/list'],
        queryFn: getTodoList,
        staleTime: 1000*10,
        })

    return (

        <div>
            <TopMenuComponent/>
            <div>Todo List Page</div>
        </div>
    );
}

export default ListPage;