import React from 'react';
import FeatureStore from './FEATURESStore';
import Feature from './Feature';

class FeatureList extends React.Component {
    state = {
        features: FeatureStore
    }

    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Feature features={this.state.features}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}/>
            </form>
        )
    }
}

export default FeatureList;