# nested_picklist_lwc

## Intoroduction :
An LWC (Lightning Web Component) which is a set of dropdowns / picklists, whose values are dependent on each other. 
For example - 

Suppose there are 4 dropdowns - A,B,C and D. The value of B depends on A, C on B and D on C. Now, when a user picks a value from a dropdown A, the dropdown B loads up accordingly, and so on. This can be implemented for n dropdowns.

Dependency List : A ---> B ---> C ---> D ---> .. n times

