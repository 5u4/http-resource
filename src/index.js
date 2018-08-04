/**
 * Convert a resource class to resource that can be used
 * 
 * @param {String} resourceClass The resource class
 * 
 * @returns {{make: Function, collection: Function}}
 */
const toResource = (resourceClass) => {
    return {
        make:       (resource)  => new resourceClass(resource),
        collection: (resources) => new ResourceCollection(resources, resourceClass),
    }
};

/**
 * The resource class
 */
const Resource = require('./Resources/Resource');

/**
 * The resource collection class
 */
const ResourceCollection = require('./Resources/ResourceCollection');

module.exports = {
    toResource,
    Resource,
    ResourceCollection,
};
