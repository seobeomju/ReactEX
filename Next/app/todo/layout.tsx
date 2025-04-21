
function TodoLayout({children,}: Readonly<{children: React.ReactNode;}>){
    return(
        <div>
            <div>Todo Layout</div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default TodoLayout