import React from 'react'
import ReactStarsRating from 'react-awesome-stars-rating';
import { useSelector } from 'react-redux'


const Comment = ({ comments }) => {
    const comentaries = useSelector(state => state.comments.comments)

    return (
        <div>
            {
                comentaries.map((item, i) => (
                    <div key={i} className="comment">
                        <div className="comment__user">
                            <div className="comment__user-avatar">
                                <img src="/avatar.png" alt="avatar" />
                            </div>
                            <div className="comment__user-name">
                                ALex A.N
                            </div>
                            <div className="comment__user-data">
                                15.12.2021
                            </div>
                        </div>
                        <div className="comment__raiting">
                            <div className="comment__raiting-tag">
                                Общий:
                                <ReactStarsRating
                                    isEdit={false}
                                    value={item.raiting}
                                    size={20}
                                    primaryColor={'#1875f0'} />
                            </div>
                        </div>
                        {
                            item.comment.map((commm, i) => (
                                <div key={i} className="comment__dignity">
                                    <div className="comment-title">
                                        {commm.name}
                                    </div>
                                    {commm.value}
                                </div>
                            ))
                        }
                        {item.files &&
                            <div className="comment__dignity">
                                <div className="comment-title">
                                    Фотографии
                                </div>
                                <div className="comment__images">
                                    {
                                        item.files.map((image, i) => (
                                            <div key={i} className="comment__images-item">
                                                <img src={image} alt="img" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </div>

                ))
            }
        </div>
    )
}

export default Comment
