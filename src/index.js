/**
 * Convert a resource class to resource that can be used
 * 
 * @param {String} resourceClass The resource class
 * 
 * @returns {Object} A make function for creating a resource and a collection
 *                   for creating a set of resources
 */
const toResource = (resourceClass) => {
    return {
        make: (resource) => new resourceClass(resource),
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
