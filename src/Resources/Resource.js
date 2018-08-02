class Resource
{
    constructor(resource) {
        this.resource = resource;
        this.wrapper  = 'data';
    }

    /**
     * Convert a resource to json
     * 
     * @param {any} resource The resource that is going to be transformed
     * 
     * @returns {Object} The json format of the resource
     */
    toJson(resource) {
        return resource.toJson();
    }

    /**
     * Response an object
     * 
     * @returns {Object} The transformed resource
     */
    response() {
        return this.wrap(this.toJson(this.resource));
    }

    /**
     * Wrap data with wrapper if wrapper is set
     * 
     * @param {Object} data The data part of the response
     * 
     * @returns {Object} The wrapped data
     */
    wrap(data) {
        let res = {};

        if (this.wrapper) {
            res[this.wrapper] = data;
        } else {
            res = data;
        }

        return res;
    }

    /**
     * Disable the wrapper
     * 
     * @returns {Object} The current object
     */
    withoutWrapping() {
        this.wrapper = null;
        return this;
    }
}

module.exports = Resource;
