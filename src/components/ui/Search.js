import {useState} from 'react'

const Search = (props) => 
{
    const [text, setText] = useState('')

    function onChange(query)
    {
        setText(query)
        props.getQuery(query)
    }

    return (
        <section className="search">
            <form>
                <input value = {text} onChange={(e)=> onChange(e.target.value)} type='text' className='form-control' placeholder='Search characters' autoFocus/>
            </form>
        </section>
    )
}

export default Search
