# Onfido.CheckCreationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | standard or express | 
**redirectUri** | **String** | For standard checks, redirect to this URI when the applicant has submitted their data. | [optional] 
**reports** | [**[Report]**](Report.md) | Array of Reports being requested for this check. | [optional] 
**reportTypeGroups** | **[String]** | Array containing ids of the Report type groups being requested for. | [optional] 
**criminalHistoryReportDetails** | **Object** | Hash containing properties required for standard or enhanced UK criminal history reports. Only required for checks containing these specific reports. See Criminal history report details arguments. | [optional] 
**tags** | **[String]** | Array of tags being assigned to this check. | [optional] 
**suppressFormEmails** | **Boolean** | For standard checks, applicant form will not be automatically sent if this is set to true. You can manually send the form at any time after the check has been created, using the link found in the form_uri attribute of the check object. Defaults to false (i.e., form will be sent automatically by default). | [optional] 
**chargeApplicantForCheck** | **Boolean** | For standard checks, applicants will be presented with a mandatory payment screen before they can submit the applicant form, if this is set to true. In this case, your account will not be charged. Defaults to false. | [optional] 


