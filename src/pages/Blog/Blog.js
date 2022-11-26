import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useTitle from '../../hooks/useTitle';


const Blog = () => {
    useTitle('Blog');

    return (
        <div className='m-5'>
            <h3 className='fw-normal text-center mb-1'>Some questions related to web development.</h3>
            <div className='p-5 m-5'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> What are the differences between SQL and NoSQL?

                        </Accordion.Header>
                        <Accordion.Body>
                            The critical differences between SQL vs NoSQL are:
                            <ol>
                                <li>SQL databases are relational, NoSQL databases are non-relational.
                                </li>
                                <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                                </li>
                                <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                                </li>
                                <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                                </li>
                                <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                                </li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item  >
                </Accordion>
                <Accordion className='mt-2' defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is JWT, and how does it work?
                        </Accordion.Header>
                        <Accordion.Body>
                            JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it's an encoded JSON containing a set of claims and a signature.
                            Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion>
                    <Accordion className='mt-2' defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is the difference between javascript and NodeJS?
                            </Accordion.Header>
                            <Accordion.Body>
                                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.
                                Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. NodeJS is a Javascript runtime environment.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                    <Accordion className='mt-2' defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How does NodeJS handle multiple requests at the same time?
                            </Accordion.Header>
                            <Accordion.Body>
                                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;