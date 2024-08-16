import './list.scss';
// import { listData } from '../../lib/dummydata';
import Card from "../../components/card/Card"; 

const List = ({posts}) => {
  return (
    <div className="list">
        {posts.map(item=>(
            <Card key={item.id} item={item}/>
        ))}
    </div>
  )
  // <div className='list'>
  // {listData.map(item=>(
  //   <Card key={item.id} item={item}/>
  // ))}
  // </div>
}

export default List