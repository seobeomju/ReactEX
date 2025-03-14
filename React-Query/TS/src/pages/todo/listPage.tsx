import TopMenuComponent from "../../components/menu/topMenuComponent.tsx";
import {useQuery} from "@tanstack/react-query";
import {getTodoList} from "../../api/todoAPi.tsx";

function ListPage() {

    //일반적인 경우에는 isFetching으로 처리해라
    const {isFetching,data} = useQuery<PageRequestDTO<TodoListDTO>>({
        queryKey: ['todo/list'],
        queryFn: getTodoList,
        staleTime: 1000*10,
        })

    return (

        <div>
            {isFetching && <h1>Loading.....</h1>}
            <TopMenuComponent/>
            <div>Todo List Page</div>
            <ul>
                {data?.dtoList?.map(todo=>
                    <li key={todo?.tno}>
                        {todo.tno}- {todo.title}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ListPage;