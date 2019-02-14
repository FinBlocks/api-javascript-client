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
    root.Onfido.CheckCommon = factory(root.Onfido.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CheckCommon model module.
   * @module model/CheckCommon
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>CheckCommon</code>.
   * @alias module:model/CheckCommon
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CheckCommon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckCommon} obj Optional instance to populate.
   * @return {module:model/CheckCommon} The populated <code>CheckCommon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
      if (data.hasOwnProperty('download_uri')) {
        obj['download_uri'] = ApiClient.convertToType(data['download_uri'], 'String');
      }
      if (data.hasOwnProperty('form_uri')) {
        obj['form_uri'] = ApiClient.convertToType(data['form_uri'], 'String');
      }
      if (data.hasOwnProperty('redirect_uri')) {
        obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
      }
      if (data.hasOwnProperty('results_uri')) {
        obj['results_uri'] = ApiClient.convertToType(data['results_uri'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('report_type_groups')) {
        obj['report_type_groups'] = ApiClient.convertToType(data['report_type_groups'], ['String']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('suppress_form_emails')) {
        obj['suppress_form_emails'] = ApiClient.convertToType(data['suppress_form_emails'], 'Boolean');
      }
      if (data.hasOwnProperty('charge_applicant_for_check')) {
        obj['charge_applicant_for_check'] = ApiClient.convertToType(data['charge_applicant_for_check'], 'Boolean');
      }
      if (data.hasOwnProperty('brand_id')) {
        obj['brand_id'] = ApiClient.convertToType(data['brand_id'], 'String');
      }
      if (data.hasOwnProperty('async')) {
        obj['async'] = ApiClient.convertToType(data['async'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The unique identifier for the check. Read-only.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date and time when this check was created. Read-only.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The uri of this resource. Read-only.
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * The current state of the check in the checking process. Read-only.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The overall result of the check, based on the results of the constituent reports. Read-only.
   * @member {String} result
   */
  exports.prototype['result'] = undefined;
  /**
   * A link to a PDF output of the check results. Append `.pdf` to get the pdf file. Read-only.
   * @member {String} download_uri
   */
  exports.prototype['download_uri'] = undefined;
  /**
   * A link to the applicant form, if the check is of type `standard`. Read-only.
   * @member {String} form_uri
   */
  exports.prototype['form_uri'] = undefined;
  /**
   * For `standard` checks, redirect to this URI when the applicant has submitted their data. Read-only.
   * @member {String} redirect_uri
   */
  exports.prototype['redirect_uri'] = undefined;
  /**
   * A link to the corresponding results page on the Onfido dashboard.
   * @member {String} results_uri
   */
  exports.prototype['results_uri'] = undefined;
  /**
   * The type of the check, `standard` or `express`.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Array containing ids of the Report type groups being requested for. Write-only.
   * @member {Array.<String>} report_type_groups
   */
  exports.prototype['report_type_groups'] = undefined;
  /**
   * Array of tags being assigned to this check.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * For standard checks, applicant form will not be automatically sent if this is set to true. You can manually send the form at any time after the check has been created, using the link found in the form_uri attribute of the check object. Write-only. 
   * @member {Boolean} suppress_form_emails
   * @default false
   */
  exports.prototype['suppress_form_emails'] = false;
  /**
   * For standard checks, applicants will be presented with a mandatory payment screen before they can submit the applicant form, if this is set to true. In this case, your account will not be charged. Write-only. 
   * @member {Boolean} charge_applicant_for_check
   * @default false
   */
  exports.prototype['charge_applicant_for_check'] = false;
  /**
   * ID of the brand under which the check should be conducted. Write-only.
   * @member {String} brand_id
   */
  exports.prototype['brand_id'] = undefined;
  /**
   * If this is set to true, we will queue checks for processing and return a response immediately. You can configure webhooks to notify you when the report is complete. Write-only. 
   * @member {Boolean} async
   * @default false
   */
  exports.prototype['async'] = false;


  /**
   * Returns The unique identifier for the check. Read-only.
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * Sets The unique identifier for the check. Read-only.
   * @param {String} id The unique identifier for the check. Read-only.
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }


  /**
   * Returns The date and time when this check was created. Read-only.
   * @return {Date}
   */
  exports.prototype.getCreatedAt = function() {
    return this['created_at'];
  }

  /**
   * Sets The date and time when this check was created. Read-only.
   * @param {Date} created_at The date and time when this check was created. Read-only.
   */
  exports.prototype.setCreatedAt = function(created_at) {
    this['created_at'] = created_at;
  }


  /**
   * Returns The uri of this resource. Read-only.
   * @return {String}
   */
  exports.prototype.getHref = function() {
    return this['href'];
  }

  /**
   * Sets The uri of this resource. Read-only.
   * @param {String} href The uri of this resource. Read-only.
   */
  exports.prototype.setHref = function(href) {
    this['href'] = href;
  }


  /**
   * Returns The current state of the check in the checking process. Read-only.
   * @return {String}
   */
  exports.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * Sets The current state of the check in the checking process. Read-only.
   * @param {String} status The current state of the check in the checking process. Read-only.
   */
  exports.prototype.setStatus = function(status) {
    this['status'] = status;
  }


  /**
   * Returns The overall result of the check, based on the results of the constituent reports. Read-only.
   * @return {String}
   */
  exports.prototype.getResult = function() {
    return this['result'];
  }

  /**
   * Sets The overall result of the check, based on the results of the constituent reports. Read-only.
   * @param {String} result The overall result of the check, based on the results of the constituent reports. Read-only.
   */
  exports.prototype.setResult = function(result) {
    this['result'] = result;
  }


  /**
   * Returns A link to a PDF output of the check results. Append `.pdf` to get the pdf file. Read-only.
   * @return {String}
   */
  exports.prototype.getDownloadUri = function() {
    return this['download_uri'];
  }

  /**
   * Sets A link to a PDF output of the check results. Append `.pdf` to get the pdf file. Read-only.
   * @param {String} download_uri A link to a PDF output of the check results. Append `.pdf` to get the pdf file. Read-only.
   */
  exports.prototype.setDownloadUri = function(download_uri) {
    this['download_uri'] = download_uri;
  }


  /**
   * Returns A link to the applicant form, if the check is of type `standard`. Read-only.
   * @return {String}
   */
  exports.prototype.getFormUri = function() {
    return this['form_uri'];
  }

  /**
   * Sets A link to the applicant form, if the check is of type `standard`. Read-only.
   * @param {String} form_uri A link to the applicant form, if the check is of type `standard`. Read-only.
   */
  exports.prototype.setFormUri = function(form_uri) {
    this['form_uri'] = form_uri;
  }


  /**
   * Returns For `standard` checks, redirect to this URI when the applicant has submitted their data. Read-only.
   * @return {String}
   */
  exports.prototype.getRedirectUri = function() {
    return this['redirect_uri'];
  }

  /**
   * Sets For `standard` checks, redirect to this URI when the applicant has submitted their data. Read-only.
   * @param {String} redirect_uri For `standard` checks, redirect to this URI when the applicant has submitted their data. Read-only.
   */
  exports.prototype.setRedirectUri = function(redirect_uri) {
    this['redirect_uri'] = redirect_uri;
  }


  /**
   * Returns A link to the corresponding results page on the Onfido dashboard.
   * @return {String}
   */
  exports.prototype.getResultsUri = function() {
    return this['results_uri'];
  }

  /**
   * Sets A link to the corresponding results page on the Onfido dashboard.
   * @param {String} results_uri A link to the corresponding results page on the Onfido dashboard.
   */
  exports.prototype.setResultsUri = function(results_uri) {
    this['results_uri'] = results_uri;
  }


  /**
   * Returns The type of the check, `standard` or `express`.
   * @return {String}
   */
  exports.prototype.getType = function() {
    return this['type'];
  }

  /**
   * Sets The type of the check, `standard` or `express`.
   * @param {String} type The type of the check, `standard` or `express`.
   */
  exports.prototype.setType = function(type) {
    this['type'] = type;
  }


  /**
   * Returns Array containing ids of the Report type groups being requested for. Write-only.
   * @return {Array.<String>}
   */
  exports.prototype.getReportTypeGroups = function() {
    return this['report_type_groups'];
  }

  /**
   * Sets Array containing ids of the Report type groups being requested for. Write-only.
   * @param {Array.<String>} report_type_groups Array containing ids of the Report type groups being requested for. Write-only.
   */
  exports.prototype.setReportTypeGroups = function(report_type_groups) {
    this['report_type_groups'] = report_type_groups;
  }


  /**
   * Returns Array of tags being assigned to this check.
   * @return {Array.<String>}
   */
  exports.prototype.getTags = function() {
    return this['tags'];
  }

  /**
   * Sets Array of tags being assigned to this check.
   * @param {Array.<String>} tags Array of tags being assigned to this check.
   */
  exports.prototype.setTags = function(tags) {
    this['tags'] = tags;
  }


  /**
   * Returns For standard checks, applicant form will not be automatically sent if this is set to true. You can manually send the form at any time after the check has been created, using the link found in the form_uri attribute of the check object. Write-only. 
   * @return {Boolean}
   */
  exports.prototype.getSuppressFormEmails = function() {
    return this['suppress_form_emails'];
  }

  /**
   * Sets For standard checks, applicant form will not be automatically sent if this is set to true. You can manually send the form at any time after the check has been created, using the link found in the form_uri attribute of the check object. Write-only. 
   * @param {Boolean} suppress_form_emails For standard checks, applicant form will not be automatically sent if this is set to true. You can manually send the form at any time after the check has been created, using the link found in the form_uri attribute of the check object. Write-only. 
   */
  exports.prototype.setSuppressFormEmails = function(suppress_form_emails) {
    this['suppress_form_emails'] = suppress_form_emails;
  }


  /**
   * Returns For standard checks, applicants will be presented with a mandatory payment screen before they can submit the applicant form, if this is set to true. In this case, your account will not be charged. Write-only. 
   * @return {Boolean}
   */
  exports.prototype.getChargeApplicantForCheck = function() {
    return this['charge_applicant_for_check'];
  }

  /**
   * Sets For standard checks, applicants will be presented with a mandatory payment screen before they can submit the applicant form, if this is set to true. In this case, your account will not be charged. Write-only. 
   * @param {Boolean} charge_applicant_for_check For standard checks, applicants will be presented with a mandatory payment screen before they can submit the applicant form, if this is set to true. In this case, your account will not be charged. Write-only. 
   */
  exports.prototype.setChargeApplicantForCheck = function(charge_applicant_for_check) {
    this['charge_applicant_for_check'] = charge_applicant_for_check;
  }


  /**
   * Returns ID of the brand under which the check should be conducted. Write-only.
   * @return {String}
   */
  exports.prototype.getBrandId = function() {
    return this['brand_id'];
  }

  /**
   * Sets ID of the brand under which the check should be conducted. Write-only.
   * @param {String} brand_id ID of the brand under which the check should be conducted. Write-only.
   */
  exports.prototype.setBrandId = function(brand_id) {
    this['brand_id'] = brand_id;
  }


  /**
   * Returns If this is set to true, we will queue checks for processing and return a response immediately. You can configure webhooks to notify you when the report is complete. Write-only. 
   * @return {Boolean}
   */
  exports.prototype.getAsync = function() {
    return this['async'];
  }

  /**
   * Sets If this is set to true, we will queue checks for processing and return a response immediately. You can configure webhooks to notify you when the report is complete. Write-only. 
   * @param {Boolean} async If this is set to true, we will queue checks for processing and return a response immediately. You can configure webhooks to notify you when the report is complete. Write-only. 
   */
  exports.prototype.setAsync = function(async) {
    this['async'] = async;
  }



  return exports;
}));

