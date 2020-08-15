import React from 'react';

class CouplePerson extends React.Component {
    constructor(props) {
        super(props);

        this.person = props.person
        this.index = props.index;
    }

    render = () => {
        const {name, photo, description} = this.person;
        
        return (
            <article ref={this.props.innerRef} className="couple__person">
                <label className="couple__label" htmlFor={`person${this.index}`}>
                    <figure className="couple__figure">
                        <img className="couple__image" src={photo} alt="Man" />
                    </figure>
                    <div className="couple__description">
                        {description}
                    </div>
                    <div className="couple__name">
                        {name}
                    </div>
                </label>
            </article>
        )
    }

}

// parent is able to get ref from this component

export default React.forwardRef((props, ref) => <CouplePerson innerRef={ref} {...props} />);