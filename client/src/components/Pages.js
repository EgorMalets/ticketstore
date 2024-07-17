import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
    const {event} = useContext(Context);
    const pageCount = Math.ceil(event.totalCount / event.limit)
    const pages = []

    for(let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return(
        <Pagination className="mt-3" style={{marginLeft: 90}}>
            {pages.map(page => 
                <Pagination.Item active={event.page === page} onClick={() => event.setPage(page)}>{page}</Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;