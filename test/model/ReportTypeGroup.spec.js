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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Onfido);
  }
}(this, function(expect, Onfido) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Onfido.ReportTypeGroup();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ReportTypeGroup', function() {
    it('should create an instance of ReportTypeGroup', function() {
      // uncomment below and update the code to test ReportTypeGroup
      //var instance = new Onfido.ReportTypeGroup();
      //expect(instance).to.be.a(Onfido.ReportTypeGroup);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Onfido.ReportTypeGroup();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Onfido.ReportTypeGroup();
      //expect(instance).to.be();
    });

    it('should have the property group_only (base name: "group_only")', function() {
      // uncomment below and update the code to test the property group_only
      //var instance = new Onfido.ReportTypeGroup();
      //expect(instance).to.be();
    });

    it('should have the property report_types (base name: "report_types")', function() {
      // uncomment below and update the code to test the property report_types
      //var instance = new Onfido.ReportTypeGroup();
      //expect(instance).to.be();
    });

  });

}));
