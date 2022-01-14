import React from 'react'
import { HashLink } from 'react-router-hash-link';
import AddCommentForm from './AddCommentForm'
import Comment from './Comment'
import { useSelector } from 'react-redux'

const Comments = () => {
    const [formIsActive, setFormIsActive] = React.useState(false)
    const comentaries = useSelector(state => state.comments.comments)

    return (
        <div className="main__product--more" id="comments">

            {!formIsActive &&
                <HashLink to='#comments'>
                    <div onClick={() => setFormIsActive(true)} className="add_coment_btn">
                        Оставить отзыв
                    </div>
                </HashLink>
            }

            {formIsActive ?
                <AddCommentForm setFormIsActive={setFormIsActive} />
                :
                comentaries.length ? <Comment /> :
                    <div style={{marginTop: '40px'}} className="spec_name">
                        Отзывовы на данный товар отсутствуют, оставь первый отзыв!
                    </div>
            }

        </div>
    )
}

export default Comments
