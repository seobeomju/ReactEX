

export default function TodoAddComponent () {
    return (
        <form className="space-y-5">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" id="title" name="title" placeholder="제목을 입력하세요"
                       className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div>
                <label htmlFor="writer" className="block text-sm font-medium text-gray-700 mb-1">Writer</label>
                <input type="text" id="writer" name="writer" placeholder="작성자 이름"
                       className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input type="date" id="dueDate" name="dueDate"
                       className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="pt-4">
                <button type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                    제출하기
                </button>
            </div>
        </form>
    )
}