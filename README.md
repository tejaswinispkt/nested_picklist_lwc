# nested_picklist_lwc

An LWC (Lightning Web Component) which is a set of dropdowns / picklists, whose values are dependent on each other. 
For example - 

Suppose there are 4 dropdowns - A,B,C and D. The value of B depends on A, C on B and D on C. Now, when a user picks a value from a dropdown A, the dropdown B loads up accordingly, and so on. This can be implemented for n dropdowns.

Dependency List : A ---> B ---> C ---> D ---> .. n times

## Installation

The entire component consists of three sub-components working synchronously with each other :

- `Picklist_SearchBar` : This sub-component implments a search functionality for a dropdown, making it easier for the user to browse through dropdown options.
- `NestedPickList` :  This subcomponent implments the n dropdowns, and a provision for the date to be loaded from a Salesforce Object, a DB. This is the main sub-component which would implment the dependencies and can be customized according to the user requirements.
- `ABCDPicklistPage` : This sub-component is the view page for all the n dropdowns. This works as a middleware, allowing user interaction and obtaining the data for the dependent dropdowns.

