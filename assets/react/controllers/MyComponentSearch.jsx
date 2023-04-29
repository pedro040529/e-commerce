import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super();

        this.state = { 
            search: '',
            selectedCategory: null,
        };
    }

    render() {
        const { search, selectedCategory } = this.state;
        const { categories, products } = this.props;

        return (
            <div>
                <Autocomplete
                    options={categories}
                    getOptionLabel={(option) => option.nombre}
                    onChange={(event, newValue) => {
                        this.setState({ selectedCategory: newValue });
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Categoria"
                            variant="outlined"
                            fullWidth
                        />
                    )}
                />

                <input
                    value={search}
                    onChange={(event) => this.setState({ search: event.target.value })}
                />

                <div className="row">
                    {this.filteredProducts().map(product => (
                        <a key={product.id} href="#">
                            <img src={product.image} alt={product.nombre} />
                            <h4>{product.nombre}</h4>
                            <p>{product.descripcion}</p>
                        </a>
                    ))}
                </div>
            </div>
        );
    }

    filteredProducts() {
        const { search, selectedCategory } = this.state;
        const { products } = this.props;

        return products.filter((product) => {
            const matchesSearch = product.nombre.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = !selectedCategory || product.categoria.id === selectedCategory.id;

            return matchesSearch && matchesCategory;
        });
    }
}
