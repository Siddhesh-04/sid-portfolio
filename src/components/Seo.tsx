import { Helmet } from "react-helmet";

interface SeoProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;         
    twitterImage?: string;  
}


const Seo: React.FC<SeoProps> = ({
    title = "My Portfolio",
    description = "hello!, I'm Siddhesh Suthar, Welcome to my portfolio website.",
    keywords = "portfolio, developer, projects, react, typescript, Siddhesh Suthar,,siddhesh-suthar, siddhesh-04, Robotics Portfolio, AI Portfolio, Automation, Machine Vision, Embedded Systems, Gujarat, India, Student, Engineer, Projects, SiddheshResume, Government Engineering College Gandhinagar, GEC Gandhinagar, Siddhesh Gec",
    image = "/assets/og-image.png",
    twitterImage = "/assets/twitter-card.png",
}) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={twitterImage} />
    </Helmet>
);

export default Seo;
