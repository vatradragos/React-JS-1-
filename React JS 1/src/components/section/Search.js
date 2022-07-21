import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";

function Search (props) {

    const searchStyle = {
        borderRadius: "50px",
        marginBottom: "20px",
    }

    const clearStyle = {
        borderRadius: "50px",
    }

    const [searchValue, setSearchValue] = useState("");	
	const [products, setProducts] = useState([]);	
	const [filteredProducts, setFilteredProducts] = useState([]);	
	const [isFiltered, setIsFiltered] = useState(false);
	
    useEffect(() => {
        const table = require('./table.json');
		setProducts(table);        
    },[]); 	

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
		setIsFiltered(true);
		setFilteredProducts(products.filter(product => product.currency.includes(e.target.value.toUpperCase())));
    }

    const handleClick_clear = () => {
        setSearchValue("");
		setIsFiltered(false);
    }

    const displayButton = searchValue.length > 0;

    return (
        <div className="row text-center" id="search">
            <div className="col">
                <input style={searchStyle} className="text-center" type="text" value={searchValue} onChange={handleInputChange} />
                {displayButton && <button style={clearStyle} type="button" className="btn btn-warning" id="btn-clear" onClick={handleClick_clear}>Clear</button>}
              
                <table className="table table-striped table-hover table-dark">
                <thead className="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Name</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Exchange</th>
                    </tr>
                </thead>
                <tbody>
				    {isFiltered ? filteredProducts.map((row) => (
						<tr key={row.number}>
							<th scope="row">{row.number}</th>
							<td>{row.currency}</td>
							<td>{row.name}</td>
							<td>{row.symbol}</td>
							<td>{row.exchange}</td>
						</tr>                    
				    )) : products.map((row) => (
						<tr key={row.number}>
							<th scope="row">{row.number}</th>
							<td>{row.currency}</td>
							<td>{row.name}</td>
							<td>{row.symbol}</td>
							<td>{row.exchange}</td>
						</tr>                    
				    ))
					}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Search;