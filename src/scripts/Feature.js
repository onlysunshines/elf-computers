import React from 'react';
import FeatureOps from './FeatureOps';
import slugify from 'slugify';

class Feature extends React.Component {
    render() {
        const features = this.props.features;

        const featureList = Object.keys(features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            const options = features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return <FeatureOps
                    item={item}
                    key={itemHash}
                    itemHash={itemHash}
                    name={item.name}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                    featureOp={feature}
                    cost={item.cost}
                />
            });

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        })
        return featureList;
    }
}

export default Feature;