import React, { useState,useEffect } from 'react';
import { Card, Image } from 'react-bootstrap';
import styles from './style.module.css';
import moment from 'moment';

const Comment = ({ comments }) => {
    const [expandComment, setExpandComment] = useState(false);

    useEffect(() => {
        setExpandComment(false);
    }, [comments]);

    return (
        <div>
            <Card.Body>
                <div className={styles.commentContainer}>
                    <p
                        onClick={() => setExpandComment(!expandComment)}
                    >
                        {
                        Array.isArray(comments) && comments.length
                        ? comments.length + ' replies'
                        : '0 replies'
                        }
                    </p>
                    {
                    expandComment && Array.isArray(comments)
                    ? onRenderComments(comments)
                    : null
                    }
                </div>
            </Card.Body>
        </div>
    );
}

const onRenderComments = comments => {
    let result = null;
    if(Array.isArray(comments) && comments.length) {
        result = comments.map((c, i) => (
            <div className={styles.commentItem} key={i}>
                <Image
                    className={styles.image}
                    src={process.env.PUBLIC_URL + '/images/avatar.jpg'}
                    roundedCircle
                />
                <div className={styles.commentDetail}>
                    <div className={styles.author}>
                        <p>{c.owner} <span>{moment(c.created_at).fromNow()}</span></p>
                    </div>
                    <div>
                        <p>
                            {c.content}
                        </p>
                    </div>
                    <div>
                        <p>reply to</p>
                    </div>
                </div>
            </div>
        ));
    }
    return result
}

export default Comment;