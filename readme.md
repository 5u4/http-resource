# Http Resource

## Description

Transform http resources to a JSON response.

## Install

```bash
$ npm install @senhung/http-resource
```

## Example

### Example resource definition

```js
const { Resource, ResourceCollection } = require('@senhung/http-resource');

/**
 * An example user resource class for testing
 */
class UserResource extends Resource
{
    toJson(resource) {
        return {
            id: resource._id,
            username: resource.username,
        }
    }
}

module.exports = {
    make:       (resource)  => new UserResource(resource),
    collection: (resources) => new ResourceCollection(resources, UserResource),
};
```

### Example usage

```js
const UserResource = require('./UserResource');

/**
 * A dummy user for testing
 */
const user = {
    _id: 'randomidstring',
    username: 'test_user',
    password: 'somehashedvalue',
    __v: 0,
};

/**
 * A dummy user for testing
 */
const user2 = {
    _id: 'anotheruserid',
    username: 'second_user',
    password: 'somehashedvalue',
    __v: 0,
};

/**
 * A dummy user collection
 */
const users = [user, user2];

/**
 * A show api
 */
router.get('/:userId', (req, res) => {
    res.json(UserResource.make(user).response());
});

/**
 * An index api
 */
router.get('/', (req, res) => {
    res.json(UserResource.collection(users).response());
});
```

### Example output

```
GET /:userId

Response:

{
    data: {
        id: 'randomidstring',
        username: 'test_user'
    }
}
```

```
GET /

Response:

{
    data: [
        {
            id: 'randomidstring',
            username: 'test_user'
        },
        {
            id: 'anotheruserid',
            username: 'second_user'
        }
    ]
}
```
