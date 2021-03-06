/** `POST /studies-search`
* @alias BrAPINode.prototype.studies_search
* @param {Object} params Parameters to provide to the call
* @param {String} [behavior="fork"] Behavior of the node
* @return {BrAPI_Behavior_Node}
*/
export function studies_search(params,behavior){
    return this.search_studies(params,behavior,true);
};

/** `POST /studies-search`, `POST /search/studies -> GET /search/studies`
* @alias BrAPINode.prototype.search_studies
* @param {Object} params Parameters to provide to the call
* @param {String} [behavior="fork"] Behavior of the node
* @return {BrAPI_Behavior_Node}
*/
export function search_studies(params,behavior,useOld){
    if (this.version.predates("v1.3")||useOld){
        var call = {
            'params': params,
            'behaviorOptions': ['fork','map'],
            'behavior': behavior,
        }
        call.urlTemplate = "/studies-search";
        call.defaultMethod = "post";
        this.version.check(call.urlTemplate,{
            introduced:"v1.0",
            deprecated:"v1.3"
        });
        return this.simple_brapi_call(call);
    } else {
        this.version.check("POST /search/studies -> GET /search/studies",{
            introduced:"v1.3"
        });
        return this.search("studies",params,behavior);
    }
};

/** `GET /studies`
 * @alias BrAPINode.prototype.studies
 * @param {Object} params Parameters to provide to the call
 * @param {String} [behavior="fork"] Behavior of the node
 * @return {BrAPI_Behavior_Node}
 */
export function studies (params,behavior){
    var call = {
        'defaultMethod': 'get',
        'urlTemplate': '/studies',
        'params': params,
        'behaviorOptions': ['fork','map'],
        'behavior': behavior,
    }
    this.version.check(call.urlTemplate,{
        introduced:"v1.3"
    });
    return this.simple_brapi_call(call);
}

/** `GET /studies/{studyDbId}`
 * @alias BrAPINode.prototype.studies_detail
 * @param {Object} params Parameters to provide to the call
 * @param {String} params.studyDbId studyDbId
 * @return {BrAPI_Behavior_Node}
 */
export function studies_detail (params){
    var call = {
        'defaultMethod': 'get',
        'urlTemplate': '/studies/{studyDbId}',
        'params': params,
        'behavior': 'map',
    }
    this.version.check(call.urlTemplate,{
        introduced:"v1.0"
    });
    return this.simple_brapi_call(call);
}

/** `GET /studies/{studyDbId}/germplasm`
 * @alias BrAPINode.prototype.studies_germplasm
 * @param {Object} params Parameters to provide to the call
 * @param {String} params.studyDbId studyDbId
 * @param {String} [behavior="fork"] Behavior of the node
 * @return {BrAPI_Behavior_Node}
 */
export function studies_germplasm (params,behavior){
    var call = {
        'defaultMethod': 'get',
        'urlTemplate': '/studies/{studyDbId}/germplasm',
        'params': params,
        'behaviorOptions': ['fork','map'],
        'behavior': behavior,
    }
    this.version.check(call.urlTemplate,{
        introduced:"v1.0"
    });
    return this.simple_brapi_call(call);
}

/** `GET /studies/{studyDbId}/layouts`, `GET /studies/{studyDbId}/layout`
 * @alias BrAPINode.prototype.studies_layouts
 * @param {Object} params Parameters to provide to the call
 * @param {String} params.studyDbId studyDbId
 * @param {String} [behavior="fork"] Behavior of the node
 * @return {BrAPI_Behavior_Node}
 */
export function studies_layouts (params,behavior){
    var call = {
        'defaultMethod': 'get',
        'params': params,
        'behaviorOptions': ['fork','map'],
        'behavior': behavior,
    }
    if(this.version.predates("v1.3")){
        call.urlTemplate = '/studies/{studyDbId}/layout';
        this.version.check(call.urlTemplate,{
            introduced:"v1.0"
        });
    } else {
        call.urlTemplate = '/studies/{studyDbId}/layouts';
        this.version.check(call.urlTemplate,{
            introduced:"v1.3"
        });
    }
    return this.simple_brapi_call(call);
}

/** `GET /studies/{studyDbId}/observations`
 * @alias BrAPINode.prototype.studies_observations
 * @param {Object} params Parameters to provide to the call
 * @param {String} params.studyDbId studyDbId
 * @param {String} [behavior="fork"] Behavior of the node
 * @return {BrAPI_Behavior_Node}
 */
export function studies_observations (params,behavior){
    var call = {
        'defaultMethod': 'get',
        'urlTemplate': '/studies/{studyDbId}/observations',
        'params': params,
        'behaviorOptions': ['fork','map'],
        'behavior': behavior,
    }
    this.version.check(call.urlTemplate,{
        introduced:"v1.0"
    });
    return this.simple_brapi_call(call);
}

/** `PUT /studies/{studyDbId}/observations`(>=v1.1) or `POST /studies/{studyDbId}/observations`(<v1.1)
 * @alias BrAPINode.prototype.studies_observations_modify
 * @param {Object} params Parameters to provide to the call
 * @param {String} params.studyDbId studyDbId
 * @return {BrAPI_Behavior_Node}
 */
export function studies_observations_modify (params){
    var call = {
        'defaultMethod': 'put',
        'urlTemplate': '/studies/{studyDbId}/observations',
        'params': params,
        'behavior': 'map',
    }
    if(this.version.predates("v1.1")){
        call.defaultMethod = "post"
        this.version.check(call.urlTemplate,{
            introduced:"v1.0",
            deprecated:"v1.1"
        });
    } else {
        call.defaultMethod = "put"
        this.version.check(call.urlTemplate,{
            introduced:"v1.1"
        });
    }
    
    return this.simple_brapi_call(call);
}

/** `POST /studies/{studyDbId}/observations/zip`
 * @alias BrAPINode.prototype.studies_observations_modify
 * @param {Object} params Parameters to provide to the call
 * @param {String} params.studyDbId studyDbId
 * @return {BrAPI_Behavior_Node}
 */
export function studies_observations_zip (params){
    var call = {
        'defaultMethod': 'post',
        'urlTemplate': '/studies/{studyDbId}/observations/zip',
        'params': params,
        'behavior': 'map',
    }
    this.version.check(call.urlTemplate,{
        introduced:"v1.1"
    });
    
    return this.simple_brapi_call(call);
}

/** `GET /studies/{studyDbId}/observationvariables`
 * @alias BrAPINode.prototype.studies_observationvariables
 * @param {Object} params Parameters to provide to the call
 * @param {String} params.studyDbId studyDbId
 * @param {String} [behavior="fork"] Behavior of the node
 * @return {BrAPI_Behavior_Node}
 */
export function studies_observationvariables (params,behavior){
    var call = {
        'defaultMethod': 'get',
        'params': params,
        'behaviorOptions': ['fork','map'],
        'behavior': behavior,
    }
    if(this.version.predates("v1.1")){
        call.urlTemplate= '/studies/{studyDbId}/observationVariables',
        this.version.check(call.urlTemplate,{
            introduced:"v1.0",
            deprecated:"v1.1"
        });
    } else {
        call.urlTemplate= '/studies/{studyDbId}/observationvariables',
        this.version.check(call.urlTemplate,{
            introduced:"v1.1"
        });
    }
    
    return this.simple_brapi_call(call);
}

/** `GET /studies/{studyDbId}/table`
 * @alias BrAPINode.prototype.studies_table
 * @param {Object} params Parameters to provide to the call
 * @param {String} params.studyDbId studyDbId
 * @param {String} [behavior="fork"] Behavior of the node
 * @return {BrAPI_Behavior_Node}
 */
export function studies_table (params,behavior){
    var call = {
        'defaultMethod': 'get',
        'urlTemplate':'/studies/{studyDbId}/table',
        'params': params,
        'behaviorOptions': ['fork','map'],
        'behavior': behavior,
    }
    this.version.check(call.urlTemplate,{
        introduced:"v1.0"
    });
    
    return this.simple_brapi_call(call);
}

/** `POST /studies/{studyDbId}/table`
 * @alias BrAPINode.prototype.studies_table_add
 * @param {Object} params Parameters to provide to the call
 * @param {String} params.studyDbId studyDbId
 * @param {String} [behavior="fork"] Behavior of the node
 * @return {BrAPI_Behavior_Node}
 */
export function studies_table_add (params,behavior){
    var call = {
        'defaultMethod': 'post',
        'urlTemplate':'/studies/{studyDbId}/table',
        'params': params,
        'behaviorOptions': ['fork','map'],
        'behavior': behavior,
    }
    this.version.check(call.urlTemplate,{
        introduced:"v1.0"
    });
    
    return this.simple_brapi_call(call);
}

/** `GET /studytypes`(>=v1.1) or `GET /studyTypes`(<v1.1)
 * @alias BrAPINode.prototype.studytypes
 * @param {Object} params Parameters to provide to the call
 * @param {String} [behavior="fork"] Behavior of the node
 * @return {BrAPI_Behavior_Node}
 */
export function studytypes (params,behavior){
    var call = {
        'defaultMethod': 'get',
        'params': params,
        'behaviorOptions': ['fork','map'],
        'behavior': behavior,
    }
    if(this.verison.predates("v1.1")){
        call.urlTemplate = '/studyTypes';
        this.version.check(call.urlTemplate,{
            introduced:"v1.0",
            deprecated:"v1.1"
        });
    } else {
        call.urlTemplate = '/studytypes';
        this.version.check(call.urlTemplate,{
            introduced:"v1.1"
        });
    }
    
    return this.simple_brapi_call(call);
}
