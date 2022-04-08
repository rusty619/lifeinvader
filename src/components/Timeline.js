import { useEffect, useState } from 'react'

const Timeline= () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
       // console.log("Rendering Timeline...")
        // IIFE: immediately invoked function expression
        (async() => {
            let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
            let res = await req.json()
            setPost(res)
        })()
    }, [])

    return(
        <div>
            <h2>Timeline</h2>    
            {
                posts.map((element) => {
                    return(
                        <div>
                            <p>Post by {element.username}</p>
                            <p>{element.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Timeline;