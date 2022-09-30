import PostHead from "../../components/PostHead";
import posts from "../../data/posts";
import styles from "../../styles/Home.module.css"

export function getServerSideProps({ params }) {
    const { slug } = params;
    const post = posts?.find((p) => p.slug === slug);
    return {
        props: {
            post
        }
    };
}

const Post = ({ post }) => {

    return (
        <div className={styles.container}>
            <div>
                <PostHead {...post} />
                <h1>{post.title}</h1>
                <p>{post.subtitle}</p>
            </div>
        </div>
        
    )
}

export default Post;