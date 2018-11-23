import React from 'react';
export const ProductItem = ({ id, title, description }) => (
    <div className="col-sm-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
            </div>
        </div>
    </div>
);
