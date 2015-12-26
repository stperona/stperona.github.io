'use strict';

import React  from 'react';
import ReactDOM from 'react-dom';

import Gallery from './gallery.jsx';

let ObsLink = (props) => {
  return <a href={props.href}><i className={'fa ' + props.icon}></i> {props.text}</a>;
};

let emailLink = <ObsLink href="mailto:stephenperona@gmail.com"
                          text="stephenperona@gmail.com"
                          icon="fa-envelope-o" />

let twitterLink = <ObsLink href="https://twitter.com/stephenperona"
                            text="@stephenperona"
                            icon="fa-twitter" />

ReactDOM.render(emailLink, document.getElementById('contact-email'));
ReactDOM.render(emailLink, document.getElementById('contact-email-small'));

ReactDOM.render(twitterLink, document.getElementById('contact-twitter'));
ReactDOM.render(twitterLink, document.getElementById('contact-twitter-small'));

ReactDOM.render(<Gallery heading="Modeling and Animation" />, document.getElementById('gallery-modeling'));
ReactDOM.render(<Gallery heading="Illustration" />, document.getElementById('gallery-illustration'));
ReactDOM.render(<Gallery heading="Toys & 3D Printing" />, document.getElementById('gallery-toys'));
