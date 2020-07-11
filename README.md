# nested_picklist_lwc

An LWC (Lightning Web Component) which is a set of dropdowns / picklists, whose values are dependent on each other on a one-to-many based relationship. 

## Introduction

Suppose there are 4 dropdowns - A,B,C and D. The value of **B depends on A**, **C depends on B** and **D on C**. Now, when a user picks a value from a dropdown A, the dropdown B loads up accordingly, and so on. This can be implemented for n dropdowns.

`Dependency List : A (a) ---> B (a,b) ---> C (a,b,c) ---> D (a,b,c,d) ---> .. n times`

## Getting Started

###Understanding the Components

The entire component consists of three sub-components working synchronously with each other :

- `Picklist_SearchBar` : This sub-component implments a search functionality for a dropdown, making it easier for the user to browse through dropdown options.
- `NestedPickList` :  This subcomponent implments the n dropdowns, and a provision for the date to be loaded from a Salesforce Object, a DB. This is the main sub-component which would implment the dependencies and can be customized according to the user requirements.
- `ABCDPicklistPage` : This sub-component is the view page for all the n dropdowns. This works as a middleware, allowing user interaction and obtaining the data for the dependent dropdowns.

###Customizing Functions

Lets suppose we have 2 dropdowns *X* and *Y*, where *Y* is dependent on *X*. *X* Dropdown has values *(x)*, and *Y* has values *(x, y)*, where for one value of *x* there can be multiple *y*'s. There are 2 main functions we need to customize in the `NestedPickList` for each dropdown in this case, namely : `get<dropdown>Lists()` and `choose<dropdown>Value(e)`.

For X Dropdown :

```
getXLists(){
   getAList({})
            .then(result => {
                this.XDropdownDetails = result;
                this.selectedXDetails = this.ADropdownDetails;
                ...
            })
            .catch(error => {
                this.error = error;
                this.XDropdownDetails = undefined;
            });
}

chooseXValue(e) {
        ...
        this.selectedX = selectedVal;
        this.toggleYValue();
        ...
        this.picklisteventdetail = {
            name: selectedVal,
            state: this.AState
        }
        this.XState = 'closed';
        const dropdown = new CustomEvent('toggleXdropdown', {
            detail: this.picklisteventdetail
        });
        this.dispatchEvent(dropdown);
    }
```





