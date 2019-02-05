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
    instance = new Onfido.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('cancelReport', function() {
      it('should call cancelReport successfully', function(done) {
        //uncomment below and update the code to test cancelReport
        //instance.cancelReport(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createApplicant', function() {
      it('should call createApplicant successfully', function(done) {
        //uncomment below and update the code to test createApplicant
        //instance.createApplicant(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCheck', function() {
      it('should call createCheck successfully', function(done) {
        //uncomment below and update the code to test createCheck
        //instance.createCheck(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createWebhook', function() {
      it('should call createWebhook successfully', function(done) {
        //uncomment below and update the code to test createWebhook
        //instance.createWebhook(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('destroyApplicant', function() {
      it('should call destroyApplicant successfully', function(done) {
        //uncomment below and update the code to test destroyApplicant
        //instance.destroyApplicant(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadDocument', function() {
      it('should call downloadDocument successfully', function(done) {
        //uncomment below and update the code to test downloadDocument
        //instance.downloadDocument(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadLivePhoto', function() {
      it('should call downloadLivePhoto successfully', function(done) {
        //uncomment below and update the code to test downloadLivePhoto
        //instance.downloadLivePhoto(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAddresses', function() {
      it('should call findAddresses successfully', function(done) {
        //uncomment below and update the code to test findAddresses
        //instance.findAddresses(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findApplicant', function() {
      it('should call findApplicant successfully', function(done) {
        //uncomment below and update the code to test findApplicant
        //instance.findApplicant(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findCheck', function() {
      it('should call findCheck successfully', function(done) {
        //uncomment below and update the code to test findCheck
        //instance.findCheck(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findDocument', function() {
      it('should call findDocument successfully', function(done) {
        //uncomment below and update the code to test findDocument
        //instance.findDocument(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findLivePhoto', function() {
      it('should call findLivePhoto successfully', function(done) {
        //uncomment below and update the code to test findLivePhoto
        //instance.findLivePhoto(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findLiveVideo', function() {
      it('should call findLiveVideo successfully', function(done) {
        //uncomment below and update the code to test findLiveVideo
        //instance.findLiveVideo(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findReport', function() {
      it('should call findReport successfully', function(done) {
        //uncomment below and update the code to test findReport
        //instance.findReport(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findReportTypeGroup', function() {
      it('should call findReportTypeGroup successfully', function(done) {
        //uncomment below and update the code to test findReportTypeGroup
        //instance.findReportTypeGroup(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findWebhook', function() {
      it('should call findWebhook successfully', function(done) {
        //uncomment below and update the code to test findWebhook
        //instance.findWebhook(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listApplicants', function() {
      it('should call listApplicants successfully', function(done) {
        //uncomment below and update the code to test listApplicants
        //instance.listApplicants(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listChecks', function() {
      it('should call listChecks successfully', function(done) {
        //uncomment below and update the code to test listChecks
        //instance.listChecks(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDocuments', function() {
      it('should call listDocuments successfully', function(done) {
        //uncomment below and update the code to test listDocuments
        //instance.listDocuments(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listLivePhotos', function() {
      it('should call listLivePhotos successfully', function(done) {
        //uncomment below and update the code to test listLivePhotos
        //instance.listLivePhotos(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listLiveVideos', function() {
      it('should call listLiveVideos successfully', function(done) {
        //uncomment below and update the code to test listLiveVideos
        //instance.listLiveVideos(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listReportTypeGroups', function() {
      it('should call listReportTypeGroups successfully', function(done) {
        //uncomment below and update the code to test listReportTypeGroups
        //instance.listReportTypeGroups(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listReports', function() {
      it('should call listReports successfully', function(done) {
        //uncomment below and update the code to test listReports
        //instance.listReports(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listWebhooks', function() {
      it('should call listWebhooks successfully', function(done) {
        //uncomment below and update the code to test listWebhooks
        //instance.listWebhooks(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreApplicant', function() {
      it('should call restoreApplicant successfully', function(done) {
        //uncomment below and update the code to test restoreApplicant
        //instance.restoreApplicant(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resumeCheck', function() {
      it('should call resumeCheck successfully', function(done) {
        //uncomment below and update the code to test resumeCheck
        //instance.resumeCheck(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resumeReport', function() {
      it('should call resumeReport successfully', function(done) {
        //uncomment below and update the code to test resumeReport
        //instance.resumeReport(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateApplicant', function() {
      it('should call updateApplicant successfully', function(done) {
        //uncomment below and update the code to test updateApplicant
        //instance.updateApplicant(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadDocument', function() {
      it('should call uploadDocument successfully', function(done) {
        //uncomment below and update the code to test uploadDocument
        //instance.uploadDocument(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadLivePhoto', function() {
      it('should call uploadLivePhoto successfully', function(done) {
        //uncomment below and update the code to test uploadLivePhoto
        //instance.uploadLivePhoto(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
