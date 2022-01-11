import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

// https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=3484s
// 1:23

function App() {

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'Java Script',
            body: 'Description'
        },
        {
            id: 2,
            title: 'React',
            body: 'Library'
        },
        {
            id: 3,
            title: 'CSS',
            body: 'Styles'
        },
    ])

    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {
        console.log('function ---> getSortedPosts()')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>

            {sortedAndSearchedPosts.length
                ? <PostList posts={sortedAndSearchedPosts} title={'Posts'} removePost={removePost}/>
                : <h1 style={{textAlign: 'center'}}>
                    Posts are not found
                </h1>
            }

        </div>
    );
}

export default App;
