
export const dynamic = 'force-dynamic';

async function TodoListPage({searchParams}: {searchParams:Promise<any>} ) {


    const search = await searchParams

    console.log(search)

    const page = search['page'] || "1"
    const size = search['size'] || "10"

    const query = new URLSearchParams({page,size}).toString()

    //API 서버에서 데이터 패치
    const res = await fetch(
        `http://localhost:8080/api/todo/list?${query}`,
        {next: {revalidate: 60 } }
    )
    const data = await res.json()

    console.log(data)

    return (

        <div>
            <div className={'text-4xl'}>Todo List Page</div>
        </div>
    )

}


export default TodoListPage