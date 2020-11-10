import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class FeatureOps extends React.Component {

    render() {
        const { itemHash, name,
            updateFeature, selected,
            featureOp, cost, item } = this.props;
        return (
            <div key={itemHash}
                className="feature__item">
                <input
                    type="radio"
                    id={slugify(name)}
                    className="feature__option"
                    name={slugify(name)}
                    onChange={() => updateFeature(featureOp, item)}
                    checked={name === selected[featureOp]['name']}
                />
                <label htmlFor={slugify(name)} className="feature__label">
                    {name} ({USCurrencyFormat.format(cost)})
                </label>
            </div>
        );
    }
}

export default FeatureOps;