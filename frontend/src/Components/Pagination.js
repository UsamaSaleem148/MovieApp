import React from 'react';

const Pagination = (props) => {
    const PageLinks = []
    
    console.log(props.pages+ " " + props.currentPage);

    for(let i = 1; i <= props.pages + 1; i++){
        let active = props.currentPage === i ? 'active' : '';
        PageLinks.push(
            // eslint-disable-next-line
        <li className={active} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>
        )
    }

    return(
        <div className="container">
            <div className="row paginationRow">
                <ul className="pagination">
                {/* eslint-disable-next-line */}
                    { props.currentPage > 1 ? <li onClick={() => props.nextPage(props.currentPage - 1)}><a href="#">Prev</a></li> : '' }
                    { PageLinks }
                    {/* eslint-disable-next-line */}
                    { props.currentPage < props.pages + 1 ? <li onClick={() => props.nextPage(props.currentPage + 1)}><a href="#">Next</a></li> : '' }
                </ul>
            </div>
        </div>
    )
}


export default Pagination;