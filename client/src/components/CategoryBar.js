import React, { useContext } from "react";
import {observer} from "mobx-react-lite";
import { Context } from "..";
import ListGroup from 'react-bootstrap/ListGroup';

const CategoryBar = observer(() => {
    const {event} = useContext(Context)
    return (
        <ListGroup className="mt-5">
            {event.categorys.map(category => 
                <ListGroup.Item 
                    style={{cursor: "pointer"}}
                    active ={category.category_id === event.selectedCategory.category_id}
                    onClick={() => event.setSelectedCategory(category)}
                    key={category.category_id}
                >
                    {category.category_name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default CategoryBar;