import React from 'react';
import { ProductItem } from './ProductItem';

class Content extends React.Component {

    state = {
        searchRequest: '',
        filteredProducts: [],
        isLoading: false,
    }

    onSearchChange = (event) => {
        const text = event.target.value;
        this.setState({
            searchRequest: text
        });
    }

    onSearchSubmit = (event) => {
        event.preventDefault(); // поиск по кнопке enter

        this.setState({
            isLoading: true
        })

        const { searchRequest } = this.state;
        fetch(`http://localhost:4000/products?filter=${searchRequest}`)
            .then((response) => {
                return response.json();
            })
            .then( (result) => {
                this.setState({
                    filteredProducts: result,
                    isLoading: false
                });
            })
            .catch((err) => {
                console.log('ERROR');
                console.log(err);
                this.setState({
                    isLoading: false
                })
            });
    }

    render() {
        const productsList = () => this.state.filteredProducts
            .filter(product => product.title.includes(this.state.searchRequest)) //заголовок содержит то, что мы ввели, вернет true и останется только этот элемент
            .map(product => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description} />
            ));

        return (
            <div>
                <div className="row">
                    <div className="col-sm-4">
                        <form onSubmit={this.onSearchSubmit}>
                            <input
                                value={this.state.searchRequest}
                                onChange={this.onSearchChange}
                                type="text"
                                className="form-control" />
                            <button type="submit" className="btn btn-primary"> Search </button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.isLoading
                        ? <h3>Загрузка</h3>
                        : productsList()
                    }
                </div>
            </div>
        );
    }
};

export default Content;