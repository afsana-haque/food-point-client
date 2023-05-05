import React from 'react';
import { Container } from 'react-bootstrap';
import ReactToPdf from 'react-to-pdf';

const ref = React.createRef();
const Blog = () => {
    return (
        <Container className='mt-4' ref={ref}>
            <h3 className='text-center'> Answer to the Questions</h3>
            <div className='w-25 mx-auto my-5'>
                <ReactToPdf targetRef={ref} filename="foodPoint-blog.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf} className='bg-success p-2 text-white'>Generate pdf</button>
                    )}
                </ReactToPdf>
            </div>
            <div className='py-4 px-2'>
                <h4>1. In the context of software engineering, uncontrolled and controlled components refer to different types of software elements?</h4>
                <p>Answer: uncontrolled and controlled components refer to different types of software elements.Uncontrolled components are those that can be used in a system without any predefined rules or restrictions. These components can be used in any way the developer sees fit and can interact with other components without any predefined rules or restrictions. Examples of uncontrolled components include third-party libraries or frameworks that are added to a project.</p>

                <h4>2. How to validate React props using PropTypes?</h4>
                <p>Answer: PropTypes is a type checking library used to validate the props passed to a component. PropTypes ensures that the props have the expected data type and shape before they are used in the component. Here's an example of how to validate React props </p>

                <h4>3. Tell us the difference between nodejs and express js?</h4>
                <p>Answer: Node.js and Express.js are both widely used technologies in the web development world, but they serve different purposes.Node.js is a JavaScript runtime that allows developers to write server-side JavaScript code. It provides a platform for building scalable and high-performance web applications. Node.js has a built-in event-driven architecture and supports non-blocking I/O, which makes it well-suited for building real-time and data-intensive applications.</p>

                <h4>4. What is a custom hook, and why will you create a custom hook?</h4>
                <p>Answer: A custom hook is a function that starts with the prefix "use" and allows you to reuse stateful logic between components. Custom hooks allow you to abstract away complex logic from your components and keep your code DRY (Don't Repeat Yourself).A custom hook can encapsulate any stateful logic that can be shared across multiple components. This may include handling form submissions, managing timers, or fetching data from an API. By creating a custom hook, you can write reusable code that can be easily shared across different parts of your application.</p>
            </div>
        </Container>
    );
};

export default Blog;