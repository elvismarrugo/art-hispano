import "firebase/firestore";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Busca tu producto ideal..."
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};
export default Search;

// class Search extends Component {

//     state={
//         busqueda: ''
//         campeones: ''
//     }

//     onChange=async e=>{
//         e.persist();
//         await this.setState({busqueda: e.target.value});
//         console.log(this.state.busqueda);
//     }

//     filtrarElementos=()=>{
//         var search=firebase.filter(item=>{
//             if(item.año)
//         })
//     }

//     componentDidMount(){
//         this.setState({firebase:});

//     }

//     render(){
//         return (
//         <section className={styles.nav_containerInput}>
//             <input 
//             type="text" 
//             placeholder="Busca tu producto ideal..." 
//             name="busqueda"
//             value={this.state.busqueda}
//             onChange={this.onChange}
//             />
//             <button title="Buscar">
//               <img src="search.svg" alt="search" />
//             </button>
//         </section>
           
//         )
//     }
// }

// export default Search