xcomponents.appVersion = '0.1';
xcomponents.menuOptions = [
    
    { label : 'Resilify app', url : '/', icon : 'fa-dashboard' }
    
  ];

xcomponents.models['dataObject'] = {
  name : 'Data object',
  fields : [
    { label : 'Name' , field: 'name', required: true},
    { label : 'Details' , field: 'details', type : 'multiline' },
    { label : 'Scope/module', field : 'scope', type : 'select', options : ['System', 'Dashboard', 'Document Wiki']},
    { label : 'Attributes', field : 'attributes', type : 'multiline'}
  ]
};