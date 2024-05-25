import React  from 'react';
import ReactDOM  from 'react-dom/client';

const heading = React.createElement('h1',{},'Hello');

const heading2 = (
    <div>
        <h2>Ketan Patil</h2>
    </div>
)

const ReactFunctionalomponent = () => {
    return (
        <div>
            {heading2}
            <h2>Functional component</h2>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactFunctionalomponent/>)