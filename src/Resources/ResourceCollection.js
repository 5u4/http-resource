const Resource = require('./Resource');

class ResourceCollection extends Resource
{
    constructor(resources, resourceClass) {
        super();
        this.resources     = resources;
        this.resourceClass = resourceClass;
    }

    /**
     * Transform the collection to json
     * 
     * @returns {Object} The transformed collection
     */
    toJson() {
        const resourceInstance = new this.resourceClass();

        return this.resources.map(resource => resourceInstance.toJson(resource));
    }
}

module.exports = ResourceCollection;
