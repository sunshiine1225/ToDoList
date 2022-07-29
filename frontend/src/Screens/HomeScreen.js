
import { Link } from "react-router-dom";
import Dlt from "../components/delete";
import useFetch from "../useFetch";
import { BiBookAdd } from 'react-icons/bi';
import { AiTwotoneDelete } from 'react-icons/ai';

const Home = () => {
  const { data, loading, error } = useFetch("/lists");
  
  return (
    <div className="home">
        <div className="title-h">
            <h1>All Tasks !!</h1>
        <Link to ="/create"><div className="new">
            
            <h><BiBookAdd/> <span>Add</span> </h></div></Link></div>
        
        <div className="recents">Recents</div>
        <br/><br/>
      {(error.length > 0 && <p>{error} </p>) ||
        (loading && <p> loading ....</p>)}
      {!loading && (
        <div className="abc">
          {data.map((d) => (
            <div key={d._id} className="task-preview">
              <h2>{d.title}</h2> <div className="delete"><button
                id={d._id}
                onClick={(e) => {
                  Dlt(e.target.id);
                }}
              >
                <AiTwotoneDelete/>
              </button> </div><p>{d.details}</p>
              
              
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
