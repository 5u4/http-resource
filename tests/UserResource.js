const { Resource, toResource } = require('../src');

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

module.exports = toResource(UserResource);
