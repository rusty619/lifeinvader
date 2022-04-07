import { useEffect, useState } from 'react'

const Timeline= () => {
    const [posts, setPost] = useState([])

    useEffect( async() => {
        console.log("Rendering Timeline...")
        let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
        let res = req.json()
        setPost(res)
    }, [])

    return(
        <div>
            <h2>Timeline</h2>    
        </div>
    )
}

export default Timeline;