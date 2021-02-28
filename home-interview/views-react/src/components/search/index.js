import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostItem from '../postItem';
import styles from './style.module.css';

const Search = () => {
    const { searchValue } = useLocation();
    console.log(useLocation());
    const postsSelector = useSelector(state => state.posts);
    const [filteredPosts, setFilteredPost] = useState([]);

    function onRenderPosts(posts) {
        let result = null;
        if(Array.isArray(posts) && posts.length) {
            result = posts.map((p, i) => (
                <PostItem post={p} index={i} key={i}/>
            ));
        }
        return result;
    }

    useEffect(() => {
        async function handleFilterPosts() {
            const { posts } = postsSelector;
            if(Array.isArray(posts) && posts.length && searchValue && searchValue.length) {
                const filteredArray = posts.filter((p, i) => {
                    const title = p.title.toLowerCase();
                    return title.includes(searchValue.toLowerCase());
                });
                console.log(filteredArray);
                setFilteredPost(filteredArray);
            }
        }
        
        handleFilterPosts();
    }, [searchValue]);

    return (
        <div className={styles.container}>
            <h1 style={{textAlign: 'center'}}>Result: {searchValue}</h1>
            {onRenderPosts(filteredPosts)}
        </div>
    );
}

export default Search;