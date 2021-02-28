import React from 'react';
import Comment from '../comment';
import { Card, Badge } from 'react-bootstrap';
import styles from './style.module.css';
import moment from 'moment';

const PostItem = ({ post, index }) => {
    return (
        <Card className={styles.cardContainer} key={index}>
            <h1>{post.title}</h1>
            <Card.Body className={styles.introduction}>
                <div>
                    <div>Author: Han Solo</div>
                    <div>Create at: {moment(post.created_at).format('DD/MM/YYYY')}</div>
                </div>
                <div className={styles.tagContainer}>
                    {Array.isArray(post.tags) && post.tags.length
                     ? post.tags.map((t, i) => (
                        <Badge key={i} variant="info" className={styles.tags}>{t}</Badge>
                     ))
                     : null
                    }
                </div>
            </Card.Body>
            <Card.Body>
                {post.content && post.content.length > 100
                    ? post.content.substring(0, 100) + '...'
                    : post.content
                }
            </Card.Body>
            <Comment comments={post.comments}/>
        </Card>
    );
}

export default PostItem;