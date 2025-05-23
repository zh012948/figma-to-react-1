import '../styles/Page5.css'
import BlogCard from '../components/BlogCard'
import blog1 from '../assets/images/blog/blog1.png'
import blog2 from '../assets/images/blog/blog2.png'
import blog3 from '../assets/images/blog/blog3.png'
function Page5() {
    return (
        <>
            <div className="page5-container">
                <p className="heading">Caring is the new marketing</p>
                <p className="blog-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus amet <br /> expedita enim in minus error nemo quibusdam eveniet voluptatum! Autem vitae, <br /> molestiae dignissimos voluptatem, et facilis odio</p>


                <div className="blog-container">
                    <BlogCard image={blog1} text="Creating Streamlined Safegaurading Process with OneRen" />
                    <BlogCard image={blog2} text="What are your safeguarding responsibilities and how can you manage them?" />
                    <BlogCard image={blog3} text="Revamping the Membership Model with Triathlon Australia" />

                </div>
            </div>
        </>
    )
}


export default Page5