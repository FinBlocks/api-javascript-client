# Onfido.Applicant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier for the applicant | [optional] 
**createdAt** | **Date** | The date and time when this applicant was created | [optional] 
**deleteAt** | **Date** | The date and time when this applicant is scheduled to be deleted, or null if the applicant is not scheduled to be deleted | [optional] 
**href** | **String** | The uri of this resource | [optional] 
**title** | **String** | The applicant’s title | [optional] 
**firstName** | **String** | The applicant’s first name | 
**middleName** | **String** | The applicant’s middle name(s) or initial | [optional] 
**lastName** | **String** | The applicant’s surname | 
**email** | **String** | The applicant’s email address | [optional] 
**gender** | **String** | The applicant’s gender. Valid values are male and female | [optional] 
**dob** | **Date** | The applicant’s date of birth | [optional] 
**telephone** | **String** | The applicant’s landline phone number | [optional] 
**mobile** | **String** | The applicant’s mobile phone number | [optional] 
**country** | **String** | The country where this applicant will be checked. This must be a three-letter ISO code e.g. GBR or USA | [optional] 
**sandbox** | **Boolean** |  | [optional] 
**nationality** | **String** | The applicant&#39;s nationality. This must be a three-letter ISO code e.g. GBR or USA | [optional] 
**mothersMaidenName** | **String** | The applicant’s mothers maiden name | [optional] 
**countryOfBirth** | **String** | The applicant’s country of birth | [optional] 
**townOfBirth** | **String** | The applicant’s town of birth | [optional] 
**previousLastName** | **String** | The applicant’s previous last name | [optional] 
**addresses** | [**[Address]**](Address.md) |  | [optional] 
**idNumbers** | [**[IdNumber]**](IdNumber.md) |  | [optional] 


