# Angular Basic Functionalities

Pre-requisites
Install Angular Material ` ng add @angular/material `

Setting up
- ng new project-name
- ng add @angular/material    

1. What is Angular Material? Angular Material is a design and component library for building web applications with Angular framework. It's a set of ready-to-use UI components that follow the Material Design guidelines created by Google. 

1.1 Angular Dialog https://material.angular.io/components/dialog

2. Interface
  
![Screenshot 2023-08-25 170550](https://github.com/mkc-lomio/Angular/assets/78136159/9a606334-c2a9-4f77-a86f-6cee418c786d)


3. LifeCycle Hooks

3.1 ngOnChanges: Called when an input property of the component changes.

3.2 ngOnInit: Called once, after the component and its child views have been initialized.

3.3 ngDoCheck: Called during every change detection run, allowing you to detect and act upon changes.

3.4 ngAfterContentInit: Called after content (e.g., projected content) has been initialized.

3.5 ngAfterContentChecked: Called after every check of the component's content.

3.6 ngAfterViewInit: Called after the component's view (and its child views) have been initialized.

3.7 ngAfterViewChecked: Called after every check of the component's view and its child views.

3.8 ngOnDestroy: Called just before the component is destroyed and removed from the DOM.


