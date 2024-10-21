import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.svg';

const Blog = () => {
    return (
        <section className="blog container section" id="Blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Tech</span></a>
                        <a href="https://www.linkedin.com/posts/anupammohanty07_ai-softwareengineering-softwaretesting-activity-7148225303163617280-L6Pt?utm_source=share&utm_medium=member_desktop"><img src={Image1} alt="Blog Image" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title"> AI's Impact on Software Engineering & Testing!</h3>
                        <div className="blog__meta">
                            <span>January, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Anupam</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;
