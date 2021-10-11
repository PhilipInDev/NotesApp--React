const Column = (props: { columnName: string }) => {
    return (
        <div className={'table__col'}>
            <h3>{props.columnName}</h3>
        </div>
    )
}

export default Column;