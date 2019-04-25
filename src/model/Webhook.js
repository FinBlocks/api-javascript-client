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
    root.Onfido.Webhook = factory(root.Onfido.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Webhook model module.
   * @module model/Webhook
   * @version 4.0.1
   */

  /**
   * Constructs a new <code>Webhook</code>.
   * @alias module:model/Webhook
   * @class
   * @param url {String} The url that will listen to notifications (must be https).
   */
  var exports = function(url) {
    var _this = this;

    _this['url'] = url;
  };

  /**
   * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Webhook} obj Optional instance to populate.
   * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('environments')) {
        obj['environments'] = ApiClient.convertToType(data['environments'], ['String']);
      }
      if (data.hasOwnProperty('events')) {
        obj['events'] = ApiClient.convertToType(data['events'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The unique identifier of the webhook. Read-only.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Webhook secret token used to sign the webhook's payload. Read-only.
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * The API endpoint to retrieve the webhook. Read-only.
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * The url that will listen to notifications (must be https).
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Determine if the webhook is active.
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * The environments from which the webhook will receive events. Allowed values are “sandbox” and “live”. If the environments parameter is omitted the webhook will receive events from both environments. 
   * @member {Array.<String>} environments
   */
  exports.prototype['environments'] = undefined;
  /**
   * The events that will be published to the webhook. The supported events are: `report.completed`, `report.withdrawn`, `check.completed`, `check.started`, `check.form_opened`, `check.form_completed`. If the events parameter is omitted all the events will be subscribed. 
   * @member {Array.<String>} events
   */
  exports.prototype['events'] = undefined;


  /**
   * Returns The unique identifier of the webhook. Read-only.
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * Sets The unique identifier of the webhook. Read-only.
   * @param {String} id The unique identifier of the webhook. Read-only.
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }


  /**
   * Returns Webhook secret token used to sign the webhook's payload. Read-only.
   * @return {String}
   */
  exports.prototype.getToken = function() {
    return this['token'];
  }

  /**
   * Sets Webhook secret token used to sign the webhook's payload. Read-only.
   * @param {String} token Webhook secret token used to sign the webhook's payload. Read-only.
   */
  exports.prototype.setToken = function(token) {
    this['token'] = token;
  }


  /**
   * Returns The API endpoint to retrieve the webhook. Read-only.
   * @return {String}
   */
  exports.prototype.getHref = function() {
    return this['href'];
  }

  /**
   * Sets The API endpoint to retrieve the webhook. Read-only.
   * @param {String} href The API endpoint to retrieve the webhook. Read-only.
   */
  exports.prototype.setHref = function(href) {
    this['href'] = href;
  }


  /**
   * Returns The url that will listen to notifications (must be https).
   * @return {String}
   */
  exports.prototype.getUrl = function() {
    return this['url'];
  }

  /**
   * Sets The url that will listen to notifications (must be https).
   * @param {String} url The url that will listen to notifications (must be https).
   */
  exports.prototype.setUrl = function(url) {
    this['url'] = url;
  }


  /**
   * Returns Determine if the webhook is active.
   * @return {Boolean}
   */
  exports.prototype.getEnabled = function() {
    return this['enabled'];
  }

  /**
   * Sets Determine if the webhook is active.
   * @param {Boolean} enabled Determine if the webhook is active.
   */
  exports.prototype.setEnabled = function(enabled) {
    this['enabled'] = enabled;
  }


  /**
   * Returns The environments from which the webhook will receive events. Allowed values are “sandbox” and “live”. If the environments parameter is omitted the webhook will receive events from both environments. 
   * @return {Array.<String>}
   */
  exports.prototype.getEnvironments = function() {
    return this['environments'];
  }

  /**
   * Sets The environments from which the webhook will receive events. Allowed values are “sandbox” and “live”. If the environments parameter is omitted the webhook will receive events from both environments. 
   * @param {Array.<String>} environments The environments from which the webhook will receive events. Allowed values are “sandbox” and “live”. If the environments parameter is omitted the webhook will receive events from both environments. 
   */
  exports.prototype.setEnvironments = function(environments) {
    this['environments'] = environments;
  }


  /**
   * Returns The events that will be published to the webhook. The supported events are: `report.completed`, `report.withdrawn`, `check.completed`, `check.started`, `check.form_opened`, `check.form_completed`. If the events parameter is omitted all the events will be subscribed. 
   * @return {Array.<String>}
   */
  exports.prototype.getEvents = function() {
    return this['events'];
  }

  /**
   * Sets The events that will be published to the webhook. The supported events are: `report.completed`, `report.withdrawn`, `check.completed`, `check.started`, `check.form_opened`, `check.form_completed`. If the events parameter is omitted all the events will be subscribed. 
   * @param {Array.<String>} events The events that will be published to the webhook. The supported events are: `report.completed`, `report.withdrawn`, `check.completed`, `check.started`, `check.form_opened`, `check.form_completed`. If the events parameter is omitted all the events will be subscribed. 
   */
  exports.prototype.setEvents = function(events) {
    this['events'] = events;
  }



  return exports;
}));


