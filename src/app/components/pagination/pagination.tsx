import './pagination.scss';

interface Paginate {
    pagination: {
        page: number;
        limit: number;
        totalElements: number;
    };
    onPageChange: any;
}

function Pagination({ pagination, onPageChange }: Paginate) {
    const { page, limit, totalElements } = pagination;
    const totalPages = Math.ceil(totalElements / limit);

    function handleOnClick(newPage: any): undefined {
        if (onPageChange) onPageChange(newPage);
    }

    return (
        <div className="paginationContainer">
            <button
                disabled={page <= 1}
                onClick={() => handleOnClick(page - 1)}
            >
                Prev
            </button>
            <button
                disabled={page >= totalPages}
                onClick={() => handleOnClick(page + 1)}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
