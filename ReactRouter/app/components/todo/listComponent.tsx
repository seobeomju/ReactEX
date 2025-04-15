import {useQuery} from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import {testTodoList} from "~/api/todoAPI";


function TodoListComponent () {

    const[searchParms] = useSearchParams();

    const pageStr = searchParms.get("page") || "1"
    const sizeStr = searchParms.get("size") || "10"

    console.log("PageStr:" + pageStr, "sizeStr: "+ sizeStr);

    // Queries
    const query = useQuery({
        queryKey: ['todos'],
        queryFn: () => testTodoList(pageStr,sizeStr)
    })

    const {isFetching, data, error } = query

    return (
        <div>
            <div className={'text-4xl'}>Todo List Component </div>
            <div className={'text-3xl bg-amber-600'}> {isFetching && <h1>Loading.........</h1>}</div>

            {data && <div className={'text-2xl'}>List 출력</div>}
        </div>
    )
}

export default TodoListComponent