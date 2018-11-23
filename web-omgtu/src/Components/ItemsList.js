import React from 'react';

export const ItemsList = ({items}) => (
    <div className="itemsList">
        <ul>
            {items.map(item => (
                <li>
                    <input type="checkbox" checked={item.isComplete} />
                    {item.title}
                </li>
            ))}
        </ul>
    </div>
);