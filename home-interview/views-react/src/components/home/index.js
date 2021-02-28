import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './style.module.css';
import Pagination from '../pagination';
import HomeSpinner from '../spinner';
import PostItem from '../postItem';
import { getComments } from '../../api/api';

const Home = () => {
    const postsSelector = useSelector(state => state.posts);
    const [subPosts, setSubPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const postsPerPage = 1;

    const handleChangePage = data => {
        const selectedPage = data.selected;
        const { posts } = postsSelector;
        setCurrentPage(selectedPage);
        getPostsBaseOnCurrentPage(selectedPage, posts);
    }

    const getPostsBaseOnCurrentPage = async (currentPage, posts) => {
        let subPosts1 = [];
        try {
            setLoading(true);
            for(let i = currentPage * postsPerPage; i < (currentPage + 1) * postsPerPage; i++) {
                if(i < posts.length) {
                    const comments = await getComments(posts[i]._id);
                    subPosts1.push({
                        ...posts[i],
                        comments
                    });
                }
            }
            setSubPosts(subPosts1);
            setLoading(false);
        }
        catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        const { posts } = postsSelector;
        async function handleData(posts) {
            try {
                if(Array.isArray(posts) && posts.length) {
                    setLoading(true);
                    const pages = Math.ceil(posts.length / postsPerPage);
                    let subPosts1 = [];
                    for(let i = 0; i < postsPerPage; i++) {
                        if(i < posts.length) {
                            const comments = await getComments(posts[i]._id);
                            subPosts1.push({
                                ...posts[i],
                                comments
                            });
                        }
                    }
                    //const subPosts1 = getPostsBaseOnCurrentPage(currentPage, posts);
                    setSubPosts(subPosts1);
                    setTotalPages(pages);
                    setLoading(false);
                }
            }
            catch(err) {
                console.log(err);
                setLoading(false);
            }
        }

        handleData(posts);
    }, [postsSelector]);

    return (
        <div className={styles.container}>
            {postsSelector.fetchingData
             ? <HomeSpinner />
             : <>
                {loading ? <HomeSpinner /> : onRenderPost(subPosts)}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handleChangePage={handleChangePage}
                />
               </>
            }
        </div>
    );
}

const onRenderPost = posts => {
    let result = null;
    if(Array.isArray(posts) && posts.length) {
        result = posts.map((p, i) => (
            <PostItem post={p} index={i} key={i}/>
        ));
    }
    return result;
}

export default Home;