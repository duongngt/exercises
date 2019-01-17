import React from 'react';

    const Blog = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-md-4"  id={dish.id} key={dish.id}>
                    <a  className="blog-entry" >
                        <img src={dish.img}  style={{backgroundColor:'red'}} alt=""/>
                        <div className="blog-content-body">
                        <div className="post-meta">
                            <span className="author mr-2">
                            <img src="images/person_1.jpg" alt="Colorlib"/>
                            {dish.author}</span>&bullet;
                            <span className="timeup mr-2">{dish.timepost}</span>
                        </div>
                        <h2>{dish.title}</h2>
                        </div>
                    </a> 
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Blog;