xcomponents.appVersion = '0.1';
xcomponents.menuOptions = [
    
    { label : 'Resilify app', url : '/', icon : 'fa-dashboard' }
    
  ];

xcomponents.models['dataObject'] = {
  name : 'Data object',
  fields : [
    { label : 'Name' , field: 'name', required: true},
    { label : 'Details' , field: 'details', type : 'multiline' },
    { label : 'Scope/module', field : 'scope', type : 'select', options : ['System', 'Overview', 'Dashboard', 'Document app', 'Workbook app']},
    { label : 'Attributes', field : 'attributes', type : 'multiline'},
    { label : 'Last update', field : 'updated', type : 'date', edit : false}
  ]
};