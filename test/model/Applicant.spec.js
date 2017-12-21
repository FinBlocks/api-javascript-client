/**
 * Onfido API
 * The Onfido API is used to submit check requests.
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    instance = new Onfido.Applicant();
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

  describe('Applicant', function() {
    it('should create an instance of Applicant', function() {
      // uncomment below and update the code to test Applicant
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be.a(Onfido.Applicant);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property href (base name: "href")', function() {
      // uncomment below and update the code to test the property href
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property middleName (base name: "middle_name")', function() {
      // uncomment below and update the code to test the property middleName
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property dob (base name: "dob")', function() {
      // uncomment below and update the code to test the property dob
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property telephone (base name: "telephone")', function() {
      // uncomment below and update the code to test the property telephone
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property mobile (base name: "mobile")', function() {
      // uncomment below and update the code to test the property mobile
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property sandbox (base name: "sandbox")', function() {
      // uncomment below and update the code to test the property sandbox
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property nationality (base name: "nationality")', function() {
      // uncomment below and update the code to test the property nationality
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property mothersMaidenName (base name: "mothers_maiden_name")', function() {
      // uncomment below and update the code to test the property mothersMaidenName
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property countryOfBirth (base name: "country_of_birth")', function() {
      // uncomment below and update the code to test the property countryOfBirth
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property townOfBirth (base name: "town_of_birth")', function() {
      // uncomment below and update the code to test the property townOfBirth
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property previousLastName (base name: "previous_last_name")', function() {
      // uncomment below and update the code to test the property previousLastName
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property addresses (base name: "addresses")', function() {
      // uncomment below and update the code to test the property addresses
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

    it('should have the property idNumbers (base name: "id_numbers")', function() {
      // uncomment below and update the code to test the property idNumbers
      //var instane = new Onfido.Applicant();
      //expect(instance).to.be();
    });

  });

}));