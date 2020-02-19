import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'dnvbdskjvhsdkl', likesCount: 12},
                {id: 2, message: 'dnvbdskjvhsdkl', likesCount: 15}
            ],
            newPostText: 'wow!!!'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Tolik'},
                {id: 2, name: 'Tolik'},
                {id: 3, name: 'Tolik'},
                {id: 4, name: 'Tolik'}
            ],
            messages: [
                {id: 1, message: 'Tolik'},
                {id: 2, message: 'Tolisvak'},
                {id: 3, message: 'Toxczclik'},
                {id: 4, message: 'Tolcasik'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }
}




export default store