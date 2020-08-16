import React from 'react';

class CouplePerson extends React.Component {
    constructor(props) {
        super(props);

        this.person = props.person
        this.index = props.index;
    }

    render = () => {
        const {name, photo} = this.person;
        
        return (
            <article ref={this.props.innerRef} className="couple__person">
                <figure className="couple__figure">
                    <img className="couple__image" src={photo} alt="Man" />
                </figure>
                <div className="couple__name">
                    {name}
                </div>
            </article>
        )
    }

}

// parent is able to get ref from child component
export default React.forwardRef((props, ref) => <CouplePerson innerRef={ref} {...props} />);