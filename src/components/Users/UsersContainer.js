import React from 'react'
import s from './Users.module.css'

const Users = (props) => {

    props.setUsers([
            {
                id: 1,
                photoURL: 'https://pp.userapi.com/cof2rXjDcXtN53vEk4k4t5u13IalBwjrywBN4A/plbrQgILr7U.jpg?ava=1',
                followed: true,
                fullName: 'Tolik',
                status: 'iii',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoURL: 'https://pp.userapi.com/cof2rXjDcXtN53vEk4k4t5u13IalBwjrywBN4A/plbrQgILr7U.jpg?ava=1',
                followed: false,
                fullName: 'Lenka',
                status: 'iii',
                location: {city: 'Homel', country: 'Belarus'}
            }
        ]
    )

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoURL} className={s.photo}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                             <div>{u.location.country}</div>
                             <div>{u.location.city}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>

}

export default Users