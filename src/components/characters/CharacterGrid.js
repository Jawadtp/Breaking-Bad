import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = (props) => 
{
    return props.isLoading?<Spinner/>:
    <section className="cards">
        {props.items.map((item)=> 
        {
            return <CharacterItem key={item.char_id} item={item}/>
        })}
    </section>
}

export default CharacterGrid
