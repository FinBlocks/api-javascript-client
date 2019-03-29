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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Onfido) {
      root.Onfido = {};
    }
    root.Onfido.Error = factory(root.Onfido.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Error model module.
   * @module model/Error
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Object.<String, Object>} fields
   */
  exports.prototype['fields'] = undefined;


  /**
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * @param {String} id
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }


  /**
   * @return {String}
   */
  exports.prototype.getType = function() {
    return this['type'];
  }

  /**
   * @param {String} type
   */
  exports.prototype.setType = function(type) {
    this['type'] = type;
  }


  /**
   * @return {String}
   */
  exports.prototype.getMessage = function() {
    return this['message'];
  }

  /**
   * @param {String} message
   */
  exports.prototype.setMessage = function(message) {
    this['message'] = message;
  }


  /**
   * @return {Object.<String, Object>}
   */
  exports.prototype.getFields = function() {
    return this['fields'];
  }

  /**
   * @param {Object.<String, Object>} fields
   */
  exports.prototype.setFields = function(fields) {
    this['fields'] = fields;
  }



  return exports;
}));


