/**
 * Onfido API
 * The Onfido API is used to submit check requests.
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Document'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Document'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.DocumentsList = factory(root.Onfido.ApiClient, root.Onfido.Document);
  }
}(this, function(ApiClient, Document) {
  'use strict';



  /**
   * The DocumentsList model module.
   * @module model/DocumentsList
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>DocumentsList</code>.
   * @alias module:model/DocumentsList
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>DocumentsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentsList} obj Optional instance to populate.
   * @return {module:model/DocumentsList} The populated <code>DocumentsList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('documents')) {
        obj['documents'] = ApiClient.convertToType(data['documents'], [Document]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Document>} documents
   */
  exports.prototype['documents'] = undefined;


  /**
   * @return {Array.<module:model/Document>}
   */
  exports.prototype.getDocuments = function() {
    return this['documents'];
  }

  /**
   * @param {Array.<module:model/Document>} documents
   */
  exports.prototype.setDocuments = function(documents) {
    this['documents'] = documents;
  }



  return exports;
}));


