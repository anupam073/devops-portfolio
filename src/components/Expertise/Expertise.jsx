import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/qa.svg'
import Image3 from '../../assets/devops.svg'

const data = [
    // {
    //     id: 1,
    //     image: Image1,
    //     title: "Responsive design",
    //     description:
    //         "Ensuring that the website/mobile app is responsive across all platforms",
    // },
    {
        id: 2,
        image: Image2,
        title: "QA Automation",
        description:
            "Improving software quality with automated testing, ensuring faster, accurate results, reducing manual work, and boosting overall development efficiency.",
    },
    {
        id: 3,
        image: Image3,
        title: "DevOps",
        description:
            "Streamlining development and operations through process automation, collaboration, and continuous integration for faster, reliable software delivery.",
    },
];

const Expertise = () => {
    return (
        <section className="services container section" id="Expertise">
            <h2 className="section__title">Expertise</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Expertise