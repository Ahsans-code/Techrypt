import React from 'react'
import "../../App.css"
import logos from '../../assets/logo/logos'
import './Services.css'

const Services = () => {
    const CardContent = [
        {
            title: 'AI-Powered Business Automation',
            img: logos.image1, // You might want to use a different icon for this category
            content: 'Harness the power of AI to automate and optimize your business processes. Our solutions include digital campaign acceleration and intelligent influencer marketing to maximize your ROI through data-driven strategies.'
        },
        {
            title: 'Web & App Development',
            img: logos.image7,
            content: 'From stunning websites to functional apps, we create digital experiences that captivate users and perform flawlessly. Our web design services combine aesthetics with technical excellence for optimal results.'
        },
        {
            title: 'Social Media & Marketing',
            img: logos.image3,
            content: 'Comprehensive social solutions including meme marketing, content creation, video marketing, and platform management. We craft viral-worthy strategies tailored to each platform\'s unique audience and algorithms.'
        },
        {
            title: 'Branding & Design',
            img: logos.image4,
            content: 'Complete visual identity services from brand strategy to execution. We deliver cohesive branding, eye-catching VFX, and post-production that makes your content stand out in any medium.'
        }
    ];
    return (
        <div>
        <section className='services-section'>
            <h1 className='services-heading'>
                Our Services
                {/* <span>
                    <img className='heading-img' src={logos.head_image} alt="" /> o
                </span> */}
            </h1>

            <div className='services-grid'>
                {CardContent.map((content, index) => (
                    <div key={index} className='service-card'>
                        <div className='service-image-container'>
                            <img src={content.img} alt="" />
                        </div>
                        <h2 className='service-title'>{content.title}</h2>
                        <p className='service-description'>{content.content}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
    )
}

export default Services