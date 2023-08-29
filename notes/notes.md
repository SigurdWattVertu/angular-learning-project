## injectable

When we use injectable it means that dependency injection is possible within this class

When to use ?



### A Service

-- This is where the Business Logic should live -- (Display logic goes into the component)

Can inject a Service into a Component or another Service (using constructor injection)

The core of a service is just a class
In order for a service to participate in the Angular ecosystem we need to mark it with the Injectable decorater (as opposed to the Component decorater)