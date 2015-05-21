# isa.form - _Reusable, declarative form components_

### Objectives

- Reduce validation configuration boilerplate
- Reduce other `ngForm` 'pluming'
- Offer high level form components such as the `basic` `isaFormField`
- Complete flexibility - client code should be able to use `isa.form` alongside the traditional angular `FormController`  without having to make compromises

### Core Components

###### `isaFormField`

###### `isaInput`

###### `isaValidationMessages`

### Motivations and Advantages of Using

### Limitations

- The directive hierarchy is currently quite limited; you can't position `isaValidationMessages` outside of an `isaFormField`. It would be nice to be able to define validation messages at an arbitrary position within a form and link them discretely to a `isaInput`.
